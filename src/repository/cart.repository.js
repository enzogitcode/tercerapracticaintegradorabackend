import CartModel from "../models/cart.model.js";
import ProductModel from '../models/product.model.js'

class CartRepository {
    async createCart() {
        try {
            const newCart = new CartModel({ products: [] });
            await newCart.save();
            return newCart;
        } catch (error) {
            console.log("Error al crear el nuevo carrito", error)
            throw error;
        }
    }
    async getCartById(cartId) {
        try {
            const cart = await CartModel.findById(cartId)
            if (!cart) {
                console.log("carrito no encontrado")
            }
            return cart

        } catch (error) {
            console.log("error al obtener el carrito", error)

        }

    }
    async addProducts(cartId, productId, quantity = 1) {

        try {

            const cart = await CartModel.findById(cartId);

            if (!cart) {

                throw new Error("Carrito no encontrado");

            }

            const productExist = cart.products.find(

                (item) => item.product._id.toString() === productId

            );

            if (productExist) {

                productExist.quantity += quantity;

            } else {

                cart.products.push({ product: productId, quantity });

            }

            cart.markModified("products");

            await cart.save();

            return cart;

        } catch (error) {

            console.log("Error al agregar un producto", error);

            throw error;

        }
    }
    async updateCart(cartId, updatedProducts) {
        try {
            const cart = await CartModel.findById(cartId)
            if (!cart) {
                console.log("Carrito no encontrado");
            }
            cart.products = updatedProducts
            cart.markModified("products")
            return cart

        } catch (error) {
            console.log("No se pudo actualizar el carrito", error)
            throw error
        }
    }

    async updateProductQuantity(cartId, productId, newQuantity) {
        try {
            const cart = await CartModel.findById(cartId);

            if (!cart) {

                throw new Error('Carrito no encontrado');
            }


            const productIndex = cart.products.findIndex(item => item._id.toString() === productId);

            if (productIndex !== -1) {
                cart.products[productIndex].quantity = newQuantity;

                cart.markModified('products');

                await cart.save();
                return cart;
            } else {
                throw new Error('Producto no encontrado en el carrito');
            }

        } catch (error) {
            throw new Error("Error al actualizar las cantidades");
        }

    }
    async deleteProduct(cartId, productId) {
        try {
            const cart = await CartModel.find(cartId);
            if (!cart) {
                throw new Error('Carrito no encontrado');
            }
            const productExist = await ProductModel.findById(productId)
            if (!productExist) {
                throw new Error('Producto no encontrado')
            }
            cart.products = cart.products.filter(item => item._id.toString() !== productId)

            await cart.save()
            return cart;
        } catch (error) {
            console.log(error)
        }
    }
    async clearCart(cartId) {
        try {
            const cart = await CartModel.findByIdAndDelete(cartId, { products: [] }, { new: true })
            if (!cart) {
                throw new Error("carrito no encontrado")
            }
            return cart;
        } catch (error) {
            console.log(error)

        }
    }

}
export default CartRepository;