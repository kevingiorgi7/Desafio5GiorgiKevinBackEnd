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
    async saveCart(cart) {
        try {
            await cart.save();
            console.log('Se guardó el carrito');
        } catch (error) {
            throw error;
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
            const cart = await cartsModel.findById(cid)
            const product = await productManager.getProductById(pid)
            if(!product){return {"ERROR":`El Producto con ID ${pid} no existe o no es un número`}}
            const cartIndex = cart.products.findIndex(e=>e.productID===pid)
            if(cartIndex===-1){ //si en findindex no encuentra nada, arroja -1
                cart.products.push({
                    productID: pid,
                    quantity: 1
                })
            } else {
                cart.products[cartIndex].quantity++
            } 
        try {    
            await this.saveCart(cart)
            return cart, console.log(cartIndex), console.log(cid), console.log(pid), console.log(cart), console.log(product);
        } catch (error) {
            throw error
        }


    }
}


export const cartManager = new CartManager() 