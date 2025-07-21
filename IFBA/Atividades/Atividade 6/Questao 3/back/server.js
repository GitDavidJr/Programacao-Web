const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Servir arquivos estáticos do front-end
app.use(express.static(path.join(__dirname, "../front")));

// Rota principal para tempo restante
app.get("/tempo-restante", (req, res) => {
  const formato = req.query.formato;
  const agora = new Date();
  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  // Segundos restantes até o fim do dia
  const segundosRestantes =
    24 * 60 * 60 - horas * 60 * 60 - minutos * 60 - segundos;

  if (formato === "segundos") {
    res.send(`Tempo Restante: ${segundosRestantes} segundo(s)`);
  } else {
    // Horas, minutos e segundos restantes
    const h = Math.floor(segundosRestantes / 3600);
    const m = Math.floor((segundosRestantes % 3600) / 60);
    const s = segundosRestantes % 60;
    res.send(`Tempo Restante: ${h}h ${m}min ${s}seg`);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
