// importing modules
const express = require('express')
const mongoose = require('mongoose')
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')
/* Models */
const ProductsModel = mongoose.model('Products')

//get all products
let getAllProducts = (req, res) => {
    ProductsModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Products Controller: getAllProducts', 10)
                let apiResponse = response.generate(true, 'Failed To Find Product Details', 500, null)
                res.send(apiResponse)
            } else if (result == undefined || result == null || result == '') {
                logger.info('No Product Found', 'Products Controller: getAllProducts')
                let apiResponse = response.generate(true, 'No Product Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Products Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end getAllProducts

//view by itemId
let viewByItemId = (req, res) => {

    if (check.isEmpty(req.params.itemId)) {

        console.log('itemId should be passed')
        let apiResponse = response.generate(true, 'itemId is missing', 403, null)
        res.send(apiResponse)
    } else {

        ProductsModel.findOne({ 'itemId': req.params.itemId }, (err, result) => {

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
                logger.info("Product found successfully", "Products Controller:viewByItemId", 5)
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}// end viewByItemId

//view items by brandName
let viewByBrandName = (req, res) => {

    if (check.isEmpty(req.params.brandName)) {

        console.log('brandName should be passed')
        let apiResponse = response.generate(true, 'brandName is missing', 403, null)
        res.send(apiResponse)
    } else {

        ProductsModel.find({ 'brandName': req.params.brandName }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Products Not Found.')
                let apiResponse = response.generate(true, 'Products Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Products Found Successfully')
                let apiResponse = response.generate(false, 'Products Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}// end viewByBrandName


//view items by category
let viewByCategory = (req, res) => {

    if (check.isEmpty(req.params.category)) {

        console.log('category should be passed')
        let apiResponse = response.generate(true, 'Category is missing', 403, null)
        res.send(apiResponse)
    } else {

        ProductsModel.find({ 'category': req.params.category }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Products Not Found.')
                let apiResponse = response.generate(true, 'Products Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Products Found Successfully')
                let apiResponse = response.generate(false, 'Products Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}//end viewByCategory


//view items by sub category
let viewBySubCategory = (req, res) => {

    if (check.isEmpty(req.params.subCategory)) {

        console.log('sub Category should be passed')
        let apiResponse = response.generate(true, 'sub Category is missing', 403, null)
        res.send(apiResponse)
    } else {

        ProductsModel.find({ 'subCategory': req.params.subCategory }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Products Not Found.')
                let apiResponse = response.generate(true, 'Products Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Products Found Successfully')
                let apiResponse = response.generate(false, 'Products Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}//end viewBySubCategory


//view items by average customer rating
let viewByAvgCustomerRating = (req, res) => {

    if (check.isEmpty(req.params.avgCustomerRating)) {

        console.log('avgCustomerRating should be passed')
        let apiResponse = response.generate(true, 'avgCustomerRating is missing', 403, null)
        res.send(apiResponse)
    } else {

        ProductsModel.find({ 'avgCustomerRating': req.params.avgCustomerRating }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Products Not Found.')
                let apiResponse = response.generate(true, 'Products Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Products Found Successfully')
                let apiResponse = response.generate(false, 'Products Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}//end viewByAvgCustomerRating

//view items by availability
let viewByAvailabilityOfItem = (req, res) => {

    if (check.isEmpty(req.params.availabilityOfItem)) {

        console.log('availabilityOfItem should be passed')
        let apiResponse = response.generate(true, 'availabilityOfItem is missing', 403, null)
        res.send(apiResponse)
    } else {

        ProductsModel.find({ 'availabilityOfItem': req.params.availabilityOfItem }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Products Not Found.')
                let apiResponse = response.generate(true, 'Products Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Products Found Successfully')
                let apiResponse = response.generate(false, 'Products Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}//end viewByAvailabilityOfItem


//edit a product
let editProduct = (req, res) => {

    if (check.isEmpty(req.params.itemId)) {

        console.log('itemId should be passed')
        let apiResponse = response.generate(true, 'itemId is missing', 403, null)
        res.send(apiResponse)
    } else {

        let options = req.body;
        console.log(options);
        ProductsModel.update({ 'itemId': req.params.itemId }, options, { multi: true }).exec((err, result) => {

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
                console.log('Product Edited Successfully')
                let apiResponse = response.generate(false, 'Product Edited Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}//end editProduct

//delete a product
let deleteProduct = (req, res) => {

    if (check.isEmpty(req.params.itemId)) {

        console.log('itemId should be passed')
        let apiResponse = response.generate(true, 'itemId is missing', 403, null)
        res.send(apiResponse)
    } else {

        ProductsModel.remove({ 'itemId': req.params.itemId }, (err, result) => {
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
}//deleteProduct

//add product 
let addProduct = (req, res) => {
    let addItemFunction = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.itemName) || check.isEmpty(req.body.price) || check.isEmpty(req.body.brandName) || check.isEmpty(req.body.category)) {

                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)
            } else {

                var today = Date.now()
                let itemId = shortid.generate()

                let newProduct = new ProductsModel({

                    itemId: itemId,
                    itemName: req.body.itemName,
                    brandName: req.body.brandName,
                    price: req.body.price,
                    category: req.body.category,
                    subCategory: req.body.subCategory,
                    avgCustomerRating: req.body.avgCustomerRating,
                    availabilityOfItem: req.body.availabilityOfItem,
                    numberOfitemsInStock: req.body.numberOfitemsInStock,
                    seller: req.body.seller,
                    dateAddedToWebsite: today,

                })



                newProduct.save((err, result) => {
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
    } //end addProduct


    addItemFunction()
        .then((result) => {
            let apiResponse = response.generate(false, 'Product added successfully', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}


//exporting modules
module.exports = {

    getAllProducts: getAllProducts,
    viewByItemId: viewByItemId,
    viewByBrandName: viewByBrandName,
    viewByCategory: viewByCategory,
    viewBySubCategory: viewBySubCategory,
    viewByAvgCustomerRating: viewByAvgCustomerRating,
    viewByAvailabilityOfItem: viewByAvailabilityOfItem,
    addProduct: addProduct,
    editProduct: editProduct,
    deleteProduct: deleteProduct


}// end exports