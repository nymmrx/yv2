module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  // basePath: process.env.BASE_PATH,
  // assetPrefix: process.env.BASE_PATH,
  // trailingSlash: true,
  // env: {
  //   BASE_PATH: process.env.BASE_PATH,
  // },
};
