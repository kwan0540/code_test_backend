const express = require("express");
const router = require("./route");
const cors = require("cors");
const redisClient = require("./redis");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

const boostrap = async () => {
  await redisClient.connect();
  app.use(cors());
  app.get("/test", (req, res) => {
    res.send("Hello World!");
  });
  app.use(router);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};

boostrap();
