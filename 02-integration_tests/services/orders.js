const order = {
  id: "abc123",
  data: {
    products: [
      {
        name: "TV",
        price: 34.8,
      },
      {
        name: "PC",
        price: 56.34,
      },
    ],
  },
};

class Orders {
  static getTotal(items) {
    let total = 0;
    for (const item of items) {
      total += item.price;
    }
    return total;
  }

  static getById(id) {
    return order;
  }
}

module.exports = Orders;
