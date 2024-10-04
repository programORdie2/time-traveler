import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
    email: string;
    password: string;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

export default mongoose.models.User || mongoose.model("User", userSchema)