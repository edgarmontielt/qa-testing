// Mocha: Suite of test -> estructura para armar pruebas
// Chai: Asserts -> condiciones de prueba

const { expect } = require("chai");
const { calculateTax } = require("../func/tax");

describe("Tax function", () => {
  it("should calculate a tax of 5%", () => {
    const income = 5000;
    const tax = calculateTax(income);
    expect(tax).to.be.a("number");
    expect(tax).to.not.be.a("string");
    expect(tax).to.be.equal(income * 0.05);
  });
  it("should calculate a tax of 15%", () => {
    const income = 6000;
    const tax = calculateTax(income);
    expect(tax).to.be.a("number");
    expect(tax).to.be.equal(income * 0.15);
  });
  it("should calculate a tax of 30%", () => {
    const income = 20000;
    const tax = calculateTax(income);
    expect(tax).to.be.a("number");
    expect(tax).to.be.equal(income * 0.3);
  });
  it("should return error", () => {
    let income = -8900;
    let tax = calculateTax(income);
    expect(tax).to.be.a("string");
    income = "";
    tax = calculateTax(income);
    expect(tax).to.be.a("error");
  });
});
