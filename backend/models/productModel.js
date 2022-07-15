const mongoose = require("mongoose");

const productSchema = {
    pId: String,
    name: String,
    description: String,
    measure: String,
    unit: String,
    price: String,
    stock: String,
    rating: String,
    ratingCount: String,
    image: String
}

const Product = mongoose.model("Product", productSchema);

module.exports = Product;