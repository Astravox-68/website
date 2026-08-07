import { cp, mkdir, rm, copyFile } from "node:fs/promises";
import { join } from "node:path";

const outputDir = "dist/pages";

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

await cp("dist/client", outputDir, { recursive: true });
await cp("dist/server", outputDir, { recursive: true });
await rm(join(outputDir, "wrangler.json"), { force: true });
await copyFile(join(outputDir, "index.js"), join(outputDir, "_worker.js"));

console.log(`Cloudflare Pages output prepared at ${outputDir}`);
