import express from "express";

const app = express();
app.use(express.json());

const port = 3000;

app.use("/posts", require("./controllers/post.controller"));

app.get("/", function (req, res) {
  res.send("Hello from root route.");
});

app.listen(port, () => {
  console.log(`
🚀 Server ready at: http://localhost:${port}`);
});
