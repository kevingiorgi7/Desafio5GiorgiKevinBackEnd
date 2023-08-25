import { cartsModel } from "../../db/models/carts.model.js";

import { productManager } from "../products/ProductManagerMongo.js"; 

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
            if(!cart){return {"ERROR":`El Carrito con ID ${id} no existe o no es un número`}} 
            return cart
        } catch (error) {
            throw error
        }
    }
    async createCart(){
        try {
            //const newCart = await cartsModel.create()
            //return newCart
            const newCart = new cartsModel();
            await newCart.save();
            return "Cart created";
        } catch (error) {
            throw error
        }
    }
    async addProduct(cid, pid){
        try {
            const cart = await cartsModel.findById(cid)
            const product = await productManager.getProductById(pid)
            return cart, console.log(cart), console.log(product);
        } catch (error) {
            throw error
        }


    }
}


export const cartManager = new CartManager() 