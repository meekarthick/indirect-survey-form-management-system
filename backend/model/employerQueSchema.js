import mongoose from "mongoose";

const employerQueSchema = new mongoose.Schema({
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

const EmployerQuestion = mongoose.model("EmployerQuestion",employerQueSchema);

export default EmployerQuestion;