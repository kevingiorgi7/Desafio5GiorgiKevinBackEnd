import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    thumbnail: {
        type: Object,
    },
    code: {
        type: String,
        required: true,
        unique: true,
    },
    stock: {
        type: Number,
        default: 0,
    },
    status: {
        type: Boolean,
        default: true,
    },
    category: {
        type: String,
        required: true,
    },
});

export const productsModel = mongoose.model('products', productsSchema)


/* import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({

title: {

type: String,

required: true,

unique: true,

},

description: {

type: String,

required: true,

},

price: {

type: Number,

required: true,

},

thumbnail: {

type: Object,

},

code: {

type: String,

required: true,

unique: true,

},

stock: {

type: Number,

default: 0,

},

status: {

type: Boolean,

required: false,

default: true,

},

category: {

type: String,

required: true,

},

});

export const productsModel = mongoose.model("products", productsSchema);

 */