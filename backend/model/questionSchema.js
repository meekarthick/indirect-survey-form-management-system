import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
    Content : {
        type : String,
        required : [true, "Content is required"]
    },
    Category : {
        type : String,
        enum : {
            values: ["Engineering Knowledge","Problem Analysis","Design/ Development of Solutions","Conduct Investigations of Complex Problems","Modern Tool Usage","The Engineer and Society","Environment and Sustainability",
                    "Ethics","Individual and Team Work","Communication","Project Management and Finance","Life-long Learning","xyz"],
            message : "Invalid Category"
        },
    },
    Department : {
        type : String,
        enum : {
            values : [ 'Biomedical', 'Biotechnology', 'Aeronautical Engineering', 'Agricultural Engineering', 'Artificial Intelligence and Datascience', 'Artificial Intelligence and Machine Learning',
                'Automobile Engineering', 'Civil Engineering', 'Computer Science and Business Systems', 'Computer Science and Design', 'Computer Science and Engineering', 'Computer Technology', 
                'Electrical and Electronics Engineering', 'Electronics and Communication Engineering', 'Electronics and Instrumentation Engineering', 'Fashion Technology', 'Food Technology', 'Information Science and Engineering', 
                'Information Technology', 'Mechanical Engineering', 'Mechatronics Engineering'],
            message : "Enter correct department"
        },
    },
    Role : {
        type : String,
        enum :{
            values :  ["Student","Parent","Alumini","Employer"],
            message : "{VALUE} is not a valid status"
        },
        required  : true
    },
    Type : {
       type : String,
       enum : {
        values : ["Student Survey","Department specific","Extra Curricular", "CoCurricular","Alumini Survey","Parent Survey","Employer Survey"]
       },
       required  : true 
    }

})

const Questions = mongoose.model("Questions",QuestionSchema);

export default Questions;