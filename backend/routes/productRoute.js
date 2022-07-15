const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.route("/products").get(async (req, res) => {
    Product.find().then(foundProducts => res.json(foundProducts));
})
module.exports = router;