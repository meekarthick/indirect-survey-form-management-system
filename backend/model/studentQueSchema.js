import mongoose from "mongoose";

const studentQuestionSchema = new mongoose.Schema({
    pointNumber : {
        type : Number,
        required : true,
        unique : true
    },
    question : {
        type : String,
        required : true
    },
    category:{
        type : String,
        enum: ['Core', 'DepartmentSpecific', 'CoCurricular', 'ExtraCurricular'],
        required : true
    },
    department : {
        type : String
    }
})

const StudentQuestion = mongoose.model("StudentQuestion",studentQuestionSchema,)

export default StudentQuestion