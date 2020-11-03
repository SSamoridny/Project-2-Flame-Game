const ORM = require('../config/orm.js');
const OrderItem = new (require('./orderItems.js'));

const orm = new ORM();

class Order {

    constructor() {

    }

    async getOrder(id) {
        let results = await orm.getOrder(id);
        return results;
    }

    async getOrders() {
        let results = await orm.getOrders();
        return results;
    }

    async updateOrder(order) {
        let results = await orm.updateOrder(order);
        return results;
    }

    async insertOrder(order) {
        let results = await orm.insertOrder(order);
        return results;
    }

    async getLastOrder() {
        let results = await orm.getLastOrder();
        return results;
    }

}

module.exports = Order;
