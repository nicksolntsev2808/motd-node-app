const express = require('express');
const { SERVICE_NAME, ENVIRONMENT, OWNER } = require('./settings');

const app = express();

app.get('/', (req, res) => {
  res.send(`${SERVICE_NAME} [${ENVIRONMENT}] — владелец: ${OWNER}`);
});

app.get('/health', (req, res) => {
  res.send('ok');
});

app.listen(6090, '0.0.0.0', () => {
  console.log('motd-node-app listening on port 6090');
});
