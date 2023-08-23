/* const manager = new ProductManager("Products.json");

// GET 
router.get('/', async (req,res)=>{
    try {
        const products = await manager.getProducts()
        const {limit} = req.query   // IDEM: let limit = Number(req.query.limit);
        let productsLimited = limit? products.slice(0,+limit) : products;
        res.status(200).json({ message: 'Products', productsLimited})
    } catch (error) {
        throw res.status(500).json({ error }) 
    }
})

router.get('/:pid', async (req,res)=>{
    const { pid } = req.params // IDEM: const id = req.params.pid
    try {
        const product = await manager.getProductsById(+pid) 
        res.status(200).json({ message: 'Product', product: product })
    } catch (error) {
        throw res.status(500).json({ error })
    }
})

// POST
router.post('/' , async (req,res)=>{
    console.log(req.body);
    try {
        const newProduct = await manager.addProducts(req.body)
        res.status(200).json({ message: 'Product created', product: newProduct })
    } catch (error) {
        throw res.status(500).json({ error })
    }
})

// PUT
router.put('/:pid', async (req,res)=>{
    const { pid } = req.params
    console.log(req.body);
    try {
        const productUpdated = await manager.updateProduct(+pid,req.body)
        res.status(200).json({ message: 'Product updated', product: productUpdated })
    } catch (error) {
        throw res.status(500).json({ error })
    }
})

// DELETE
router.delete('/:pid', async (req,res)=>{
    const { pid } = req.params
    try {
        const productDeleted = await manager.deleteProduct(+pid)
        res.status(200).json({ message: 'Product deleted', product: productDeleted })
    } catch (error) {
        throw res.status(500).json({ error })
    }
}) */

import {Router} from "express";
import { productManager } from "../managers/products/ProductManagerMongo.js"; 

const router = Router()

router.get('/', async(req,res)=>{
    try {
        const products = await productManager.getProducts()
        if(products.length){
            res.status(200).json({message:'Products', products})
        } else {
            res.status(200).json({message:'No products found'})
        }
    } catch (error) {
        res.status(500).json({error})
    }
})

router.get('/:id',async(req,res)=>{
    const {id} = req.params
    try {
        const product = await productManager.getProductById(id)
        if(!product){
            res.status(400).json({message: 'Invalid ID'})
        } else {
            res.status(200).json({message: 'Product found', product})
        }
    } catch (error) {
        res.status(500).json({error})
    }
})

router.post('/',async(req,res)=>{
    const {title, description ,price, code, category} = req.body
    if(
        !title ||
        !description ||
        !price ||
        !code ||
        !category
    ){
        return res.status(400).json({message: 'Some data is missing'})
    }
    try {
        const newProduct = await productManager.createProduct(req.body)
        res.status(200).json({message: 'New Product', newProduct})
    } catch (error) {
        res.status(500).json({error})
    }
})

router.delete('/:id',async(req,res)=>{
    const {id} = req.params
    try {
        const deleteProduct = await productManager.deleteProduct(id)
        res.status(200).json({message: 'Product deleted', product: deleteProduct})
    } catch (error) {
        res.status(500).json({error})
    }
})


export default router 