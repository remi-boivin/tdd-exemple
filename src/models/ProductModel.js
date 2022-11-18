const mongoose = require('mongoose')

const schema = mongoose.Schema;


const userSchema = new schema({
            name: String,
            price: Number,
            description: String,
            category: String,
            quantity: Number,
            // reviews: [ReviewSchema],
            rating: Number,
        })

const productModel = mongoose.model('product', userSchema);

module.exports = productModel;
