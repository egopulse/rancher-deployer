require('shelljs/global');

const {
  PORT = 9999,
  RANCHER_URL,
  RANCHER_ACCESS_KEY,
  RANCHER_SECRET_KEY,
  RANCHER_STACK_ID,
  RANCHER_STACK_NAME
} = process.env;

const express = require('express');
const app = express();
const dir = __dirname;

app.get('/', (req, res) => {
  res.send('Nothing to look for here');
  exec('sleep 10');
  echo('test');
});

app.post('/', (req, res) => {
  res.send('Upgrading');

  const PROJECT_CONFIG_URL = `${RANCHER_URL}/environments/${RANCHER_STACK_ID}/composeconfig`;
  
  exec(`curl -s -L -u "${RANCHER_ACCESS_KEY}:${RANCHER_SECRET_KEY}" ${PROJECT_CONFIG_URL} -o ${__dirname}/config.zip`);
  exec(`unzip -o ${__dirname}/config.zip`);
  rm(`${__dirname}/config.zip`);
  exec(`cd ${__dirname} && ./rancher-compose -p ${RANCHER_STACK_NAME} up --force-upgrade --confirm-upgrade --pull -d`);
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});