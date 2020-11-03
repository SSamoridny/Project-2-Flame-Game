const express = require('express');
const router = express.Router();
const path = require('path');
const Product = new (require('../models/products.js'))();

router.get('/api/products',async function(req,res){
    const result = await Product.getProducts();
    res.json(result);
});

router.get('/api/products/featured',async function(req,res){
    const result = await Product.getFeaturedProducts();
    res.json(result);
});

router.get('/api/products/:id', async function(req,res){
    const id = req.params.id;
    const result = (await Product.getProduct(id))[0];
    res.json(result);
});

router.put('/api/products/:id/stock/:quantity', async function(req,res){
    const id = req.params.id;
    const quantity = req.params.quantity;
    await Product.productPurchased(id, quantity);
    res.json({ message: 'success'});
});

router.post('/api/products',async function(req,res){
    res.json(result);
});

router.put('/api/products/:id', async function(req,res){
    res.json(result);
});

module.exports = router;

