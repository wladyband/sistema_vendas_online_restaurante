'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    id: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    restaurantId: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },

})

module.exports = mongoose.model('Menu', schema);