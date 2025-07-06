/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img.icons8.com",
      "raw.githubusercontent.com",
      "cdn.jsdelivr.net",
      "res.cloudinary.com",
      "s3.amazonaws.com",
      "user-images.githubusercontent.com",
      "img.rk-certificate.com",
      "cdn.simpleicons.org", 
    ],
  },
};

module.exports = nextConfig;