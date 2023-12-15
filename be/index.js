const { Customer, OrderBuilder } = require("./entities")


const main = () => {
  const customer1 = new Customer({ name: "ali", isMember: true });// a mamber customer
  const customer2 = new Customer({ name: "Tom", isMember: false });// not a mamber customer

  const shopkeeper1 = new OrderBuilder(customer1);
  const shopkeeper2 = new OrderBuilder(customer2);

  // shopkeeper1.getMenuAsItemsList();
  // shopkeeper2.getMenuAsItemsList();

  shopkeeper1.order('red').order('red')
  shopkeeper1.order('orange')

  shopkeeper2.order('orange')

  shopkeeper1.order('blue').order('green')

  shopkeeper2.order('blue').order('green')

  shopkeeper1.order('xxx')

  shopkeeper1.order('PINK').confirmAndPrintMyOrders().getTotalPrice()

  shopkeeper2.confirmAndPrintMyOrders().getTotalPrice()
}

main();