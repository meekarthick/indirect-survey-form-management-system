import mongoose from "mongoose";

const alumniSignupschema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    rollno :{
        type :  String,
        required : true
    },
    department:{
        type : String,
        required : true
    },
    batch :{
        type : Number,
        required : true
    },
    email:{
        type : email,
        required : true,
        unique : true
    },
    Role :{
        type : String,
        enum : {
            values : ["Alumini"]
        },
        required : [true,"Role is mandatory"]
    }
})

const AluminiSignup = mongoose.model("AluminiSignup",alumniSignupschema)

export default Alumini