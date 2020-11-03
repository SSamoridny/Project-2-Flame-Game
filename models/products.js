const ORM = require('../config/orm.js');
const orm = new ORM();

class Product {
    constructor() {}
    getProduct(id) {
        return orm.getProduct(id);
    }
    getProducts() {
        return orm.getProducts();
    }
    getFeaturedProducts() {
        return orm.getFeaturedProducts();
    }
    productPurchased(id, amount) {
        return orm.productPurchased(id, amount);
    }

}

module.exports = Product;
