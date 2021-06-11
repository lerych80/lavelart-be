const express = require('express');
const serverless = require('serverless-http');
const app = express();

function updateDatabase(data) {
  return data;
}

app.use(express.json());
app.post('/test', (req, res) => {
  const newValue = updateDatabase(res.body);
  res.json(newValue);
});

module.exports.handler = serverless(app);