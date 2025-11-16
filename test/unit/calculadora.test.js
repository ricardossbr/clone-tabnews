const calc = require("../../models/calculadora.ts");

test("somar 2 numeros", () => {
  const result = calc.somar(10, 10);
  expect(result).toBe(20);
});

test("Tenta somar 2 numeros, porem recebe uma string", () => {
  const result = calc.somar("Banana", 10);
  expect(result).toBe("error");
});

test("Tenta somar 2 numeros, porem recebe uma undefined", () => {
  const result = calc.somar(null, 10);
  expect(result).toBe("error");
});
