import mongoose from "mongoose"

const employerSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true
    },
    organization:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contactNo:{
        type:Number,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum : {
            values : ["Employer"]
        },
        required:true
    }
})

const Employer = mongoose.model("Employer",employerSchema)

export default Employer