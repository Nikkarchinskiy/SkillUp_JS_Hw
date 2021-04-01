const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];

  let productName = prom("Что вы хотите купить оптом?", "Захват/Дроид/Сканер/Радар");

  const calculateTotalPrice = function(allProdcuts, productName) {
    for (items of allProdcuts) {
      productName === items[1];

    }

    return allPrice;

  };

  console.log (calculateTotalPrice(products));
