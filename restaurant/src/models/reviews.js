'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        trim: true
       
    },
    rating: {
        type: Number,
        trim: true
    },
    comments: {
        type: String,
        trim: true
    },
    restaurantId: {
        type: String,
        trim: true
    },

})


module.exports = mongoose.model('Reviews', schema);