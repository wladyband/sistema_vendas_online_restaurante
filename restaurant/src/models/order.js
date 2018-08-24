'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemsSchema = new Schema({
    quantity: {
        type: String,
        trim: true
    },
    menuId: {
        type: String,
        trim: true
       
    }
})



const ordersSchema = new Schema({

    id: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
       
    },
    number: {
        type: Number,
        trim: true
    },
    optionalAddress: {
        type: String,
        trim: true
    },
    paymentOption: {
        type: String,
        trim: true
    },
    orderItems: [orderItemsSchema] 
})

module.exports = mongoose.model('Order', ordersSchema);

