import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: { type: String },
    code: {
        type: String,
        required: true,
        unique: true
    },
    stock: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    category: {
        type: String,
        required: true,
        index: true
    },
    thumbnails: {
        type: Array,
        default: []
    }
})

productSchema.plugin(mongoosePaginate)
const ProductModel = mongoose.model("products", productSchema)

export default ProductModel;