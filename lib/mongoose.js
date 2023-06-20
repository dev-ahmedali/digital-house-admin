import mongoose from "mongoose"

export function mongooseConnect() {
 const uri = process.env.MONGOOSE_URI
 if(mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
 }
}