import type { Router } from "express";
import getPrismaClient from "../prisma";

let postRouterInstance: Router | undefined;
async function getPostRouter(): Promise<Router> {
  if (postRouterInstance) {
    return postRouterInstance;
  }

  const { Router } = await import("express");
  const prismaClient = await getPrismaClient();

  const postRouter = Router();
  const postModel = prismaClient.post;

  postRouter.use((req, res, next) => {
    console.log("Time: ", new Date());
    next();
  });

  postRouter.get("/", async (req, res) => {
    const posts = await postModel.findMany();
    res.json(posts);
  });

  postRouter.get(`/:id`, async (req, res) => {
    const { id }: { id?: string } = req.params;

    const post = await postModel.findUnique({
      where: { id: Number(id) },
    });
    res.json(post);
  });

  postRouter.post("/", async (req, res) => {
    const createdPost = await postModel.create({
      data: {
        content: "Alice",
      },
    });

    console.log(createdPost);
  });

  postRouter.patch("/:id/views", async (req, res) => {
    const { id }: { id?: string } = req.params;

    const post = await postModel.update({
      where: { id: Number(id) },
      data: { views: { increment: 1 } },
    });
    console.log(post);
  });

  postRouter.delete("/:id", async (req, res) => {
    const { id }: { id?: string } = req.params;

    const post = await postModel.delete({
      where: { id: Number(id) },
    });
    console.log(post);
  });

  postRouterInstance = postRouter;
  return postRouterInstance;
}

export default getPostRouter;
