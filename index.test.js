import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { suma, resta, multiplicacion, division, modulo } from "./test.js";

describe("esta funcion debe devolverme una suma", () => {
  it("Debe devolver la suma de 2 numeros", () => {
    const result = suma(2, 3);
    assert.strictEqual(result, 5);
  });
  it("si recibe dos string debe devolverme un error", () => {
    const result = suma("a", "b");
    assert.strictEqual(result, "Por favor digite 2 numeros");
  });
  it("si recibe un string debe devolverme un error", () => {
    const result = suma("a", 2);
    assert.strictEqual(result, "Uno de los datos no es un numero");
  });
});

describe("esta funcion debe devolverme una resta", () => {
  it("Debe devolver la resta de 2 numeros", () => {
    const result = resta(3, 2);
    assert.strictEqual(result, 1);
  });
  it("si recibe dos string debe devolverme un error", () => {
    const result = resta("a", "b");
    assert.strictEqual(result, "Por favor digite 2 numeros");
  });
  it("si recibe un string debe devolverme un error", () => {
    const result = resta("a", 2);
    assert.strictEqual(result, "Uno de los datos no es un numero");
  });
});

describe("esta funcion debe devolverme una multiplicacion", () => {
  it("Debe devolver la multiplicacion de 2 numeros", () => {
    const result = multiplicacion(3, -4);
    assert.strictEqual(result, -12);
  });
  it("si recibe dos string debe devolverme un error", () => {
    const result = multiplicacion("a", "b");
    assert.strictEqual(result, "Por favor digite 2 numeros");
  });
  it("si recibe un string debe devolverme un error", () => {
    const result = multiplicacion("a", 2);
    assert.strictEqual(result, "Uno de los datos no es un numero");
  });
});

describe("esta funcion debe devolverme una division", () => {
  it("Debe devolver la division de 2 numeros", () => {
    const result = division(8, -4);
    assert.strictEqual(result, -2);
  });
  it("si recibe dos string debe devolverme un error", () => {
    const result = division("a", "b");
    assert.strictEqual(result, "Por favor digite 2 numeros");
  });
  it("si recibe un string debe devolverme un error", () => {
    const result = division("a", 2);
    assert.strictEqual(result, "Uno de los datos no es un numero");
  });
  it("Debe devolver error cuando el numerador es mayor que cero y el denominador es igual a 0", () => {
    const result = division(8, 0);
    assert.strictEqual(result, "no se puede dividir por 0");
  });
  it("Debe devolver error cuando ambo numero son igual a 0", () => {
    const result = division(0, 0);
    assert.strictEqual(result, "ambos numeros no pueden ser igual a 0");
  });
});

describe("esta funcion debe devolverme el modulo", () => {
  it("Debe devolver el modulo de 2 numeros", () => {
    const result = modulo(25, 5);
    assert.strictEqual(result,0);
  });
  it("si recibe dos string debe devolverme un error", () => {
    const result = modulo("a", "b");
    assert.strictEqual(result, "Por favor digite 2 numeros");
  });
  it("si recibe un string debe devolverme un error", () => {
    const result = modulo("a", 2);
    assert.strictEqual(result, "Uno de los datos no es un numero");
  });
});
