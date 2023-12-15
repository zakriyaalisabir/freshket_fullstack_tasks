class Customer {
  name = "xxx"
  isMember = false
  id = `${Date.now()}`

  constructor({ name = "", id = "", isMember = false }) {
    // console.log({ id, name, isMember })

    if (name !== "") {
      this.name = name
    }

    if (id !== "") {
      this.id = id
    }

    if (isMember === true) {
      this.isMember = isMember
    }

    // console.log({ id: this.id, name: this.name, isMember: this.isMember })
  }

  getCustomerInfo = () => {
    return {
      id: this.id,
      name: this.name,
      isMember: this.isMember
    }
  }

  isAMember = () => {
    return this.isMember
  }
}

module.exports = { Customer }