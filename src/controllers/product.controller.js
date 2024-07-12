import ProductRepository from "../repository/product.repository.js"
const productRepository = new ProductRepository()
class ProductController {
    async getProducts(req, res) {
        try {
            const products = await productRepository.getProducts();
            res.json(products)
            /* res.render("index", {
                payload: products,
                products: products,
                hasPrevPage: products.hasPrevPage,
                hasNextPage: products.hasNextPage,
                prevPage: products.prevPage,
                nextPage: products.nextPage,
                currentPage: products.page,
                totalPages: products.totalPages,
                prevLink: products.hasPrevPage ? `/products?limit=${limit}&page=${products.prevPage}&sort=${sort}&query=${query}` : null,
                nextLink: products.hasNextPage ? `/products?limit=${limit}&page=${products.nextPage}&sort=${sort}&query=${query}` : null,
            }) */
        } catch (error) {
            res.json(error)
            console.log(error)
        }

    }
    async getProductById(req, res) {
        let productId = req.params.pid
        try {
            const product = await productRepository.getProductById(productId)
            res.json(product)
        } catch (error) {
            res.json(error)
        }
    }
    async addProduct(req, res) {
        const newProduct = req.body
        try {
            const product = await productRepository.addProduct(newProduct)
            res.json(product)

        } catch (error) {
            res.json(error)
            console.log(error)
        }
    }
    async updateProductById(req, res) {
        try {
            let productId = req.params.pid
            let newDataProduct = req.body
            const updatedProduct = await productRepository.updateProduct(productId, newDataProduct)
            res.json(updatedProduct)
        } catch (error) {
            console.log(error)
            res.json(error)
        }
    }
    async deleteProductById(req, res) {
        let productId = req.params.pid
        try {
            const deletedProduct = await productRepository.deleteProductById(productId)
            res.json(deletedProduct)
        } catch (error) {
            res.json(error)
        }
    }
}
export default ProductController