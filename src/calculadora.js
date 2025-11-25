function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por 0");
  }
  return a / b;
}

function Positivo(number) {
  return number > 0;
}

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir,
  Positivo
};
