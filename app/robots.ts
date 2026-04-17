import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/.well-known"],
      },
      {
        userAgent: "AdsBot-Google",
        allow: "/",
      },
    ],
    sitemap: "https://nkqubela.co.za/sitemap.xml",
  };
}
