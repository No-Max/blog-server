const express = require("express");
const app = express();
const port = 3000;
const posts = require("./models/posts.js");
const cors = require("cors");

app.use(cors());

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/users", (req, res) => {
  res.send([
    {
      id: 1,
      name: "user1",
    },
    {
      id: 2,
      name: "user2",
    },
  ]);
});

app.get("/posts/:id", (req, res) => {
  res.send(posts[req.params.id]);
});

app.post("/posts", (req, res) => {
  res.send(posts);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
