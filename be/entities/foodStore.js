const {
  FOOD_STORE_ITEMS_PRICES_PER_SET,
  FOOD_STORE_ITEMS_DISCOUNTS_ON_DOUBLES_OF_SAME_SET: {
    items: PAIR_ITEMS_LIST,
    discount: PAIR_ITEMS_DISCOUNT
  }
} = require("../constants")

class FoodStore {
  customer = null
  flatDiscountMultiplier = 0; // 0 = no discount, means same price

  constructor(customer) {
    this.customer = customer
  }

  getMenuAsItemsList = () => {
    console.log({ customer: this.customer.getCustomerInfo().name, menuItems: Object.keys(FOOD_STORE_ITEMS_PRICES_PER_SET) })

    return this;
  }

  getDiscountForSamePairItemsSets = (orderQueue = []) => {
    const itemsCount = {}
    let shouldUsePairDiscount = false
    let discountForSamePair = PAIR_ITEMS_DISCOUNT

    for (let order of orderQueue) {
      const itemName = Object.keys(order)[0]
      if (itemsCount[itemName]) {
        itemsCount[itemName] += 1
      } else {
        itemsCount[itemName] = 1
      }

      // console.log({ PAIR_ITEMS_LIST, itemName, itemsCount })

      if (PAIR_ITEMS_LIST.includes(itemName.toLowerCase()) && itemsCount[itemName] === 2) {
        shouldUsePairDiscount = true
        break
      }
    }

    // console.log({ shouldUsePairDiscount, discountForSamePair })

    return shouldUsePairDiscount ? discountForSamePair : 0
  }

  getItemPrice = (item = "") => {
    // if a customer is a mamber then discount = 10% else full price
    const discount = this.customer.isAMember() ? 0.1 : this.flatDiscountMultiplier

    if (item in FOOD_STORE_ITEMS_PRICES_PER_SET) {
      return FOOD_STORE_ITEMS_PRICES_PER_SET[item] - (FOOD_STORE_ITEMS_PRICES_PER_SET[item] * discount)
    } else {
      console.log(`Item = '${item}' not available`)
      return 0;
    }
  }

}

module.exports = { FoodStore }