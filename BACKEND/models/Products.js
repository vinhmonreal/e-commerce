import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    image: String,
    countInStock: Number
});

const ProductModel = mongoose.model('Product', ProductSchema);

export default ProductModel;

