import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ data: "all posts" }]);
});

export default router;
