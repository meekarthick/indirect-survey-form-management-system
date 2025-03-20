import mongoose from "mongoose";
import Responses from "../model/responseSchema.js"; // ✅ Ensure correct path

async function migrateUserField() {
    try {
        // ✅ Connect to MongoDB
        await mongoose.connect("mongodb://127.0.0.1:27017/indirect-survey");

        console.log("Connected to MongoDB.");

        // ✅ Update all responses in one query
        const result = await Responses.updateMany(
            { Question: { $type: "string" } },  // Find documents where `User` is a string
            [{ $set: { Question: { $toObjectId: "$User" } } }] // Convert to ObjectId
        );

        console.log(`Updated ${result.modifiedCount} responses.`);

    } catch (error) {
        console.error("Error during migration:", error);
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB.");
    }
}

migrateUserField();
