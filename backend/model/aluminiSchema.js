import mongoose from "mongoose";

const AluminiSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Name is mandatory"]
    },
    Email: {
        type: String,
        required: [true, "Email is mandatory"]
    },
    Roll_Number: {
        type: String,
        required: [true, "Roll number is mandatory"]
    },
    Role: {
        type: String,
        enum: {
            values: ["Student"]
        }
    },
    Batch: {
        type: Number,
        required: [true, "Batch is mandatory"]
    },
    Department:
    {
        type : String,
        enum :{
            values : [ 'Biomedical', 'Biotechnology', 'Aeronautical Engineering', 'Agricultural Engineering', 'Artificial Intelligence and Datascience', 'Artificial Intelligence and Machine Learning',
                'Automobile Engineering', 'Civil Engineering', 'Computer Science and Business Systems', 'Computer Science and Design', 'Computer Science and Engineering', 'Computer Technology', 
                'Electrical and Electronics Engineering', 'Electronics and Communication Engineering', 'Electronics and Instrumentation Engineering', 'Fashion Technology', 'Food Technology', 'Information Science and Engineering', 
                'Information Technology', 'Mechanical Engineering', 'Mechatronics Engineering'],
        },
        required : [true,"Department is mandatory"]
    }
})

const Alumini = mongoose.model("Alumini",AluminiSchema);

export default Alumini;