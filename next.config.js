module.exports = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    if (!isServer) {
      config.node = { fs: "empty", module: "empty" };
    }

    return config;
  },
  // basePath: process.env.BASE_PATH,
  // assetPrefix: process.env.BASE_PATH,
  // trailingSlash: true,
  // env: {
  //   BASE_PATH: process.env.BASE_PATH,
  // },
};
