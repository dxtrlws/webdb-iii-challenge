const server = require('./server');

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
