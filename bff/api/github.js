const express = require('express');
const proxy = require('http-proxy-middleware');

const proxyOptions = {
  target: "https://api.github.com",
  pathRewrite: {
    '^/api/github': '/graphql'
  },
  changeOrigin: true,
  headers: {
    Authorization: `Bearer ${process.env.GH_TOKEN}`
  }
};

const app = express();
app.use('*', proxy(proxyOptions));

module.exports = app;
