require('dotenv').config({path: "./.env"});
const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Connected to the database");
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = connectDB;