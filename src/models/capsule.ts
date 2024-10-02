import mongoose from "mongoose";

const capsuleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ownerEmail: {
        type: String,
        required: true
    },
    files: {
        type: [{
            name: String,
            type: String,
            cid: String
        }],
        required: true
    },
    unlockDate: {
        type: Date,
        required: true
    }
});

export default mongoose.models.Capsule || mongoose.model("Capsule", capsuleSchema)