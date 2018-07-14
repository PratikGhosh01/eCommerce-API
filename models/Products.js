// importing mongoose module
const mongoose = require("mongoose")
// import schema 
const Schema = mongoose.Schema



let productSchema = new Schema(
    {
        itemId: {
            type: String,
            unique: true
        },
        itemName: {
            type: String,
            default: ""
        },
        brandName: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: 0
        },
        category: {
            type: String,
            default: ""
        },
        subCategory: {
            type: String,
            default: ""
        },
        avgCustomerRating: {
            type: Number,
            default: 1
        },
        availabilityOfItem: {
            type: Boolean,
            default: true
        },
        numberOfitemsInStock: {
            type: Number,
            default: 1
        },
        seller: {
            type: String,
            default: ""
        },

        dateAddedToWebsite: {
            type: Date,
            default: Date.now
        }

    }
)
mongoose.model("Products", productSchema)

