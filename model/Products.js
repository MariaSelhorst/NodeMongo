const mongoose = require('mongoose');

const Product = mongoose.model('Product', {

    name: String,
    description: String,
    barCode: String,
    price: Number
})

module.exports = Product;