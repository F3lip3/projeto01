const express = require("express");

const app = express();
const port = 5000;
const data = [];

app.use(express.json());

app.get("/", (req, res) => {
  return res.json(data);
});

app.post("/", (req, res) => {
  const info = req.body;

  data.push(info);

  return res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`> listening on port ${port}`);
});
