const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Erreur serveur" });
};

export default errorHandler;
