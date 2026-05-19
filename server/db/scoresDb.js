let scores = [];

export function getAllScores() {
  return scores.sort((a, b) => b.score - a.score).slice(0, 10);
}

export function addScore(playerName, score, level = 1) {
  const newScore = {
    id: Date.now(),
    playerName,
    score,
    level,
    date: new Date(),
  };

  scores.push(newScore);
  return newScore;
}

export function deleteScore(id) {
  const index = scores.findIndex((s) => s.id == id);

  if (index === -1) {
    return null;
  }

  const deleted = scores.splice(index, 1);
  return deleted[0];
}
