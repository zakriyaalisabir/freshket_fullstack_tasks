const { } = require("jest")

const { Customer, OrderBuilder } = require("../entities")

const TEST_CASE_1 = "Customers order Red set and Green set; price from calculation is 90";
const TEST_CASE_2 = "Customers can use a 10% discount card as member, then the price should be deducted by discount amount";
const TEST_CASE_3 = "For Orange sets, if customers order more than 2 items per bill. customers will get a 5% discount";

describe("TESTS_SUITE", () => {
  it(TEST_CASE_1, () => {
    const customer1 = new Customer({ name: "ali" });// not a mamber customer

    const shopkeeper1 = new OrderBuilder(customer1);

    const result = shopkeeper1.order("red").order("green").confirmAndPrintMyOrders().getTotalPrice()

    expect(result.total).toEqual(90)
  });

  it(TEST_CASE_2, () => {
    const customer1 = new Customer({ name: "ali", isMember: true });// a mamber customer

    const shopkeeper1 = new OrderBuilder(customer1);
  
    const result = shopkeeper1.order("red").order("green").confirmAndPrintMyOrders().getTotalPrice()

    expect(result.total).toEqual(81)
  });

  it(TEST_CASE_3, () => {
    const customer1 = new Customer({ name: "ali" });// not a mamber customer

    const shopkeeper1 = new OrderBuilder(customer1);
  
    const result = shopkeeper1.order("red").order("orange").order("orange").confirmAndPrintMyOrders().getTotalPrice()
  
    expect(result.total).toEqual(123.5)
  });
})
