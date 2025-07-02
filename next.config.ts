// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.everythingtalent.ai',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
