import { Product } from "@/lib/models/product";
import clientPromise from "@/lib/mongodb";
import mongoose from "mongoose";

export default function async handle(req, res) {
    const {method} = req;
    mongoose.Promise = clientPromise


    if(method === "POST") {
        const  {title, description, post} = req.body
        const before 
        Product.create({
           const ProductDoc = await product.create({
            title, description, price
           })  
        })
        res.json('post')
    }
}

