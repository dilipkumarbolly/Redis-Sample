const express = require("express");
const { User, delboy, menu, orders, sequence } = require("./model/db");
const app = express();
const Redis = require("redis");
const axios = require("axios");

const redisClient = Redis.createClient();
redisClient
  .connect()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not cncted");
  });

app.use("/photos", async (req, res) => {
  const data = await redisClient.get(`user2`);
  if (data) {
    console.log("not hitting db");
    res.send(data);
  } else {
    console.log("hitting db ");
    const response = await User.find();
    redisClient.set("user2", JSON.stringify(response));
    res.send(response);
  }
});

app.listen(9000, () => {
  console.log("server is on.......");
});
