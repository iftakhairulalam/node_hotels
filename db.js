const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongodb is connected');
});

db.on('error', (err) => {
    console.error('Mongodb connection error:', err);
});

db.on('disconnected', () => {
    console.log('Mongodb is disconnected');
});

module.exports = db;

