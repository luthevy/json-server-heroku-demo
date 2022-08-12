const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

router.render = (req, res) => {
  var json = require("./raw.json");
  const fs = require("fs");
  const arr = [];
  for (let i = 0; i < 8; i++) {
    var ran = Math.floor(Math.random() * 80);
    arr[i] = json[ran];
  }
  res.jsonp({
    body: arr,
  });
};

server.use(middlewares);
server.use(router);
server.listen(port);