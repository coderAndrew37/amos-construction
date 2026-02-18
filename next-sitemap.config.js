/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.amosconstruction.co.ke",
  generateRobotsTxt: true, // Creates robots.txt as well
  generateIndexSitemap: false, // Keep it simple for now
  exclude: ["/server-sitemap.xml"], // Only if you use dynamic SSR sitemaps later
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/admin", "/api"], // Protect these paths
      },
    ],
  },
};
