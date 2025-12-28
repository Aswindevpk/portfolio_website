import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aswindev.in",
      lastModified: new Date(),
    },
    {
      url: "https://aswindev.in/about",
      lastModified: new Date(),
    },
  ];
}
