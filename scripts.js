const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;

  const imc = (peso / (altura * altura)).toFixed(2);
  const value = document.getElementById("value");
  document.getElementById("result").classList.remove("hidden");
  let description = "";
  if (imc < 18.5) {
    description = `Cuidado, ${nome} você está abaixo do peso!`;
  } else if (imc >= 18.5 && imc < 24.9) {
    description = `Parabéns, ${nome} você está com peso normal!`;
  } else if (imc >= 25 && imc < 29.9) {
    description = `Atenção, ${nome} você está com sobrepeso!`;
  } else if (imc >= 30 && imc < 34.9) {
    description = `Cuidado, ${nome} você está com obesidade grau I!`;
  } else if (imc >= 35 && imc < 39.9) {
    description = `Cuidado, ${nome} você está com obesidade grau II (severa)!`;
  } else {
    description = `Alerta máximo,${nome} você está com obesidade grau III (mórbida)!`;
  }

  value.textContent = imc;
  document.getElementById("description").textContent = description;
});
