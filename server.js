const generateDatabase = require("./index.js");
const DATABASE = generateDatabase();

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(DATABASE);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 1919;
server.use(middlewares);
server.use(router);

server.listen(port);
