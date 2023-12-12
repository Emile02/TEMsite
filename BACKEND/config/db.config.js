const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://emile_cvn:" + process.env.MONGO_DB_SECRET + "@tem.ib913pf.mongodb.net/");
        console.log('MongoDB is connected...');
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;