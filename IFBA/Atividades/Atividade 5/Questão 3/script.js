const form = document.getElementById("formComprimento");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;

  if(name.split(" ").length > 1) {
    alert("Informe apenas o primeiro nome")
    return
  }

  const classification = name.length % 2 === 0 ? "Par" : "Ímpar";

  alert(`Nome: ${name} \nClassificação: ${classification}`);
});
