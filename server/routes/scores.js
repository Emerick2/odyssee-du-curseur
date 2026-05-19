import express from "express";
import { addScore, deleteScore, getAllScores } from "../db/scoresDb.js";

const router = express.Router();

router.get("/", (req, res) => {
  const scores = getAllScores();
  res.json(scores);
});

router.post("/", (req, res) => {
  const { playerName, score, level } = req.body;

  if (!playerName || score === undefined) {
    return res.status(400).json({ error: "playerName et score requis" });
  }

  const newScore = addScore(playerName, score, level);
  res.status(201).json(newScore);
});

router.delete("/:id", (req, res) => {
  const deleted = deleteScore(req.params.id);

  if (!deleted) {
    return res.status(404).json({ error: "Score non trouvé" });
  }

  res.json(deleted);
});

export default router;
