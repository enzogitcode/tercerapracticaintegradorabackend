import CartModel from "../models/cart.model.js";
import CartRepository from "../repository/cart.repository.js";
const cartRepository = new CartRepository()
class CartController {
    async newCart(req, res) {
        try {
            const newCart = await cartRepository.createCart()
            res.json(newCart)
            console.log("Nuevo carrito creado")
        } catch (error) {
            console.log("error al crear el carrito", error)
            res.json(error)
        }
    }
    async addProducts(req, res) {

        const productId = req.params.pid;

        const cartId = req.params.cid;

        const quantity = req.body.quantity || 1;

        try {

            const cart = await cartRepository.addProducts(

                cartId,

                productId,

                quantity

            );

            res.json(cart);

        } catch (error) {

            console.log("Error en addProducts del controlador", error);

            res.status(500).json({ error: error.message });

        }
    }

    async deleteProduct(req, res) {
        const cartId = req.params.cid
        const productId = req.params.pid
        try {
            const cart = await cartRepository.getCartById(cartId, productId)
            res.json(cart)
        } catch (error) {
            console.log(error)
        }

    }
    async getCartById(req, res) {
        const cartId = req.params.cid
        try {
            const cart = await cartRepository.getCartById(cartId)
            if (!cart) {
                res.json("No existe un carrito con ese Id")
            }
            res.json(cart)
            //no funciona
            //res.redirect(`http://localhost:8080/api/carts/${cartId}`)
            //funciona
            //res.render('cartsContainer', {carts: cart})

        } catch (error) {
            console.log(error)
            res.json(error)
        }
    }
    async updateCart(req, res) {
        const cartId = req.params.cid
        try {
            const cart = await cartRepository.updateCart(cartId)
            res.json(cart)
        } catch (error) {
            console.log(error)
        }
    }
    async updateQuantity(req, res) {
        const cartId = req.params.cid
        const updatedProducts = req.body;
        try {
            const updatedCart = await cartRepository.updateProductQuantity(cartId, updatedProducts);
            res.json(updatedCart);
        } catch (error) {
            console.log(error)
        }
    }
    async clearCart(req, res) {
        const cartId = req.params.cid
        try {
            const cart = await cartRepository.clearCart(cartId)
            if (!cart) {
                res.json("No existe un carrito con ese Id")
            }
            res.json("carrito eliminado")
        } catch (error) {
            console.log("no se pudo vaciar el carrito", error)
        }

    }
    async purchase() { }
}
export default CartController

