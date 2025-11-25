const {
  sumar,
  restar,
  multiplicar,
  dividir,
  Positivo
} = require("../src/calculadora");

test("sumar dos numeros", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("restar dos numero", () => {
  expect(restar(5, 2)).toBe(3);
});

test("multiplicar dos numeros", () => {
  expect(multiplicar(3, 4)).toBe(12);
});

test("dividir dos numeros", () => {
  expect(dividir(10, 2)).toBe(5);
});

test("lanzar error cuando se intente divir por 0", () => {
  expect(() => dividir(10, 0)).toThrow("No se puede dividir por 0");
});

test("Si es verdadero que retorne true", () => {
  expect(Positivo(5)).toBe(true);
});

test("si es verdad que mande false", () => {
  expect(Positivo(-3)).toBe(false);
});