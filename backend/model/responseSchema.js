// import mongoose from "mongoose";

// const ResponseSchema = new mongoose.Schema({
//     User: {
//         type: mongoose.Schema.Types.ObjectId,
//         refPath: "userType",  
//         required: true
//     },
//     userType: {
//         type: String,
//         enum: ["Student", "Alumini", "Employer", "Parents"], 
//         required: true
//     },
//     Question: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Questions", 
//         required: true
//     },
//     Answer: {
//         type: Number,
//         enum: [1, 2, 3, 4, 5], 
//         required: true
//     }
// });

// const Responses = mongoose.model("Responses", ResponseSchema);

// export default Responses;


import mongoose from "mongoose";
const ResponseSchema = new mongoose.Schema({
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",  
        required: true
    },
    question_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Questions", 
        required: true
    },
    response: {  
        type: Number,
        enum: [1, 2, 3, 4, 5], 
        required: true
    }
});
const Responses = mongoose.model("Responses", ResponseSchema);

export default Responses;




// db.responses.find().forEach(doc => {
//     db.responses.updateOne(
//         { _id: doc._id },
//         { $set: { 
//             student_id: ObjectId(doc.student_id),
//             question_id: ObjectId(doc.question_id)
//         }}
//     );
// });