const express = require('express');
const serverless = require('serverless-http');
const app = express();
app.use(express.json());

function updateDatabase(data) {
  return data;
}

const router = express.Router();
router.get('/test', (req, res) => {
  const newValue = updateDatabase("xs");
  res.json(newValue);
});

app.use('/.netlify/functions/server', router);

module.exports.handler = serverless(app);