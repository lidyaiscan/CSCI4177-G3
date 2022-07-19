/* Written by Song Pho */
const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.route("/products").get(async (req, res) => {
    Product.find().then(foundProducts => res.json(foundProducts));
})
router.get("/search/:key", async (req, res) => {
    let data = await Product.find(
        {
            "$or": [
                { name: { $regex: req.params.key } }
            ]
        }
    ).then(foundProducts => res.json(foundProducts));
})
router.get("/product/:id", async (req, res) => {
    Product.findOne({ 'pId': req.params.id }).then(foundProducts => res.json(foundProducts));
})

router.route("/adminProducts").get(async (req, res) => {
    Product.find().then(foundProducts => res.json(foundProducts));
})
module.exports = router;