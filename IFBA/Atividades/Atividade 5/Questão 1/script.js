const form = document.getElementById("formPalindromo");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = document.getElementById("text").value;

  const len = text.length;
  for (let i = 0; i < len / 2; i++) {
    if (text[i] !== text[len - 1 - i]) {
      alert("Não é um palíndromo");
      return;
    }
  }

  alert("É um palíndromo!");
});