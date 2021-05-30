const express = require('express');
const Product = require('../Model/products');


const router = express.Router();

// GET REQUESTS
router.get("/", async (req, res) => {
    try {
        const newProducts = await Product.find({});

        res.send(newProducts);

    } catch (error) {
        console.error(error.message);  
        res.status(400).send(error.message);      
    }
})

router.get("/:id", async (req, res) => {
    try {
        const foundProduct = await Product.find({"_id": req.params.id});

        res.send(foundProduct);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
})


// POST REQUESTS
router.post("/", async (req, res) => {
    try {
        const newProduct = new Product(req.body);

        await newProduct.save();

        res.send(newProduct);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
})



// PUT REQUESTS
router.put("/updateProduct/name/:id", async (req, res) => {
    try {
        const productID = req.params.id;

        const updateProduct = await Product.updateOne({"_id": productID}, {"name": req.body.name});

        res.send(updateProduct);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
})
router.put("/updateProduct/description/:id", async (req, res) => {
    try {
        const productID = req.params.id;

        const updateProduct = await Product.updateOne({"_id": productID}, {"description": req.body.description});

        res.send(updateProduct);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
})
router.put("/updateProduct/price/:id", async (req, res) => {
    try {
        const productID = req.params.id;

        const updateProduct = await Product.updateOne({"_id": productID}, {"price": req.body.price});

        res.send(updateProduct);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
})
router.put("/updateProduct/stock/:id", async (req, res) => {
    try {
        const productID = req.params.id;

        const updateProduct = await Product.updateOne({"_id": productID}, {"stock": req.body.stock});

        res.send(updateProduct);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
})
router.put("/updateProduct/image/:id", async (req, res) => {
    try {
        const productID = req.params.id;

        const updateProduct = await Product.updateOne({"_id": productID}, {"image": req.body.image});

        res.send(updateProduct);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
})

// DELETE REQUESTS
router.delete("/", async (req, res) => {
    try {
        const deleteProducts = await Product.deleteMany();

        res.send(deleteProducts);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const deleteOneProduct = await Product.deleteOne({"_id": req.params.id});

        res.sned(deleteOneProduct);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
})

module.exports = router;