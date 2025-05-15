/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubActions ? '/portfolio' : '';
const assetPrefix = isGithubActions ? '/portfolio/' : '';
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
