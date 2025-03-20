import mongoose from "mongoose";
import Responses from "../../model/responseSchema.js";
import Student from "../../model/StudentSchema.js";
import Alumini from "../../model/aluminiSchema.js";

const batchDepDashboard = async (req, res) => {
    try {
        let { batch, department } = req.query;

        let userMatchQuery = {};

        if (batch) userMatchQuery["Batch"] = isNaN(batch) ? batch : Number(batch);
        if (department) userMatchQuery["Department"] = new RegExp(`^${department}$`, "i");

        console.log("User Match Query:", userMatchQuery);

        // ✅ Fetch Alumni & Students Matching Criteria
        const alumniUsers = await Alumini.find(userMatchQuery).select("_id");
        const studentUsers = await Student.find(userMatchQuery).select("_id");

        console.log("Alumni Users Found:", alumniUsers.length);
        console.log("Student Users Found:", studentUsers.length);

        let userIds = [...alumniUsers.map(u => u._id), ...studentUsers.map(u => u._id)];

        console.log("Total Users Found:", userIds.length);

        // 🔥 **Fix: If No Users Found, Return Empty Response**
        if (userIds.length === 0) {
            console.log("No matching users found. Returning empty response.");
            return res.json({ averages: {} });
        }

        console.log("User IDs Passed to Query:", userIds);

        // ✅ Fetch Responses for Matching Users
        const responses = await Responses.find({
            User: { $in: userIds },
            Question: { $ne: null }  // ✅ Ensure Question is not null
        })
        .populate({ path: "Question", select: "Type Category" })
        .lean();

        console.log("Total Responses Fetched:", responses.length);

        if (responses.length === 0) {
            return res.json({ averages: {} });
        }

        console.log("Checking Responses for Missing Questions...");
        responses.forEach((response, index) => {
            if (!response.Question) {
                console.warn(`🚨 Missing Question for Response ${index + 1} (Response ID: ${response._id})`);
            }
        });

        let surveyData = {};

        responses.forEach(response => {
            const Type = response.Question?.Type || "Unknown";
            const Category = response.Question?.Category || "Undefined";
            const answer = Number(response.Answer) || 0;

            if (!surveyData[Type]) surveyData[Type] = {};
            if (!surveyData[Type][Category]) surveyData[Type][Category] = { sum: 0, count: 0 };

            surveyData[Type][Category].sum += answer;
            surveyData[Type][Category].count += 1;
        });

        console.log("Survey Data:", surveyData);

        // ✅ Calculate 3-Scale Ratings
        let result = {};
        Object.keys(surveyData).forEach(surveyType => {
            result[surveyType] = {};
            Object.keys(surveyData[surveyType]).forEach(category => {
                let { sum, count } = surveyData[surveyType][category];
                let avg = count > 0 ? sum / count : 0;

                let scaleRating;
                if (avg <= 2.95) scaleRating = 1;
                else if (avg <= 3.5) scaleRating = 2;
                else scaleRating = 3;

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
