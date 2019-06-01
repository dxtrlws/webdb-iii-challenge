const express = require('express');
const server = express();
const cohortRouter = require('./routes/cohortRouter')


server.use(express.json());
server.use('/api/cohorts', cohortRouter)

server.get('/', (req, res) => {
  res.send('server running');
});

module.exports = server;
