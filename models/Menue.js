const mongoose = require('mongoose');

const menueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true
    },

    taste: {
        type: String,
        required: true,
        enum: ['sweet', 'spicy', 'sour']
    },

    is_Drink: {
        type: Boolean,
        default: false
    },

    ingredients: {
        type: [String],
        default: []
    },

    num_Sales: {
        type: Number,
        default: 0
    }
});

const menueItem = mongoose.model('menueItem', menueSchema);

module.exports = menueItem;