// import mongoose from "mongoose";
// import Responses from "../../model/responseSchema.js";
// import Student from "../../model/StudentSchema.js";
// import Alumini from "../../model/aluminiSchema.js";

// const batchDepDashboard = async (req, res) => {
//     try {
//         let { batch, department } = req.query;

//         let userMatchQuery = {};

//         if (batch) userMatchQuery["Batch"] = isNaN(batch) ? batch : Number(batch);
//         if (department) userMatchQuery["Department"] = new RegExp(`^${department}$`, "i");

//         console.log("User Match Query:", userMatchQuery);

//         // ✅ Fetch Alumni & Students Matching Criteria
//         const alumniUsers = await Alumini.find(userMatchQuery).select("_id");
//         const studentUsers = await Student.find(userMatchQuery).select("_id");

//         console.log("Alumni Users Found:", alumniUsers.length);
//         console.log("Student Users Found:", studentUsers.length);

//         let userIds = [...alumniUsers.map(u => u._id.toString()), ...studentUsers.map(u => u._id.toString())];

//         console.log("Total Users Found:", userIds.length);
//         if (userIds.length > 0) {
//             console.log("Sample User ID:", userIds[0]);
//         }

//         // 🔥 **Fix: If No Users Found, Return Empty Response**
//         if (userIds.length === 0) {
//             console.log("No matching users found. Returning empty response.");
//             return res.json({ averages: {} });
//         }

//         // ✅ Convert userIds to ObjectIds
//         let objectIds = userIds.map(id => {
//             try {
//                 return new mongoose.Types.ObjectId(id);
//             } catch (error) {
//                 console.error("Invalid ObjectId:", id);
//                 return null; // Or handle the error as you see fit (e.g., skip this ID)
//             }
//         }).filter(id => id !== null); // Filter out any null values (invalid ObjectIds)

//         // ✅ Fetch Responses for Matching Users
//         const responses = await Responses.find()
//         .populate({ path: "Question", select: "Type Category" })
//         .lean();

//         console.log("Total Responses Fetched:", responses.length);

//         if (responses.length === 0) {
//             return res.json({ averages: {} });
//         }

//         console.log("Sample Response:", responses[0]);

//         let surveyData = {};

//         responses.forEach(response => {
//             const Type = response.Question?.Type || "Unknown";
//             const Category = response.Question?.Category || "Undefined";
//             const answer = Number(response.Answer) || 0;

//             if (!surveyData[Type]) surveyData[Type] = {};
//             if (!surveyData[Type][Category]) surveyData[Type][Category] = { sum: 0, count: 0 };

//             surveyData[Type][Category].sum += answer;
//             surveyData[Type][Category].count += 1;
//         });

//         console.log("Survey Data:", surveyData);

//         // ✅ Calculate 3-Scale Ratings
//         let result = {};
//         Object.keys(surveyData).forEach(surveyType => {
//             result[surveyType] = {};
//             Object.keys(surveyData[surveyType]).forEach(category => {
//                 let { sum, count } = surveyData[surveyType][category];
//                 let avg = count > 0 ? sum / count : 0;

//                 let scaleRating;
//                 if (avg <= 2.95) scaleRating = 1;
//                 else if (avg <= 3.5) scaleRating = 2;
//                 else scaleRating = 3;

//                 result[surveyType][category] = scaleRating;
//             });
//         });

//         res.json({ averages: result });

//     } catch (error) {
//         console.error("Error in batchDepDashboard:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// export default batchDepDashboard;









import mongoose from "mongoose";
import Responses from "../../model/responseSchema.js";
import User from "../../model/userSchema.js";  
import Questions from "../../model/questionSchema.js";  

const batchDepDashboard = async (req, res) => {
    try {
        let { batch, department } = req.query;

        if (!batch) {
            return res.status(400).json({ error: "Batch is required in query parameters." });
        }

        // **Step 1**: Fetch the students based on batch (and department if provided)
        const query = { batch: batch };
        if (department) {
            query.department = new RegExp(department, "i");  // Case-insensitive query for department
        }

        const students = await User.find(query);

        // **Log the count of students in the batch**
        console.log(`Number of students in batch ${batch}:`, students.length);

        if (students.length === 0) {
            return res.status(404).json({ error: "No students found for the given batch and department." });
        }

        // **Extract student IDs**
        const studentIds = students.map(student => student._id);

        // **Step 2**: Fetch responses for the found student IDs
        let matchQuery = { student_id: { $in: studentIds } };  // Use $in to match any student ID in the list

        // **Corrected Populate Query**
        const responses = await Responses.find(matchQuery)
            .populate({
                path: "student_id",  // Match field in database
                select: "batch department name email"
            })
            .populate({
                path: "question_id",  // Match field in database
                select: "Type Category"
            });

        console.log("Total Responses Fetched:", responses.length);

        if (responses.length === 0) {
            console.log("No Responses Found");
            return res.json({ averages: {} });
        }

        let surveyData = {};

        // **Process and Aggregate Responses**
        responses.forEach(response => {
            const Type = response.question_id?.Type || "Unknown";
            const Category = response.question_id?.Category || "Undefined";
            const answer = Number(response.response) || 0;

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

                let avg = count > 0 ? (sum / count) : 0;

                // **Correct scaling logic**
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
        console.error("Error in batchDepDashboard:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default batchDepDashboard;