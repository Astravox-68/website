import { NextResponse } from "next/server";

const recent = new Map<string, number>();

function sanitise(value: unknown) {
  return String(value ?? "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 2000);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (sanitise((body as Record<string, unknown>).website)) {
    return NextResponse.json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for") || "local";
  const now = Date.now();
  if (recent.has(ip) && now - Number(recent.get(ip)) < 3_000) {
    return NextResponse.json(
      { error: "Please wait a moment before submitting again." },
      { status: 429 },
    );
  }
  recent.set(ip, now);

  const entries = Object.entries(body as Record<string, unknown>).map(([key, value]) => [
    sanitise(key),
    sanitise(value),
  ]);
  const hasEmail = entries.some(([key, value]) => key.toLowerCase().includes("email") && value.includes("@"));
  const hasMessage = entries.some(([key, value]) => key.toLowerCase() === "message" && value.length > 2);

  if (!hasEmail || !hasMessage) {
    return NextResponse.json(
      { error: "Please include a valid email address and a short message." },
      { status: 400 },
    );
  }

  console.info("Astravox enquiry received", Object.fromEntries(entries));
  return NextResponse.json({ ok: true });
}
