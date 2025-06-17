const botao = document.getElementById("mostrarHorario");
const horarioDiv = document.getElementById("horario");

function atualizarHorario() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, "0");
  const minutos = agora.getMinutes().toString().padStart(2, "0");
  const segundos = agora.getSeconds().toString().padStart(2, "0");

  horarioDiv.textContent = `${horas}:${minutos}:${segundos}`;
}

botao.addEventListener("click", () => {
  horarioDiv.classList.remove("hidden");
  atualizarHorario();

  // Atualiza o horário a cada segundo
  setInterval(atualizarHorario, 1000);
});
