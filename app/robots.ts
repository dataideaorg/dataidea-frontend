import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dataidea.org";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/auth/", "/dashboard", "/enrollments", "/certificates"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
