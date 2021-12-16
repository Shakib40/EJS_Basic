const express = require("express");
const Products = require("../models/product.model");
const router = express.Router();

const upload  = require('../middlewares/fileUpload');


router.get('/', async function (req, res) {
    const products = await Products.find().lean().exec();

    return res.render('products/all' , {
        products,
    });
});

router.get('/:id', async function (req, res) {
    const product = await Products.findById(req.params.id).lean().exec();

    return res.render('products/single' , {
        product,
    });
});


module.exports = router;

