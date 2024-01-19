const ex = require("express");
const pr = require("./products");
const gm = require("./games");
const cors = require("cors");

const app = ex();
const p = pr.products;
const g = gm.games;

app.use(ex.json());
app.use(cors());

app.get("/api/product", (req, res) => {
  res.send(p);
});

app.get("/api/games", (req, res) => {
  res.send(g);
});

app.get("/api/product/:id", (req, res) => {
  let products = false;
  for (let i = 0; i < p.length; i++) {
    if (p[i].id == Number(req.params.id)) {
      products = p[i];
      break;
    }
  }
});

app.get("/api/games/:id", (req, res) => {
  let games = false;
  for (let i = 0; i < g.length; i++) {
    if (g[i].id == Number(req.params.id)) {
      games = g[i];
      break;
    }
  }
});

app.listen(3002);
