import ProductModel from '../models/product.model.js'

class ProductRepository {
    async getProducts() {
        try {
            const products = await ProductModel.find().lean()
             /* const productsFinal = products.map(product => {
                const { _id, ...rest } = product.toObject();
                return rest;
            }) */
            return products
            
        } catch (error) {
            console.log(error)
        }
    }
    async getProductById(id) {
        try {
            const product = await ProductModel.findById(id).lean()
            if (!product) {
                console.log("Producto no encontrado")
                return null
            }
            return product

        } catch (error) {
            console.log(error)
        }
    }
    async addProduct({ title, description, price, img, code, stock, category, thumbnails }) {
        try {
            if (!title || !description || !price || !code || !stock || !category) {
                console.log("Todos los campos son obligatorios");
                return;
            }

            const existeProducto = await ProductModel.findOne({ code: code });

            if (existeProducto) {
                console.log("El código debe ser único");
                return;
            }

            const newProduct = new ProductModel({
                title,
                description,
                price,
                img,
                code,
                stock,
                category,
                status: true,
                thumbnails: thumbnails || []
            });

            await newProduct.save();

            return newProduct;

        } catch (error) {
            console.log(error)
        }
    }

    async updateProduct(id, updatedProduct) {
        try {
            const product = await ProductModel.findByIdAndUpdate(id, updatedProduct);

            if (!product) {
                console.log("producto no encontrado")
                return null
            }
            console.log("producto actualizado")

            return product
        } catch (error) {
            console.log(error)
        }
    }
    async deleteProductById(id) {
        try {
            const deletedProduct = await ProductModel.findByIdAndDelete(id)
            if (!deletedProduct) {
                console.log("No se encontró un producto con ese Id")
            }
            console.log("Producto eliminado correctamente")
            return deletedProduct
        } catch (error) {
            console.log(error)
        }

    }

}
export default ProductRepository;