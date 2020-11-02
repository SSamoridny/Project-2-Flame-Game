const db = require('./connection.js');

class ORM {
    constructor() {

    }
    getProduct(id) {
        return db.query("SELECT * FROM products WHERE id = ?", [id])
    }
    getProducts() {
        return db.query("SELECT * FROM products")
    }
    getFeaturedProducts() {
        return db.query("SELECT * FROM products WHERE featured = true")
    }

    getOrder(id) {
        return db.query("SELECT * FROM orders WHERE id = ?", [id])
    }

    getOrders() {
        return db.query("SELECT * FROM orders")
    }

    getOrderItem(id) {
        return db.query("SELECT * FROM order_items WHERE id = ?", [id])
    }

    getOrderItems() {
        return db.query("SELECT * FROM order_items")
    }

    getOrderItemsByOrderId(id) {
        return db.query("SELECT * FROM order_items WHERE orderid = ?", [id])
    }

    updateOrder() {
        return db.query(`UPDATE orders SET (
            \`subtotal\`=?, 
            \`taxes\`=?, 
            \`total\`=?, 
            \`contact_email\`=?, 
            \`delivery_method\`=?, 
            \`shipping_firstname\`=?, 
            \`shipping_lastname\`=?, 
            \`shipping_address\`=?, 
            \`shipping_apartment\`=?, 
            \`shipping_city\`=?, 
            \`shipping_province\`=?,
            \`shipping_postal\`=?,
            \`billing_credit\`=?,
            \`billing_expiry\`=?,
            \`billing_security\`=?
        WHERE id=?`, [
            order.subtotal, 
            order.taxes, 
            order.total, 
            order.contactEmail, 
            order.deliveryMethod, 
            order.shippingFirstname, 
            order.shippingLastname, 
            order.shippingAddress, 
            order.shippingApartment, 
            order.shippingCity, 
            order.shippingProvince,
            order.shippingPostal,
            order.billingCredit,
            order.billingExpiry,
            order.billingSecurity,
            order.id
        ]);
    }
    
    insertOrder(order) {
        return db.query(`INSERT orders (
            \`subtotal\`, 
            \`taxes\`, 
            \`total\`, 
            \`contact_email\`, 
            \`delivery_method\`, 
            \`shipping_firstname\`, 
            \`shipping_lastname\`, 
            \`shipping_address\`, 
            \`shipping_apartment\`, 
            \`shipping_city\`, 
            \`shipping_province\`,
            \`shipping_postal\`,
            \`billing_credit\`,
            \`billing_expiry\`,
            \`billing_security\`
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
            order.subtotal, 
            order.taxes, 
            order.total, 
            order.contactEmail, 
            order.deliveryMethod, 
            order.shippingFirstname, 
            order.shippingLastname, 
            order.shippingAddress, 
            order.shippingApartment, 
            order.shippingCity, 
            order.shippingProvince,
            order.shippingPostal,
            order.billingCredit,
            order.billingExpiry,
            order.billingSecurity
        ]);
    }

    updateOrderItem(orderItem) {
        return db.query(`UPDATE order_items SET (
            \`orderid\`=?, 
            \`productid\`=?, 
            \`quantity\`=?, 
            \`price\`=?
        WHERE id=?`, [
            orderItem.orderId, 
            orderItem.productId, 
            orderItem.quantity, 
            orderItem.price,
            orderItem.id
        ]);
    }
    
    insertOrderItem(orderItem) {
        return db.query(`INSERT order_items (
            \`orderid\`, 
            \`productid\`, 
            \`quantity\`, 
            \`price\`
        ) VALUES (?, ?, ?, ?)`, [
            orderItem.orderId, 
            orderItem.productId, 
            orderItem.quantity, 
            orderItem.price
        ]);
    }

    productPurchased(id, amount) {
        return db.query(`UPDATE products SET 
            stock=stock-?
        WHERE id=?`, [
            parseInt(amount), 
            id
        ]);
    }

    updateProduct(id, name, description, price, image, features) {

    }
    
    insertProduct(name, description, price, image, features) {
        
    }
}

module.exports = ORM;