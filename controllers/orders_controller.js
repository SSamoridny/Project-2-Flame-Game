const express = require('express');
const router = express.Router();
const path = require('path');
const Order = new (require('../models/orders.js'))();
const OrderItem = new (require('../models/orderItems.js'))();


// Get all orders
router.get('/api/orders',async function(req,res){
    const result = await Order.getOrders();
    res.json(result);
});

router.get('/api/orders/last', async function(req,res){
    const id = req.params.id;
    const result = (await Order.getLastOrder())[0];
    res.json(result);
});

// Get Order by ID
router.get('/api/orders/:id', async function(req,res){
    const id = req.params.id;
    const result = (await Order.getOrder(id))[0];
    res.json(result);
});

// Get Order Items by Order ID
router.get('/api/orders/:orderid/items',async function(req,res){
    const orderid = req.params.orderid;
    const result = await OrderItem.getOrderItemsByOrderId(orderid);
    res.json(result);
});

// Get Individual Order in Item
router.get('/api/orders/:orderid/items/:id', async function(req,res){
    const id = req.params.id;
    const result = (await OrderItem.getOrderItem(id))[0];
    res.json(result);
});

router.post('/api/orders',async function(req,res){
    const order = req.body;
    const result = await Order.insertOrder(order);
    order.id = result.insertId;
    res.json(order);
});

router.put('/api/orders/:id', async function(req,res){
    const order = req.body;
    const result = await Order.updateOrder(order);
    res.json(order);
});

router.post('/api/orders/:orderid/items',async function(req,res){
    const orderid = req.params.orderid;
    const orderItem = req.body;
    const result = await OrderItem.insertOrderItem(orderItem);
    orderItem.id = result.insertId;
    res.json(orderItem);
});

router.put('/api/orders/:orderid/items/:id', async function(req,res){
    const orderid = req.params.orderid;
    const orderItem = req.body;
    const result = await OrderItem.updateOrderItem(orderItem);
    res.json(orderItem);
});



module.exports = router;

