import mongoose from "mongoose";

export const connectDB = async () => {
    if (!process.env.DATABASE_URL) {
        throw new Error("Please define the DATABASE_URL environment variable inside .env.local")
    }

    mongoose.connect(process.env.DATABASE_URL);

    mongoose.connection.on("error", (error) => {
        console.error(error);
    });
}