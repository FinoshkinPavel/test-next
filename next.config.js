/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        minimumCacheTTL: 60,
        imageSizes: [100, 300, 350, 400, 450, 500, 700, 800, 1500],
        formats: ["image/webp"],
        domains: ["ozcars-backend.tds.media", "yeniaraba.com.tr"],
      },
}

module.exports = nextConfig
