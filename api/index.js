import express from "express";
import postRouter from "./routes/Posts.js";
const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api/posts", postRouter);

app.listen(PORT, console.log(`server run on port: ${PORT}`));
