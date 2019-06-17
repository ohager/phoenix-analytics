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

app.use('*', (req, res) => {

  if(/mutation\W.+?{/gmi.test(req.body.query)){
    return res.sendStatus(403)
  }

  return proxy(proxyOptions)(req, res)
});


module.exports = app;
