const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({
    extended: false
}));

router.get('/add-product', (req, res, next) => {
    res.render('add-product');
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body.productName)
    res.redirect("/");
});

module.exports = router;