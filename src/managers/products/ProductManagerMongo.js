import { productsModel } from "../../db/models/products.model.js";

class ProductManager {
    async getProducts(){
        try {
            const products = await productsModel.find({})
            return products
        } catch (error) {
            return error
        }
    }
    async createProduct(obj){
        try {
            const newProduct = await productsModel.create(obj)
            return newProduct
        } catch (error) {
            return error
        }
    }
    async getProductById(id){
        try {
            const product = await productsModel.findById(id)
            return product
        } catch (error) {
            return error
        }
    }
    async updateOne(id,obj){
        try {
            const UpdateProduct = await productsModel.updateOne({_id:id},{...obj})
            return UpdateProduct
        } catch (error) {
            return error
        }
    }
    async deleteProduct(id){
        try {
            const deleteProduct = await productsModel.findByIdAndDelete(id)
            return deleteProduct
        } catch (error) {
            return error
        }
    }
}

export const productManager = new ProductManager() 