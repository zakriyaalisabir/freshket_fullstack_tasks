const { FoodStore } = require("./foodStore")

// this is actually our Calculator class
class OrderBuilder extends FoodStore {
  total = 0
  orderQueue = []

  constructor(customer) {
    super(customer)
  }

  processOrdersPrices = () => {
    const pairDiscount = this.getDiscountForSamePairItemsSets(this.orderQueue)

    // console.log({ pairDiscount })

    for (let order of this.orderQueue) {
      const itemName = Object.keys(order)[0]

      // console.log({ itemName, price: order[itemName] })

      this.total += order[itemName]
    }

    // console.log({ T: this.total })

    this.total = this.total - (this.total * pairDiscount)

    // console.log({ total: this.total })

    return { customer: this.customer.getCustomerInfo().name, total: this.total }
  }

  confirmAndPrintMyOrders = () => {
    console.log({ customer: this.customer.getCustomerInfo().name, orderQueue: this.orderQueue })

    return this;
  }

  order = (item = "") => {
    const upperCaseItemName = item.toUpperCase()
    const price = this.getItemPrice(upperCaseItemName)

    // console.log({ cId: this.customer.getCustomerInfo()?.name, upperCaseItemName, price })

    if (price !== 0) {
      this.orderQueue.push({ [upperCaseItemName]: price });
    }

    return this;
  }

  getTotalPrice = () => {
    return this.processOrdersPrices();
  }

}

module.exports = { OrderBuilder }