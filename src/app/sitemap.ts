import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sparlett.no";
  const lastMod = "2026-03-08";

  return [
    { url: base, lastModified: lastMod, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/beta`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/valuta`, lastModified: lastMod, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/bors`, lastModified: lastMod, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/funksjoner`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/priser`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/interesse`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kontakt`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/om-oss`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/sikkerhet`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/karriere`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/personvern`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/gdpr`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookies`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
  ];
}
