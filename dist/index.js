"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const prisma = new client_1.PrismaClient({
    errorFormat: "pretty",
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 3000;
app.get("/posts", async (req, res) => {
    const posts = await prisma.post.findMany();
    res.json(posts);
});
app.get(`/posts/:id`, async (req, res) => {
    const { id } = req.params;
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
    const { id } = req.params;
    const post = await prisma.post.update({
        where: { id: Number(id) },
        data: { views: { increment: 1 } },
    });
    console.log(post);
});
app.delete("/posts/:id", async (req, res) => {
    const { id } = req.params;
    const post = await prisma.post.delete({
        where: { id: Number(id) },
    });
    console.log(post);
});
app.listen(port, () => {
    console.log(`
🚀 Server ready at: http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map