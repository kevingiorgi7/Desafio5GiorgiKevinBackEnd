import { cartsModel } from "../../db/models/carts.model.js";

class CartManager {
    async getCarts(){
        try {
            const carts = await cartsModel.find({})
            return carts
        } catch (error) {
            throw error
        }
    }
    async getCartsById(id){
        try {
            const cart = await cartsModel.findById(id)
            return cart
        } catch (error) {
            throw error
        }
    }
    async createCart(){
        try {
            const newCart = await cartsModel.create()
            return newCart
        } catch (error) {
            throw error
        }
        

    }
}


export const cartManager = new CartManager() 