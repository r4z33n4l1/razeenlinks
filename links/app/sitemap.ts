import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: "https://www.razeen.im", lastModified: new Date("2026-09-19"), changeFrequency: "monthly", priority: 1 }]; }
