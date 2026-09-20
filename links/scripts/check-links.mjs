import { readFile } from "node:fs/promises";
const source = await readFile(new URL("../data/links.json", import.meta.url), "utf8");
const urls = [...new Set([...source.matchAll(/https:\/\/[^\"\s]+/g)].map(([url]) => url.replace(/[),;]/g, "")))];
const failures = [];
for (const url of urls) { try { let response = await fetch(url, { method: "HEAD", redirect: "follow" }); if (response.status === 405) response = await fetch(url, { redirect: "follow" }); const protectedProfile = new URL(url).hostname.endsWith("linkedin.com") && response.status === 999; if (!response.ok && !protectedProfile) failures.push(`${response.status} ${url}`); } catch (error) { failures.push(`${error instanceof Error ? error.message : "Request failed"} ${url}`); } }
if (failures.length) { console.error(`Broken links:\n${failures.join("\n")}`); process.exit(1); }
console.log(`Verified ${urls.length} links.`);
