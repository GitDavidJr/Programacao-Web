const form = document.getElementById("formPesoIdeal");
const btnLimpar = document.getElementById("limparHistorico");
const historico = document.getElementById("historico");

btnLimpar.addEventListener("click", () => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  historico.classList.add("hidden");
  btnLimpar.classList.add("hidden");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const altura = parseFloat(document.getElementById("altura").value);
  const sexo = document.getElementById("sexo").value;

  if (!altura || altura <= 0) {
    alert("Por favor, insira uma altura válida!");
    return;
  }

  const isMen = sexo === "masculino";
  const pesoIdeal = isMen ? 72.7 * altura - 58 : 62.1 * altura - 44.7;

  // Mostrar a tabela e o botão de limpar
  historico.classList.remove("hidden");
  btnLimpar.classList.remove("hidden");

  // Criar uma nova linha
  const tbody = document.querySelector("tbody");
  const newRow = document.createElement("tr");

  // Criar as células
  const sexoCell = document.createElement("td");
  sexoCell.textContent = sexo.charAt(0).toUpperCase() + sexo.slice(1);

  const alturaCell = document.createElement("td");
  alturaCell.textContent = altura.toFixed(2);

  const pesoCell = document.createElement("td");
  pesoCell.textContent = pesoIdeal.toFixed(1);

  // Adicionar as células à linha
  newRow.appendChild(sexoCell);
  newRow.appendChild(alturaCell);
  newRow.appendChild(pesoCell);

  // Adicionar a linha à tabela
  tbody.appendChild(newRow);

  // Limpar o input de altura
  document.getElementById("altura").value = "";
});
