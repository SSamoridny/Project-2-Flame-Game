const ORM = require('../config/orm.js');
const orm = new ORM();

class OrderItem {
    constructor() {

    }

    async getOrderItem(id) {
        let results = await orm.getOrderItem(id);
        return results;
    }

    async getOrderItemsByOrderId(id) {
        let results = await orm.getOrderItemsByOrderId(id);
        return results;
    }

    async getOrderItems() {
        let results = await orm.getOrderItems();
        return results;
    }

    async insertOrderItem(orderItem) {
        let results = await orm.insertOrderItem(orderItem);
        return results;
    }

    async updateOrderItem(orderItem) {
        let results = await orm.updateOrderItem(orderItem);
        return results;
    }
}

module.exports = OrderItem;
