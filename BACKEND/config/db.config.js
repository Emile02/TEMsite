const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/tem_db");
        console.log('MongoDB is connected...');
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;