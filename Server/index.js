const express = require('express');
const connectDB = require('./connectDB');
const cors = require('cors');

const productRouter = require('./Routes/Product');
const cartRouter = require('./Routes/Cart');


const app = express();

app.use(express.json());
app.use(cors(
    {origin: process.env.CORS_ORIGIN}
))
connectDB();

app.use("/products", productRouter);
app.use("/cart", cartRouter);

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Connected at port ${port}`);
})