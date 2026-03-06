import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sparlett.no";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/beta`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/valuta`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/bors`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/funksjoner`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/priser`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/interesse`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/om-oss`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/sikkerhet`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blogg`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/karriere`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/personvern`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/gdpr`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
