/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 16+ has app directory enabled by default
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig