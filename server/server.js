const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/values/all", (req, res) => {
  db.query("SELECT * FROM lists;", (err, rows, fields) => {
    if (err) return res.status(500).send(err);
    res.json(rows);
  });
});

app.post("/api/lists", (req, res) => {
  const { value } = req.body;

  db.query(
    `INSERT INTO lists (value) VALUES(${value})`,
    (err, rows, fields) => {
      if (err) return res.status(500).send(err);
      res.json({ working: true });
    }
  );
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
