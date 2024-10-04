import mongoose, { Document, Schema } from "mongoose";

interface IFile extends Document {
    name: string;
    type: string;
    cid: string;
    id: string;
}

interface ICapsule extends Document {
    id: string;
    name: string;
    description: string;
    ownerEmail: string;
    files: IFile[];
    unlockDate: Date;
}

const fileSchema: Schema<IFile> = new mongoose.Schema({
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

const capsuleSchema: Schema<ICapsule> = new mongoose.Schema({
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