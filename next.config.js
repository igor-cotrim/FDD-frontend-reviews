/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/docente",
      destination: "/pages/Teacher",
    },
  ],
};

module.exports = nextConfig;
