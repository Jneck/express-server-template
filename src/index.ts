import { Prisma, PrismaClient } from "@prisma/client";
import express from "express";
// postgres 연결
const prisma = new PrismaClient({
  errorFormat: "pretty",
});
const app = express();
app.use(express.json());

const port = 3000;

app.get("/posts", async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

app.get(`/posts/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params;

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });
  res.json(post);
});

app.post("/posts", async (req, res) => {
  await prisma.post.create({
    data: {
      content: "Alice",
    },
  });

  const posts = await prisma.post.findMany();
  console.log(posts);
});

app.patch("/posts/:id/views", async (req, res) => {
  const { id }: { id?: string } = req.params;

  const post = await prisma.post.update({
    where: { id: Number(id) },
    data: { views: { increment: 1 } },
  });
  console.log(post);
});

app.delete("/posts/:id", async (req, res) => {
  const { id }: { id?: string } = req.params;

  const post = await prisma.post.delete({
    where: { id: Number(id) },
  });
  console.log(post);
});

app.listen(port, () => {
  console.log(`
🚀 Server ready at: http://localhost:${port}`);
});
