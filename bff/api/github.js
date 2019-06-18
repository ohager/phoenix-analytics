const express = require('express');
const proxy = require('http-proxy-middleware');

function denyMutations (proxyReq, req, res) {
  if(req.body.query && /mutation\W.+?{/gmi.test(req.body.query)){
    res.status(403).end("Mutations are not allowed")
  }
}

const proxyOptions = {
  target: "https://api.github.com",
  pathRewrite: {
    '^/api/github': '/graphql'
  },
  changeOrigin: true,
  headers: {
    Authorization: `Bearer ${process.env.GH_TOKEN}`
  },
  onProxyReq: denyMutations

};

const app = express();

app.use('*',proxy(proxyOptions));


module.exports = app;
