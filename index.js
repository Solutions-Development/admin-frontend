const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const fw = require("node-firewall");
const router = require("./routes/router");

const server = express();


server.use(bodyParser.urlencoded({ extended: true, limit: "10mb"}));
server.use(bodyParser.json());
server.use(cors());
server.use(logger('common'));
server.use('/', router);
server.use('/', express.static("loginAssets"));

server.set('view engine', 'ejs');

Promise.resolve(server.listen(process.env.PORT)).then(async () => {
    console.log("Server started!");
});