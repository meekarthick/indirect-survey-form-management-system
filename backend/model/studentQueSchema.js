import mongoose from "mongoose";
const studentQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Core', 'CoCurricular', 'ExtraCurricular', 'DepartmentSpecific'],
        required: true
    },
    pointNumber : {
        type : Number,
        required : function() {
            ['Core','ExtraCurricular','CoCurricular'].includes(this.category)
        }
    },
    department: {
        type: String,
        enum: [
            'Biomedical', 'Biotechnology', 'Aeronautical Engineering', 'Agricultural Engineering', 'Artificial Intelligence and Datascience', 'Artificial Intelligence and Machine Learning',
            'Automobile', 'Civil', 'Computer Science and Business Systems', 'Computer Science and Design', 'Computer Science and Engineering', 'Computer Technology', 
            'Electrical and Electronics Engineering', 'Electronics and Communication Engineering', 'Electronics and Instrumentation Engineering', 'Fashion Technology', 'Food Technology', 'Informaation Science and Engineering', 
            'Information Technology', 'Mechanical Engineering', 'Mechatronics Engineering'
        ],
        required: function() { return this.category === 'DepartmentSpecific'; }
    }
});

const StudentQuestion = mongoose.model("StudentQuestion",studentQuestionSchema,)

export default StudentQuestion