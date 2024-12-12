import express from "express";
import getPostRouter from "./controllers/post-controller";

const app = express();
app.use(express.json());

const port = 3000;

app.use("/posts", async (req, res, next) => {
  try {
    const postRouter = await getPostRouter();
    return postRouter(req, res, next);
  } catch (error) {
    next(error);
  }
});

app.get("/", function (req, res) {
  res.send("Hello Express");
});

app.listen(port, () => {
  console.log(`
🚀 Server ready at: http://localhost:${port}`);
});
