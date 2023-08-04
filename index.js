const express = require("express");
const app = express();
const Redis = require("redis");
const axios = require("axios");

const redisClient = Redis.createClient();
redisClient
  .connect()
  .then(() => {
    console.log("connected to redis");
  })
  .catch(() => {
    console.log("connection failed");
  });

app.use("/redis/:id", async (req, res) => {
  const cId = req.params.id;
  const data = await redisClient.get(`d${cId}`);
  if (data) {
    console.log("not hitting the api");
    res.send(data);
  } else {
    console.log("hitting the api");
    const apiData = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${cId}`
    );
    const settedData = await redisClient.set(
      `d${cId}`,
      JSON.stringify(apiData.data)
    );
    res.send(settedData);
  }
});

app.listen(2200, () => {
  console.log("redisServer is listening");
});
