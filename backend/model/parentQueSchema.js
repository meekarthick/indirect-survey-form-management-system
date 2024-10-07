import mongoose from "mongoose";

const parentQueSchema = new mongoose.Schema({
    pointNumber: {
        type: Number,
        required: true,
        unique: true
    },
    question: {
        type: String,
        required: true
    },
})

const ParentQuestion = mongoose.model("ParentQuestion",parentQueSchema);

export default ParentQuestion;