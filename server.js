const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();
const writeDatabase = require("./index");

writeDatabase();

server.use(middlewares);
server.use(router);
server.listen(1919, () => {
  console.log("JSON Server is running");
});

module.exports = server;
