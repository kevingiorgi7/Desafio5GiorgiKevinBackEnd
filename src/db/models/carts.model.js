import mongoose from "mongoose";

const cartsSchema = new mongoose.Schema({
    products: {
        type: Object, /* {
            productID: {
                type: String,
                required: true,
                unique: true
            },
            quantity: {
                type: Number,
                required: true,
            }
            }, */
        required: true,
        default: []
    }
})

export const cartsModel = mongoose.model('Carts', cartsSchema)