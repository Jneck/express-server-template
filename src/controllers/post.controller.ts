import express from "express";

const prisma = require("../prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

router.get(`/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params;

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });
  res.json(post);
});

router.post("/", async (req, res) => {
  await prisma.post.create({
    data: {
      content: "Alice",
    },
  });

  const posts = await prisma.post.findMany();
  console.log(posts);
});

router.patch("/:id/views", async (req, res) => {
  const { id }: { id?: string } = req.params;

  const post = await prisma.post.update({
    where: { id: Number(id) },
    data: { views: { increment: 1 } },
  });
  console.log(post);
});

router.delete("/:id", async (req, res) => {
  const { id }: { id?: string } = req.params;

  const post = await prisma.post.delete({
    where: { id: Number(id) },
  });
  console.log(post);
});

module.exports = router;
