import mongoose from "mongoose";

const alumniQueSchema = new mongoose.Schema({
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

const AlumniQuestion = mongoose.model("AlumniQuestion",alumniQueSchema);

export default AlumniQuestion;