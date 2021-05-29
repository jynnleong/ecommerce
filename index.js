require('dotenv').config({path: "./.env"});

const express = require('express');
const connectDB = require('./connectDB');
const cors = require('cors');
const path = require('path');

const productRouter = require('./Routes/Product');
const cartRouter = require('./Routes/Cart');


const app = express();

app.use(express.json());
// app.use(cors(
//     {origin: process.env.CORS_ORIGIN}
// ))



connectDB();

app.use("/products", productRouter);
app.use("/cart", cartRouter);

const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "client", "build")));
    
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}



app.listen(port, () => {
    console.log(`Connected at port ${port}`);
})