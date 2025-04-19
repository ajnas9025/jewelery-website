
import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    price:{
        type:String,
        required : true
    },
    image:{
        type:String,
        required : true
}
})




const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true }
});

export const User = mongoose.model("users", userSchema);
export const Product = mongoose.model("products", productSchema);

