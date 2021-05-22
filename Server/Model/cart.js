const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        default: null
    }
})

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;