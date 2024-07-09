const mongoose = require('mongoose');

const menueSchema = new mongoose.Schema({
    name: {
        type: String,
        requred: true
    },

    price: {
        type: Number,
        required: true
    },

    taste: {
        type: String,
        enum: ['spicy', 'sour', 'sweet']
    },

    is_drink: {
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

const MenueItem = mongoose.model('MenueItem', menueSchema);
module.exports = MenueItem;



