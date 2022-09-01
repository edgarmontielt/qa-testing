const { expect } = require("chai");
const OrdersService = require("../services/orders");
const OrdersController = require("../controllers/orders");

describe("Orders", () => {
  it("should calculate the total", () => {
    // Integration:
    const total = OrdersController.calculateTotal("abc123");

    const expectedTotal = 34.8 + 56.34;

    expect(total).to.be.a("object");
    expect(total.total).to.be.a("number");
    expect(total.total).to.be.equals(expectedTotal);
    expect(total.totalWithTax).to.be.a("number");
    expect(total.totalWithTax).to.be.equals(expectedTotal + expectedTotal * 0.05);
  });

  it("should calculate the products sum", () => {
    let total = OrdersService.getTotal([
      {
        name: "TV",
        price: 34.8,
      },
      {
        name: "PC",
        price: 56.34,
      },
    ]);

    expect(total).to.be.a("number");
    expect(total).to.be.equals(34.8 + 56.34);
  });
});
