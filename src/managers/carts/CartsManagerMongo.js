import { cartsModel } from "../../db/models/carts.model.js";

class CartManager {
    async getCarts(){
        try {
            const carts = await cartsModel.find({})
            return carts
        } catch (error) {
            return error
        }
    }
    async getCartsById(id){
        try {
            const cart = await cartsModel.findById(id)
            return cart
        } catch (error) {
            return error
        }
    }
    async createCart(){
        try {
            const newCart = await cartsModel.create()
            return newCart
        } catch (error) {
            return error
        }
        

    }
}


export const cartManager = new CartManager() 