
// importing modules
const express = require('express')
const mongoose = require('mongoose')
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')

//models
const CartModel = mongoose.model('Cart')
const ProductsModel = mongoose.model('Products')

//view all the items in cart
let viewCart = (req, res) => {
    CartModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'cart Controller: viewCart', 10)
                let apiResponse = response.generate(true, 'Failed To Display Cart', 500, null)
                res.send(apiResponse)
            } else if (result == undefined || result == null || result == '') {
                logger.info('Cart is empty ', 'cart Controller: viewCart')
                let apiResponse = response.generate(true, 'Cart is empty', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Displaying Cart', 200, result)
                res.send(apiResponse)
            }
        })
}// end viewCart

//view items by cartId
let viewByCartId = (req, res) => {

    if (check.isEmpty(req.params.cartId)) {

        console.log('cartId should be passed')
        let apiResponse = response.generate(true, 'cartId is missing', 403, null)
        res.send(apiResponse)
    } else {

        CartModel.findOne({ 'cartId': req.params.cartId }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Product found successfully", "cartController:viewByCartId", 5)//chanf
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}// end viewByCartId

//add items to cart
let addToCart = (req, res) => {
    let addToCartFunction = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.itemId)) {

                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)
            } else {

                var today = Date.now()
                let cartId = shortid.generate()

                let newCart = new CartModel({

                    cartId: cartId,
                    itemId: req.body.itemId,
                    quantityOfItems: req.body.quantityOfItems,
                    itemsAddedOn: today,
                    lastModifiedOn: today


                })



                newCart.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Success in product creation')
                        resolve(result)
                    }
                })
            }
        })
    }


    addToCartFunction()
        .then((result) => {
            let apiResponse = response.generate(false, 'Product added successfully', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}// end addToCart




//remove items from cart
let removeItemFromCart = (req, res) => {



    if (check.isEmpty(req.params.cartId)) {

        console.log('cartId should be passed')
        let apiResponse = response.generate(true, 'cartId is missing', 403, null)
        res.send(apiResponse)
    } else {

        CartModel.remove({ 'cartId': req.params.cartId }, (err, result) => {
            if (err) {
                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found.', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Product Deletion Success')
                let apiResponse = response.generate(false, 'Product Deleted Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}//end removeItemFromCart


module.exports = {

    viewCart: viewCart,
    addToCart: addToCart,
    removeItemFromCart: removeItemFromCart,//add remobe by cartid
    viewByCartId: viewByCartId


}// end exports
