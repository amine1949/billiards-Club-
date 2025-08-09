const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('DB Connected Successfully');
    } catch (err) {
        console.error('MongoDB Connection Error: ' + err.message);
        process.exit(1);
    }
}

//Best Practice
const connectMongoDB = () => {

    mongoose.connect(process.env.MONGODB_URL);

    mongoose.connection.on('connected', () => {
        console.log('MongoDB Connected Successfully');
    })

    mongoose.connection.on('error', (err) => {
        console.error('MongoDB Connection Error: ' + err.message);
        process.exit(1);
    })

    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB Disconnected');
    })
}

module.exports = connectMongoDB;