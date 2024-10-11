const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;

  const imc = (peso / (altura * altura)).toFixed(2);
  console.log(nome);
  console.log(imc);
});
