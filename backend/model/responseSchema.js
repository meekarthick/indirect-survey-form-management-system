import mongoose from "mongoose"

const ResponseSchema = new mongoose.Schema({
    User : {
        type : mongoose.Schema.Types.ObjectId,
    },
    Question : {
        type : mongoose.Schema.Types.ObjectId
    },
    answers : {
        type : Number,
        enum : {
            values : [1,2,3,4,5],
            message : "{VALUES} is not a valid status"
        }
    }
})

const Responses = mongoose.model(ResponseSchema,"Responses");

export default Responses;