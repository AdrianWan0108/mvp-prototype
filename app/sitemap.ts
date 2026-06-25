import type { MetadataRoute } from "next";
import { site } from "./lib/site";

export const dynamic = "force-static";

const routes = [
  "",
  "/classes",
  "/pricing",
  "/polestar",
  "/polestar/teacher-training",
  "/about",
  "/contact",
  "/faq",
  "/terms",
  "/policies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
