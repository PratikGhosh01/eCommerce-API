// importing modules
const express = require('express')
const router = express.Router();
const cartController = require('./../controllers/cartController')
const auth = require('./../middlewares/auth')

const appConfig = require('./../config/appConfig')


let setRouter = (app) => {

    let baseUrl = appConfig.apiVersion + '/ecommercePlatform/cart';

    app.get(baseUrl + "/all", auth.isAuthenticated, cartController.viewCart)

    /**
	 * @api {get} /api/v1/ecommercePlatform/cart/all  View all items in cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Displaying Cart",
            "status": 200,
            "data": [
                {
                    "cartId": "String",
                    "lastModifiedOn": "date",
                    "itemsAddedOn": "date",
                    "quantityOfItems": Number,
                    "itemId": "String"

                    
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
    app.get(baseUrl + "/viewBy/cartId/:cartId", auth.isAuthenticated, cartController.viewByCartId)


    /**
	 * @api {get} /api/v1/ecommercePlatform/cart/viewBy/cartId/:cartId  view cart item by cartId
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} cartId The cartId should be passed as the URL parameter
     
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Added in the cart",
            "status": 200,
            "data": {
                "error": false,
                "message": "Product Found Successfully.",
                "status": 200,
                "data": {
                        "_id": "string",
                        "cartId": "String",
                        "itemId": "String",
                        "__v": 0,
                        "lastModifiedOn": "date",
                        "itemsAddedOn": "date",
                        "quantityOfItems": "Number"
            }
        }
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl + "/add", auth.isAuthenticated, cartController.addToCart)

    /**
	 * @api {post} /api/v1/ecommercePlatform/cart/add add items to the  cart
	 * @apiVersion 0.0.1
	 * @apiGroup add
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} itemId item Id passed as a body parameter(Required)
	 * @apiParam {Number} quantityOfItems quantity of the items passed as a body parameter
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product added successfully",
            "status": 200,
            "data": {
                    "__v": 0,
                    "cartId": "String",
                    "itemId": "String",
                    "_id": "String",
                    "lastModifiedOn": "date",
                    "itemsAddedOn": "date",
                    "quantityOfItems": "Number"
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

    app.post(baseUrl + "/:cartId/delete", auth.isAuthenticated, cartController.removeItemFromCart)

    /**
	 * @api {post} /api/v1/ecommercePlatform/cart/:cartId/delete delete item from  cart
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} cartId cart Id passed as a URL parameter(Required)
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


}

/** Run this command : apidoc -i routes/ -o apidoc/ */
module.exports = {
    setRouter: setRouter
}