const form = document.getElementById("formVogais");

const vogais = ["a", "e", "i", "o", "u"];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let count = 0;

  const textSemTratar = document.getElementById("text").value.toLowerCase();

  const text = textSemTratar.normalize('NFD').replace(/[^a-zA-Zs]/g, '');

  if (text.length === 0) {
    alert("Informe um texto!");
    return;
  }

  text.split("").forEach((l) => {
    if (vogais.includes(l)) {
      count++;
    }
  });

  alert(`O texto possui ${count} vogais`);
});
