import mongoose from "mongoose";

const ParentSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : [true,"Name is Mandatory"]
    },
    Mobile_Number:{
        type : Number,
        required : [true,"Mobile Number is Mandatory"]
    },
    Batch : {
        type : Number,
        required : [true,"Batch is Mandatory"]
    },
    Role : {
        type : String,
        enum : ["Parent"],
        required :true
    }
})

const Parent = mongoose.model("Parents",ParentSchema);

export default Parent;