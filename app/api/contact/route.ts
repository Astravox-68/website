import { NextResponse } from "next/server";

const recent = new Map<string, number>();
const recipientByKind: Record<string, string> = {
  general: "info@astravoxtech.uk",
  technology: "info@astravoxtech.uk",
  education: "info@astravoxtech.uk",
  "digital-growth": "info@astravoxtech.uk",
  careers: "info@astravoxtech.uk",
};

const subjectByKind: Record<string, string> = {
  general: "Astravox website enquiry",
  technology: "Astravox Technology enquiry",
  education: "Astravox Education enquiry",
  "digital-growth": "Astravox Digital Growth enquiry",
  careers: "Mobile Software Engineer application",
};

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
  const hasMessage = entries.some(([key, value]) => key.toLowerCase() === "message" && value.length > 0);

  if (!hasEmail) {
    return NextResponse.json({ error: "Please include a valid email address." }, { status: 400 });
  }
  if (!hasMessage) {
    return NextResponse.json({ error: "Please include a short message." }, { status: 400 });
  }

  const enquiry = Object.fromEntries(entries);
  const kind = sanitise((body as Record<string, unknown>).kind || "general");
  const to = recipientByKind[kind] || recipientByKind.general;
  const subject = subjectByKind[kind] || subjectByKind.general;
  const text = entries
    .filter(([key]) => key !== "website" && key !== "Consent")
    .map(([key, value]) => `${key}: ${value || "-"}`)
    .join("\n");

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Astravox Website <onboarding@resend.dev>";

  if (resendApiKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to,
        subject,
        text,
        reply_to: entries.find(([key]) => key.toLowerCase().includes("email"))?.[1],
      }),
    });

    if (!response.ok) {
      console.error("Astravox enquiry email failed", await response.text());
      return NextResponse.json(
        { error: "Email delivery failed. Please email info@astravoxtech.uk directly." },
        { status: 502 },
      );
    }
  } else {
    console.info("Astravox enquiry received without email provider", enquiry);
    return NextResponse.json(
      { error: "Email delivery is being configured. Please email info@astravoxtech.uk directly." },
      { status: 503 },
    );
  }

  console.info("Astravox enquiry emailed", enquiry);
  return NextResponse.json({ ok: true });
}
