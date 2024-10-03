import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    cid: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})

const capsuleSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
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
    files: [fileSchema],
    unlockDate: {
        type: Date,
        required: true
    }
});

export default mongoose.models.Capsule || mongoose.model("Capsule", capsuleSchema)