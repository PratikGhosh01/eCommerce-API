// importing modules
const express = require('express')
const router = express.Router();
const appController = require('./../controllers/productsController')
const auth = require('./../middlewares/auth')

const appConfig = require('./../config/appConfig')

let setRouter = (app) => {

	let baseUrl = appConfig.apiVersion + '/ecommercePlatform/products';

	app.get(baseUrl + "/all", auth.isAuthenticated, appController.getAllProducts)


    /**
	 * @api {get} /api/v1/ecommercePlatform/products/all  View all products in database
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "All Products Found",
            "status": 200,
            "data": [
                {
                    "itemId": "String",
                    "dateAddedToWebsite": "Number",
                    "sellers": "String",
                    "numberOfitemsInStock": Number,
                    "availabilityOfItem": Boolean,
                    "avgCustomerRating": Number,
                    "subCategory": "String",
                    "category": "String",
                    "price": Number,
                    "brandName": "String",
                    "itemName": "String"
                    
                }
            ]
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       
	 */

	app.get(baseUrl + "/viewBy/category/:category", auth.isAuthenticated, appController.viewByCategory)


    /**
	 * @api {get} /api/v1/ecommercePlatform/products/viewBy/category/:category Get products by category
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} category category of the item passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Found Successfully.",
	    "status": 200,
	    "data": [
					{
                    "_id": "String",
                    "itemId": "String",
                    "sellers": "",
                    "__v": 0,
                    "dateAddedToWebsite": "date",
                    "seller": "String",
                    "numberOfitemsInStock": Number,
                    "availabilityOfItem": Boolean,
                    "avgCustomerRating": Number,
                    "subCategory": "String",
                    "category": "String",
                    "price": Number,
                    "brandName": "String",
                    "itemName": "String"
        }
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */


	app.get(baseUrl + "/viewBy/subCategory/:subCategory", auth.isAuthenticated, appController.viewBySubCategory)


    /**
	 * @api {get} /api/v1/ecommercePlatform/products/viewBy/subCategory/:subCategory Get products by subCategory
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} subCategory sub category of the item passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Found Successfully.",
	    "status": 200,
	    "data": [
					{
                    "_id": "String",
                    "itemId": "String",
                    "sellers": "",
                    "__v": 0,
                    "dateAddedToWebsite": "date",
                    "seller": "String",
                    "numberOfitemsInStock": Number,
                    "availabilityOfItem": Boolean,
                    "avgCustomerRating": Number,
                    "subCategory": "String",
                    "category": "String",
                    "price": Number,
                    "brandName": "String",
                    "itemName": "String"
        }
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

	app.get(baseUrl + "/viewBy/itemId/:itemId", auth.isAuthenticated, appController.viewByItemId)


    /**
	 * @api {get} /api/v1/ecommercePlatform/products/viewBy/itemId/:itemId Get products by itemId
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} itemId item Id of the item passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Found Successfully.",
	    "status": 200,
	    "data": [
					{
                    "_id": "String",
                    "itemId": "String",
                    "sellers": "",
                    "__v": 0,
                    "dateAddedToWebsite": "date",
                    "seller": "String",
                    "numberOfitemsInStock": Number,
                    "availabilityOfItem": Boolean,
                    "avgCustomerRating": Number,
                    "subCategory": "String",
                    "category": "String",
                    "price": Number,
                    "brandName": "String",
                    "itemName": "String"
        }
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

	app.get(baseUrl + "/viewBy/avgCustomerRating/:avgCustomerRating", auth.isAuthenticated, appController.viewByAvgCustomerRating)


    /**
	 * @api {get} /api/v1/ecommercePlatform/products/viewBy/avgCustomerRating/:avgCustomerRating Get products by avgCustomerRating
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {Number} avgCustomerRating avgCustomerRating of the item passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Found Successfully.",
	    "status": 200,
	    "data": [
					{
                    "_id": "String",
                    "itemId": "String",
                    "sellers": "",
                    "__v": 0,
                    "dateAddedToWebsite": "date",
                    "seller": "String",
                    "numberOfitemsInStock": Number,
                    "availabilityOfItem": Boolean,
                    "avgCustomerRating": Number,
                    "subCategory": "String",
                    "category": "String",
                    "price": Number,
                    "brandName": "String",
                    "itemName": "String"
        }
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

	app.get(baseUrl + "/viewBy/availabilityOfItem/:availabilityOfItem", auth.isAuthenticated, appController.viewByAvailabilityOfItem)


    /**
	 * @api {get} /api/v1/ecommercePlatform/products/viewBy/availabilityOfItem/:availabilityOfItem Get products by availabilityOfItem
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {Boolean} availabilityOfItem availabilityOfItem of the item passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Found Successfully.",
	    "status": 200,
	    "data": [
					{
                    "_id": "String",
                    "itemId": "String",
                    "sellers": "",
                    "__v": 0,
                    "dateAddedToWebsite": "date",
                    "seller": "String",
                    "numberOfitemsInStock": Number,
                    "availabilityOfItem": Boolean,
                    "avgCustomerRating": Number,
                    "subCategory": "String",
                    "category": "String",
                    "price": Number,
                    "brandName": "String",
                    "itemName": "String"
        }
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

	app.get(baseUrl + "/viewBy/brandName/:brandName", auth.isAuthenticated, appController.viewByBrandName)


    /**
	 * @api {get} /api/v1/ecommercePlatform/products/viewBy/brandName/:brandName Get products by brandName
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} brandName brandName of the item passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Found Successfully.",
	    "status": 200,
	    "data": [
					{
                    "_id": "String",
                    "itemId": "String",
                    "sellers": "",
                    "__v": 0,
                    "dateAddedToWebsite": "date",
                    "seller": "String",
                    "numberOfitemsInStock": Number,
                    "availabilityOfItem": Boolean,
                    "avgCustomerRating": Number,
                    "subCategory": "String",
                    "category": "String",
                    "price": Number,
                    "brandName": "String",
                    "itemName": "String"
        }
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

	app.post(baseUrl + "/add", auth.isAuthenticated, appController.addProduct)


    /**
	 * @api {post} /api/v1/ecommercePlatform/products/add Add items to product database
	 * @apiVersion 0.0.1
	 * @apiGroup add
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header
	 * @apiParam {String} itemName item name of the product passed as a body parameter(Required)
     * @apiParam {String} brandName The brandName of the product passed as a body parameter(Required)
	 * @apiParam {String} price price of the product passed as a body parameter(Required)
	 * @apiParam {String} category category of the product passed as a body parameter(Required)
	 * @apiParam {String} subCategory subCategory of the product passed as a body parameter
	 * @apiParam {Number} avgCustomerRating avgCustomerRating of the product passed as a body parameter
	 * @apiParam {Boolean} availabilityOfItem availability Of Item of the product passed as a body parameter	
	 * @apiParam {Number} numberOfitemsInStock number Of items In Stock of the product passed as a body parameter
     * @apiParam {String} seller seller of the product passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product added successfully",
            "status": 200,
            "data": {
                        "__v": 0,
                        "itemId": "String",
                        "_id": "String",
                        "dateAddedToWebsite": "date",
                        "seller": "String",
                        "numberOfitemsInStock": Number,
                        "availabilityOfItem": Boolean,
                        "avgCustomerRating":Number,
                        "subCategory": "String",
                        "category": "String",
                        "price": Number,
                        "brandName": "String",
                        "itemName": "String"
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       
	 */

	app.post(baseUrl + "/:itemId/delete", auth.isAuthenticated, appController.deleteProduct)

	/**
   * @api {post} /api/v1/ecommercePlatform/products/:itemId/delete delete product 
   * @apiVersion 0.0.1
   * @apiGroup delete
   *
   * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
   * @apiParam {String} itemId item Id  passed as a URL parameter(Required)
   * 
   *
   *  @apiSuccessExample {json} Success-Response:
   *  {
		  "error": false,
		  "message": "Product Deleted Successfully",
		  "status": 200,
		  "data": {
			  "n": 1,
			  "ok": 1
		  }
	  }
	@apiErrorExample {json} Error-Response:
   *
   * {
	  "error": true,
	  "message": "Error Occured.",
	  "status": 500,
	  "data": null
	 }
	 
   */

	app.put(baseUrl + "/:itemId/edit", auth.isAuthenticated, appController.editProduct)


    /**
	 * @api {put} /api/v1/ecommercePlatform/products/:itemId/edit Edit products by itemId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} itemId itemId of the item passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Edited Successfully.",
	    "status": 200,
	    "data": [
					{
                            "n": 1,
                            "nModified": 1,
                            "ok": 1
                    }
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */
}

/** Run this command : apidoc -i routes/ -o apidoc/ */
module.exports = {
	setRouter: setRouter
}