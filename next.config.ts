import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.stateofflux.co.uk',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fpt.com',  // ✅ added this domain
        pathname: '/**',                     // ✅ allow all image paths
      },
    ],
  },
};

export default nextConfig;
