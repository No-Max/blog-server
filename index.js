const express = require("express");
const cors = require("cors");

const posts = require("./models/posts.js");
const users = require("./models/users.js")

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())

app.get("/posts", (req, res) => {
  const postsWithUserNames = posts.map(post => {
    return {
      ...post,
      userName: users.find(user => user.id === post.userId).name
    }
  })
  res.send(postsWithUserNames);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/posts/:id", (req, res) => {
  res.send(posts[req.params.id]);
});

app.post("/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    ...req.body,
    views: 0,
    date: new Date(),
  };
  posts.push(newPost);
  res.send(newPost);
});

app.listen(port, () => {
  console.log(`blog-server listening at http://localhost:${port}`);
});
