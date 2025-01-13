/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning during builds, but don't fail the build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warnings during builds, but don't fail the build
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 