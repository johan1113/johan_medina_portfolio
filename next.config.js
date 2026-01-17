/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/johan_medina_portfolio',
  assetPrefix: '/johan_medina_portfolio/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
