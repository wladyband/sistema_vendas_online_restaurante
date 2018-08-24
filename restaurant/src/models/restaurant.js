'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        trim: true
    },
    id: {
        type: String,
        trim: true       
    },
    category: {
        type: String,
        trim: true
    },
    deliveryEstimate: {
        type: String,
        trim: true
    },
    rating: {
        type: Number,
        trim: true
    },
    about: {
        type: String,
        trim: true
    },
    hours: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    }

})


module.exports = mongoose.model('Restaurant', schema);