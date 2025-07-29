/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is now the default in Next.js 15
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // Bind to localhost instead of 0.0.0.0
  serverRuntimeConfig: {
    hostname: 'localhost',
  },
}

module.exports = nextConfig 