const express = require('express');
const app = express();

app.use('*', (req,res) => {
  res.end('Phoenix Analytics API is up!')
});

module.exports = app;
