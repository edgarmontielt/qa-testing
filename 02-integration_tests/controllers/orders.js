const Orders = require("../services/orders");
const { calculateTax } = require("../func/tax");

const calculateTotal = (id) => {
  const order = Orders.getById(id);
  const products = order.data.products;
  const total = Orders.getTotal(products);
  const totalWithTax = total + calculateTax(total);

  return {
    total,
    totalWithTax,
  };
};

module.exports = {
  calculateTotal,
};
