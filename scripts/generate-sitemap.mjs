import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "node:fs";

const hostname = "https://hotelmanjeera.com";

// All actual routes from App.tsx
const routes = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/rooms", changefreq: "weekly", priority: 0.9 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/gallery", changefreq: "monthly", priority: 0.7 },
  { url: "/contact", changefreq: "yearly", priority: 0.6 },
];

const stream = new SitemapStream({ hostname });

for (const route of routes) {
  stream.write({
    url: route.url,
    changefreq: route.changefreq,
    priority: route.priority,
    lastmod: new Date().toISOString().split("T")[0],
  });
}

stream.end();

const xml = await streamToPromise(stream);
writeFileSync("./public/sitemap.xml", xml.toString());

console.log("✅ sitemap.xml generated successfully at public/sitemap.xml");
