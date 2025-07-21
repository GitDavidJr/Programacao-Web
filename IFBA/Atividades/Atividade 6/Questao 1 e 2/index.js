import express from "express";

const app = express();

const QNT = 10;
const MIN = 1;
const MAX = 100;

function getNumeroRandomico(min, max) {
  min = Math.ceil(min); // maior inteiro inferior ao mínimo
  max = Math.floor(max); // menor inteiro superior ao máximo
  return Math.floor(Math.random() * (max - min)) + min; // retorno de número pseudoaleatório
}

app.get("/", (req, res) => {
  let sequencia = "";

  for (let i = 0; i < QNT; i++) {
    sequencia += `${getNumeroRandomico(MIN, MAX)}<br>`;
  }

  res.send(sequencia);
});


app.get("/query", (req, res) => {
  
  const qnt = parseInt(req.query.qnt) || QNT;
  const min = parseInt(req.query.min) || MIN;
  const max = parseInt(req.query.max) || MAX;

  let sequencia = "";

  for (let i = 0; i < qnt; i++) {
    sequencia += `${getNumeroRandomico(min, max)}<br>`;
  }

  res.send(sequencia);
});

app.get("/route/:qnt/:min/:max", (req, res) => {
  const qnt = parseInt(req.params.qnt) || QNT;
  const min = parseInt(req.params.min) || MIN;
  const max = parseInt(req.params.max) || MAX;

  let sequencia = "";

  for (let i = 0; i < qnt; i++) {
    sequencia += `${getNumeroRandomico(min, max)}<br>`;
  }

  res.send(sequencia);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
