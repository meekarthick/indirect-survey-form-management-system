import mongoose from "mongoose";

const ResponseSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: "userType",  
        required: true
    },
    userType: {
        type: String,
        enum: ["Student", "Alumini", "Employer", "Parents"], 
        required: true
    },
    Question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Questions", 
        required: true
    },
    Answer: {
        type: Number,
        enum: [1, 2, 3, 4, 5], 
        required: true
    }
});

const Responses = mongoose.model("Responses", ResponseSchema);

export default Responses;
