const Product = require('../models/product')

exports.createProduct = (req, res) => {

    const { name, price } = req.body
    const images = req.files.map((file) => file.filename)

    Product.create({name, price, images})
    .then((product) => res.status(201).json({ success:true, product}))
    .catch((err) => res.status(500).json({ success:false, err}))
}

exports.getAllProducts = (req, res) => {
    Product.find()
    .then((products) => res.status(200).json({success:true, products}))
    .catch((err) => res.send(err))
}