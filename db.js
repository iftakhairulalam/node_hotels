const mongoose = require('mongoose');
const mongoUrl = 'mongodb://127.0.0.1:27017/hotels';
//const mongoUrl = 'mongodb+srv://helloworld:qwerty12345@cluster0.wh64o06.mongodb.net/'



mongoose.connect(mongoUrl)
  .then(() => console.log('Connected to MongoDB server'))
  .catch(err => console.log('MongoDB connection error', err));

const db = mongoose.connection;

db.on('disconnected', () => {
    console.log('MongoDB Disconnected');
});

// Export the database connection
module.exports = db;