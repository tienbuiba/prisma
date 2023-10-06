import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProductById } from '../controller/product.controller.js';

const productRouter = express.Router();

//getAllProducts
productRouter.get('/api/v1/all-products', getAllProducts)

// getProductById
productRouter.get('/api/v1/product/:id', getProductById)

// createProduct
productRouter.post('/api/v1/create-product', createProduct)

// deleteProduct
productRouter.delete('/api/v1/product/:id', deleteProduct)

// updateProduct
productRouter.patch('/api/v1/update-product/:id', updateProductById)

export default productRouter;