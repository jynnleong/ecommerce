const express = require('express');
const Cart = require('../Model/cart');

const router = express.Router();

// GET REQUESTS
router.get("/", async (req, res) => {
    try {
        const cartProducts = await Cart.find();

        res.send(cartProducts);
    } catch (error) {
        console.error(error.message);
    }
})

// POST REQUESTS
router.post("/", async (req, res) => {
    try {
        const addProductToCart = new Cart(req.body);

        await addProductToCart.save();

        res.send(addProductToCart);
    } catch (error) {
        console.error(error.message);        
    }
})

// PUT REQUESTS
router.put("/updateCart/:id", async (req, res) => {
    try {
        const updateProductInCart = await Cart.updateOne({"_id": req.params.id}, {"quantity": req.body.quantity});

        res.send(updateProductInCart);
    } catch (error) {
        console.error(error.message);
    }
})

// DELETE REQUESTS
router.delete("/", async (req, res) => {
    try {
        const deleteProductInCart = await Cart.deleteMany();

        res.send(deleteProductInCart);
    } catch (error) {
        console.error(error.message);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const deleteProductInCart = await Cart.deleteOne({"_id": req.params.id});

        res.send(deleteProductInCart);
    } catch (error) {
        console.error(error.message);
    }
})

module.exports = router;