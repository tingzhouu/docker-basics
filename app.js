const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("GET REQUEST RECEIVED");
  res.send("Hello World!");
});

app.listen(port, async () => {
  console.log("have changed something here");
  console.log(`Example app listening at http://localhost:${port}`);
});
