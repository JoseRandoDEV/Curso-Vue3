import { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
    const config = useRuntimeConfig();
    await mongoose.connect(config.mongodbUri);
    console.log("Connected and working to MongoDB");
}