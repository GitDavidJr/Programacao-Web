let senhaReal = "";

const inserir = (digito) => {
  senhaReal += digito;

  document.getElementById("senha").value = "*".repeat(senhaReal.length);
};

const numerosPorExtenso = {
  0: "ZERO",
  1: "UM",
  2: "DOIS",
  3: "TRÊS",
  4: "QUATRO",
  5: "CINCO",
  6: "SEIS",
  7: "SETE",
  8: "OITO",
  9: "NOVE",
};

const mostrarSenha = () => {
  if (senhaReal.length === 0) {
    alert("Senha vazia!");
    return;
  }
  const porExtenso = senhaReal
    .split("")
    .map((d) => numerosPorExtenso[d])
    .join(", ");
  alert(porExtenso);
};

const apagarSenha = () => {
    senhaReal = "";
    document.getElementById("senha").value = "";
}