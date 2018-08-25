module.exports = {
  baseUrl:
    process.env.NODE_ENV === "production" ? `${process.cwd()}/dist/` : "/",
  configureWebpack: {
    devtool: "source-map"
  }
};
