import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Development optimizations
  experimental: {
    // Enable faster refresh
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
    ],
  },

  // Compiler optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
