import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
      IMAGES: {
        input: () => ({
          transform: () => ({
            output: async () => ({ response: () => new Response("image") }),
          }),
        }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Astravox homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Technology, Education and Digital Growth \| Astravox<\/title>/i);
  assert.match(html, /Technology, Education and Digital Growth/);
  assert.match(html, /Astravox Technology/);
  assert.match(html, /Astravox Education/);
  assert.match(html, /Astravox Digital Growth/);
  assert.match(html, /Book a Consultation/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("keeps the Astravox build structured and configurable", async () => {
  const [layout, siteConfig, cookieConsent, packageJson] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/site.ts", import.meta.url), "utf8"),
    readFile(new URL("../components/CookieConsent.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /Astravox \| Technology, Education and Digital Growth/);
  assert.match(siteConfig, /registrationNumber/);
  assert.match(siteConfig, /NEXT_PUBLIC_GA_MEASUREMENT_ID/);
  assert.match(siteConfig, /NEXT_PUBLIC_CLARITY_PROJECT_ID/);
  assert.match(cookieConsent, /Cookie choices/);
  assert.match(cookieConsent, /astravox-cookie-consent/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("renders important inner routes", async () => {
  for (const path of [
    "/technology",
    "/education",
    "/digital-growth",
    "/technology/mobile-app-development",
    "/education/personal-statement-support",
    "/digital-growth/seo",
    "/contact",
    "/privacy",
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, /Astravox/);
  }
});
