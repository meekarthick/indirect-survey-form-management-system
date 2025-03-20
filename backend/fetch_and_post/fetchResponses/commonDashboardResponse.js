// import Responses from "../../model/responseSchema.js"

// const commonDashBoardResponse = async (req, res) => {
//     try {
//         let { responseType, batch, department } = req.query;
//         let matchQuery = {}; 

//         // **Apply Filtering Based on Admin Selection**
//         if (responseType === "Batch") {
//             matchQuery["User.batch"] = batch;
//         } else if (responseType === "BatchDepartment") {
//             matchQuery["User.batch"] = batch;
//             matchQuery["User.department"] = department;
//         }


//         const responses = await Responses.find(matchQuery)
//             .populate({
//                 path: "User",
//                 select: "batch department"
//             })
//             .populate({
//                 path: "Question",
//                 select: "Type Category"
//             });

//         console.log("Total Responses Fetched:", responses.length);
//         if (responses.length > 0) {
//             console.log("Sample Response:", responses[0]);
//         } else {
//             console.log("No Responses Found");
//             return res.json({ averages: {} }); // Return empty if no data found
//         }

//         let surveyData = {};

//         // **Process and Aggregate Responses**
//         responses.forEach(response => {
//             const Type = response.Question?.Type || "Unknown";
//             const Category = response.Question?.Category || "Undefined";
//             const answer = Number(response.Answer) || 0;


//             if (!surveyData[Type]) {
//                 surveyData[Type] = {};
//             }
//             if (!surveyData[Type][Category]) {
//                 surveyData[Type][Category] = { sum: 0, count: 0 };
//             }

//             surveyData[Type][Category].sum += answer;
//             surveyData[Type][Category].count += 1;
//         });

//         console.log("Survey Data:", surveyData);

//         // **Calculate 3-Scale Ratings**
//         let result = {};
//         Object.keys(surveyData).forEach(surveyType => {
//             result[surveyType] = {};
//             Object.keys(surveyData[surveyType]).forEach(category => {
//                 let { sum, count } = surveyData[surveyType][category];
        
//                 let avg = count > 0 ? (sum / count) : 0; // Ensure avg is a number
        
//                 // Correct scaling logic
//                 let scaleRating;
//                 if (avg <= 2.95) {
//                     scaleRating = 1;
//                 } else if (avg <= 3) {
//                     scaleRating = 2;
//                 } else {
//                     scaleRating = 3;
//                 }
        
//                 result[surveyType][category] = scaleRating;
//             });
//         });

//         res.json({ averages: result });

//     } catch (error) {
//         console.error("Error in commonDashBoardResponse:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// export default commonDashBoardResponse;

import mongoose from "mongoose";
import Responses from "../../model/responseSchema.js";
import Alumini from "../../model/aluminiSchema.js";
import Student from "../../model/StudentSchema.js";
import Employer from "../../model/employerSignup.js";
import Parent from "../../model/parentSchema.js";


mongoose.model("Alumni", Alumini.schema);
mongoose.model("Student", Student.schema);
mongoose.model("Employers", Employer.schema);
mongoose.model("Parent", Parent.schema);

const commonDashBoardResponse = async (req, res) => {
    try {
        let { responseType, batch, department } = req.query;
        let matchQuery = {}; 

        // **Apply Filtering Based on Admin Selection**
        if (responseType === "Batch") {
            matchQuery["User.batch"] = batch;
        } else if (responseType === "BatchDepartment") {
            matchQuery["User.batch"] = batch;
            matchQuery["User.department"] = department;
        }

        const responses = await Responses.find(matchQuery)
            .populate({
                path: "User",
                select: "batch department"
            })
            .populate({
                path: "Question",
                select: "Type Category"
            });

        console.log("Total Responses Fetched:", responses.length);
        if (responses.length > 0) {
            console.log("Sample Response:", responses[0]);
        } else {
            console.log("No Responses Found");
            return res.json({ averages: {} }); // Return empty if no data found
        }

        let surveyData = {};

        // **Process and Aggregate Responses**
        responses.forEach(response => {
            const Type = response.Question?.Type || "Unknown";
            const Category = response.Question?.Category || "Undefined";
            const answer = Number(response.Answer) || 0;

            if (!surveyData[Type]) {
                surveyData[Type] = {};
            }
            if (!surveyData[Type][Category]) {
                surveyData[Type][Category] = { sum: 0, count: 0 };
            }

            surveyData[Type][Category].sum += answer;
            surveyData[Type][Category].count += 1;
        });

        console.log("Survey Data:", surveyData);

        // **Calculate 3-Scale Ratings**
        let result = {};
        Object.keys(surveyData).forEach(surveyType => {
            result[surveyType] = {};
            Object.keys(surveyData[surveyType]).forEach(category => {
                let { sum, count } = surveyData[surveyType][category];
        
                let avg = count > 0 ? (sum / count) : 0; // Ensure avg is a number
        
                // Correct scaling logic
                let scaleRating;
                if (avg <= 2.95) {
                    scaleRating = 1;
                } else if (avg <= 3) {
                    scaleRating = 2;
                } else {
                    scaleRating = 3;
                }
        
                result[surveyType][category] = scaleRating;
            });
        });

        res.json({ averages: result });

    } catch (error) {
        console.error("Error in commonDashBoardResponse:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default commonDashBoardResponse;
