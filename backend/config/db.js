import mongoose, { connect } from "mongoose";
import dotenv from "dotenv/config";

export const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.DB}/food-del`).then(() => {
        console.log('MongoDB Connected')
    });
}