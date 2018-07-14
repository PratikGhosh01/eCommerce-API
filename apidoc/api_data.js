define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/ecommercePlatform/cart/add",
    "title": "add items to the  cart",
    "version": "0.0.1",
    "group": "add",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>item Id passed as a body parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantityOfItems",
            "description": "<p>quantity of the items passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product added successfully\",\n           \"status\": 200,\n           \"data\": {\n                   \"__v\": 0,\n                   \"cartId\": \"String\",\n                   \"itemId\": \"String\",\n                   \"_id\": \"String\",\n                   \"lastModifiedOn\": \"date\",\n                   \"itemsAddedOn\": \"date\",\n                   \"quantityOfItems\": \"Number\"\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "add",
    "name": "PostApiV1EcommerceplatformCartAdd"
  },
  {
    "type": "post",
    "url": "/api/v1/ecommercePlatform/products/add",
    "title": "Add items to product database",
    "version": "0.0.1",
    "group": "add",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemName",
            "description": "<p>item name of the product passed as a body parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brandName",
            "description": "<p>The brandName of the product passed as a body parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product passed as a body parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as a body parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subCategory",
            "description": "<p>subCategory of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "avgCustomerRating",
            "description": "<p>avgCustomerRating of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "availabilityOfItem",
            "description": "<p>availability Of Item of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numberOfitemsInStock",
            "description": "<p>number Of items In Stock of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "seller",
            "description": "<p>seller of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product added successfully\",\n           \"status\": 200,\n           \"data\": {\n                       \"__v\": 0,\n                       \"itemId\": \"String\",\n                       \"_id\": \"String\",\n                       \"dateAddedToWebsite\": \"date\",\n                       \"seller\": \"String\",\n                       \"numberOfitemsInStock\": Number,\n                       \"availabilityOfItem\": Boolean,\n                       \"avgCustomerRating\":Number,\n                       \"subCategory\": \"String\",\n                       \"category\": \"String\",\n                       \"price\": Number,\n                       \"brandName\": \"String\",\n                       \"itemName\": \"String\"\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "add",
    "name": "PostApiV1EcommerceplatformProductsAdd"
  },
  {
    "type": "post",
    "url": "/api/v1/ecommercePlatform/cart/:cartId/delete",
    "title": "delete item from  cart",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartId",
            "description": "<p>cart Id passed as a URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Deleted Successfully\",\n           \"status\": 200,\n           \"data\": {\n               \"n\": 1,\n               \"ok\": 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "delete",
    "name": "PostApiV1EcommerceplatformCartCartidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/ecommercePlatform/products/:itemId/delete",
    "title": "delete product",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>item Id  passed as a URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Deleted Successfully\",\n           \"status\": 200,\n           \"data\": {\n               \"n\": 1,\n               \"ok\": 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "delete",
    "name": "PostApiV1EcommerceplatformProductsItemidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/ecommercePlatform/products/:itemId/edit",
    "title": "Edit products by itemId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>itemId of the item passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Products Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n                            \"n\": 1,\n                            \"nModified\": 1,\n                            \"ok\": 1\n                    }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "edit",
    "name": "PutApiV1EcommerceplatformProductsItemidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommercePlatform/cart/all",
    "title": "View all items in cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Displaying Cart\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"cartId\": \"String\",\n                   \"lastModifiedOn\": \"date\",\n                   \"itemsAddedOn\": \"date\",\n                   \"quantityOfItems\": Number,\n                   \"itemId\": \"String\"\n\n                   \n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceplatformCartAll"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommercePlatform/cart/viewBy/cartId/:cartId",
    "title": "view cart item by cartId",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartId",
            "description": "<p>The cartId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n            \"error\": false,\n            \"message\": \"Added in the cart\",\n            \"status\": 200,\n            \"data\": {\n                \"error\": false,\n                \"message\": \"Product Found Successfully.\",\n                \"status\": 200,\n                \"data\": {\n                        \"_id\": \"string\",\n                        \"cartId\": \"String\",\n                        \"itemId\": \"String\",\n                        \"__v\": 0,\n                        \"lastModifiedOn\": \"date\",\n                        \"itemsAddedOn\": \"date\",\n                        \"quantityOfItems\": \"Number\"\n            }\n        }\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceplatformCartViewbyCartidCartid"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommercePlatform/products/all",
    "title": "View all products in database",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"All Products Found\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"itemId\": \"String\",\n                   \"dateAddedToWebsite\": \"Number\",\n                   \"sellers\": \"String\",\n                   \"numberOfitemsInStock\": Number,\n                   \"availabilityOfItem\": Boolean,\n                   \"avgCustomerRating\": Number,\n                   \"subCategory\": \"String\",\n                   \"category\": \"String\",\n                   \"price\": Number,\n                   \"brandName\": \"String\",\n                   \"itemName\": \"String\"\n                   \n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceplatformProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommercePlatform/products/viewBy/availabilityOfItem/:availabilityOfItem",
    "title": "Get products by availabilityOfItem",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "availabilityOfItem",
            "description": "<p>availabilityOfItem of the item passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Products Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n                    \"_id\": \"String\",\n                    \"itemId\": \"String\",\n                    \"sellers\": \"\",\n                    \"__v\": 0,\n                    \"dateAddedToWebsite\": \"date\",\n                    \"seller\": \"String\",\n                    \"numberOfitemsInStock\": Number,\n                    \"availabilityOfItem\": Boolean,\n                    \"avgCustomerRating\": Number,\n                    \"subCategory\": \"String\",\n                    \"category\": \"String\",\n                    \"price\": Number,\n                    \"brandName\": \"String\",\n                    \"itemName\": \"String\"\n        }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceplatformProductsViewbyAvailabilityofitemAvailabilityofitem"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommercePlatform/products/viewBy/avgCustomerRating/:avgCustomerRating",
    "title": "Get products by avgCustomerRating",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "avgCustomerRating",
            "description": "<p>avgCustomerRating of the item passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Products Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n                    \"_id\": \"String\",\n                    \"itemId\": \"String\",\n                    \"sellers\": \"\",\n                    \"__v\": 0,\n                    \"dateAddedToWebsite\": \"date\",\n                    \"seller\": \"String\",\n                    \"numberOfitemsInStock\": Number,\n                    \"availabilityOfItem\": Boolean,\n                    \"avgCustomerRating\": Number,\n                    \"subCategory\": \"String\",\n                    \"category\": \"String\",\n                    \"price\": Number,\n                    \"brandName\": \"String\",\n                    \"itemName\": \"String\"\n        }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceplatformProductsViewbyAvgcustomerratingAvgcustomerrating"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommercePlatform/products/viewBy/brandName/:brandName",
    "title": "Get products by brandName",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brandName",
            "description": "<p>brandName of the item passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Products Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n                    \"_id\": \"String\",\n                    \"itemId\": \"String\",\n                    \"sellers\": \"\",\n                    \"__v\": 0,\n                    \"dateAddedToWebsite\": \"date\",\n                    \"seller\": \"String\",\n                    \"numberOfitemsInStock\": Number,\n                    \"availabilityOfItem\": Boolean,\n                    \"avgCustomerRating\": Number,\n                    \"subCategory\": \"String\",\n                    \"category\": \"String\",\n                    \"price\": Number,\n                    \"brandName\": \"String\",\n                    \"itemName\": \"String\"\n        }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceplatformProductsViewbyBrandnameBrandname"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommercePlatform/products/viewBy/category/:category",
    "title": "Get products by category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the item passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Products Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n                    \"_id\": \"String\",\n                    \"itemId\": \"String\",\n                    \"sellers\": \"\",\n                    \"__v\": 0,\n                    \"dateAddedToWebsite\": \"date\",\n                    \"seller\": \"String\",\n                    \"numberOfitemsInStock\": Number,\n                    \"availabilityOfItem\": Boolean,\n                    \"avgCustomerRating\": Number,\n                    \"subCategory\": \"String\",\n                    \"category\": \"String\",\n                    \"price\": Number,\n                    \"brandName\": \"String\",\n                    \"itemName\": \"String\"\n        }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceplatformProductsViewbyCategoryCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommercePlatform/products/viewBy/itemId/:itemId",
    "title": "Get products by itemId",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>item Id of the item passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Products Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n                    \"_id\": \"String\",\n                    \"itemId\": \"String\",\n                    \"sellers\": \"\",\n                    \"__v\": 0,\n                    \"dateAddedToWebsite\": \"date\",\n                    \"seller\": \"String\",\n                    \"numberOfitemsInStock\": Number,\n                    \"availabilityOfItem\": Boolean,\n                    \"avgCustomerRating\": Number,\n                    \"subCategory\": \"String\",\n                    \"category\": \"String\",\n                    \"price\": Number,\n                    \"brandName\": \"String\",\n                    \"itemName\": \"String\"\n        }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceplatformProductsViewbyItemidItemid"
  },
  {
    "type": "get",
    "url": "/api/v1/ecommercePlatform/products/viewBy/subCategory/:subCategory",
    "title": "Get products by subCategory",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subCategory",
            "description": "<p>sub category of the item passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Products Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n                    \"_id\": \"String\",\n                    \"itemId\": \"String\",\n                    \"sellers\": \"\",\n                    \"__v\": 0,\n                    \"dateAddedToWebsite\": \"date\",\n                    \"seller\": \"String\",\n                    \"numberOfitemsInStock\": Number,\n                    \"availabilityOfItem\": Boolean,\n                    \"avgCustomerRating\": Number,\n                    \"subCategory\": \"String\",\n                    \"category\": \"String\",\n                    \"price\": Number,\n                    \"brandName\": \"String\",\n                    \"itemName\": \"String\"\n        }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceplatformProductsViewbySubcategorySubcategory"
  }
] });
