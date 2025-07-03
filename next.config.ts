// next.config.js or next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.everythingtalent.ai',
        pathname: '/**', // ← allows all paths, including _next/image
      },
      {
        protocol: 'https',
        hostname: 'sdmzyaxpsheauojrtsvy.supabase.co',
        pathname: '/storage/v1/object/public/**', // ← for Supabase
      },
    ],
  },
};

module.exports = nextConfig;
