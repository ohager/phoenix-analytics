const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api/github", {
      pathRewrite: {
        '^/api/github': '/graphql'
      },
      target: "https://api.github.com",
      changeOrigin: true,
      headers: {
        Authorization: `Bearer ${process.env.GH_TOKEN}`
      }
    })
  );
};
