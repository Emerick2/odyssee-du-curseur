import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../scenes/menu.html"));
});

router.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

export default router;
