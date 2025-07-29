/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    loader: 'default',
  },
  experimental: {
    appDir: true,
  },
  // Ensure static export works properly
  distDir: 'out',
  // Disable server-side features for static export
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
