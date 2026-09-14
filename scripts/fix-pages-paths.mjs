import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = "out";
const assetNames = ["favicon.svg", "hero-archive.webp", "hero-digital.webp", "hero-packaging.webp", "wenmai-ai-human-workflow.png", "wenmai-hero-export-transformation.png", "wenmai-packaging.webp", "wenmai-us-japan-comparison.png"];

async function walk(dir) {
  for (const name of await readdir(dir)) {
    const path = join(dir, name);
    if ((await stat(path)).isDirectory()) await walk(path);
    else if (/\.(html|css|js)$/.test(name)) {
      let content = await readFile(path, "utf8");
      for (const asset of assetNames) content = content.replaceAll(`/${asset}`, `/wenmai/${asset}`);
      await writeFile(path, content);
    }
  }
}

await walk(root);
