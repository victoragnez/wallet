module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
};
