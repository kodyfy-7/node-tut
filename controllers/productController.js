const Sequelize = require("sequelize")
const Product = require("../models").Product 
require("dotenv").config();

const index = async (req, res) => {
    const products = await Product.findAll({
        // attributes:{
        //     productName,
        //     productPrice
        // }
    })
    return res.status(200).json(products)

};

const store = async (req, res) => {
    const { productName, productModel, productSize, productPrice } = req.body

    const product = await Product.create({
        productName,
        productModel,
        productPrice,
        productSize
    })

    return res.status(200).json(product)

};

const show = async (req, res) => {
    const { id } = req.params

    const product = await Product.findOne({
        where: {
            id
          }
    })
    return res.status(200).json(product)

};

const update = async (req, res) => {
    const { id } = req.params
    const { productName, productModel, productSize, productPrice } = req.body

    const product = await Product.update({
        productName,
        productModel,
        productPrice,
        productSize
    }, {where:{id}})

    return res.status(200).json(product)

};

const destroy = async (req, res) => {
    const { id } = req.params

    await Product.destroy({where:{id}})

    return res.status(200).json(`product deleted`)

};

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}