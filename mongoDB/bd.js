const mongoose = require('mongoose');
require("dotenv").config();

const URI = process.env.MONGO_URL;

const connectDB = async() =>{
    await mongoose.connect(URI,{ 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });
    console.log('Banco conectado')
};
module.exports = connectDB;