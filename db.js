const mongoose = require('mongoose');
const mongoUrl = 'mongodb://127.0.0.1:27017/hotels';

mongoose.connect(mongoUrl)
  .then(() => console.log('Connected to MongoDB server'))
  .catch(err => console.log('MongoDB connection error', err));

const db = mongoose.connection;

db.on('disconnected', () => {
    console.log('MongoDB Disconnected');
});

// Export the database connection
module.exports = db;