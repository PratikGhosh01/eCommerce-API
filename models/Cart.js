// importing mongoose module
const mongoose = require("mongoose")
// import schema 
const Schema = mongoose.Schema

let cartSchema = new Schema(
    {

        cartId: {
            type: String,
            unique: true
        },
        itemId: {
            type: String,
            unique: true
        },
        quantityOfItems: {
            type: Number,
            default: 1
        },
        itemsAddedOn: {
            type: Date,
            default: Date.now
        },
        lastModifiedOn: {
            type: Date,
            default: Date.now
        }

    }
)

mongoose.model('Cart', cartSchema)