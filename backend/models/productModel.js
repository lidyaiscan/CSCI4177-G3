const mongoose = require("mongoose");

const productSchema = {
    name: String,
    measure: String,
    unit: String,
    price: String,
    rating: String,
    ratingCount: String,
    img: String
}

const Product = mongoose.model("Product", productSchema);

module.exports = Product;