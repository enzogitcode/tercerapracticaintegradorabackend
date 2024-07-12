import express from 'express'
const router = express.Router()
import ProductController from '../controllers/product.controller.js'
const productController = new ProductController();

router.get("/", productController.getProducts)
router.put("/:pid", productController.updateProductById)
router.post ("/", productController.addProduct)
router.get("/:pid", productController.getProductById)
router.delete("/:pid", productController.deleteProductById)

export default router