const botao = document.getElementById("botao");

const obterTempoRestante = async () => {
  const formato = document.querySelector('input[name="formato"]:checked').value;
  const resposta = await fetch(`/tempo-restante?formato=${formato}`);
  const texto = await resposta.text();
  document.getElementById("resultado").innerText = texto;
};
