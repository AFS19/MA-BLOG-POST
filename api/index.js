import express from "express";

import authRouter from "./routes/Auth.js";
import userRouter from "./routes/Users.js";
import postRouter from "./routes/Posts.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.listen(PORT, console.log(`server run on port: ${PORT}`));
