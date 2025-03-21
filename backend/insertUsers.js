import mongoose from "mongoose";
import fs from "fs";
import User from "./model/userSchema.js";
import connectToMongoDB from "./mongoDB/connect.js";

const insertUsers = async () => {
    try {
        await connectToMongoDB(); // ✅ Connect to MongoDB

        // ✅ Read JSON file correctly
        const users = JSON.parse(fs.readFileSync("./data/unified_users.json", "utf8"));

        // ✅ Convert only valid `_id` values to ObjectId
        users.forEach(user => {
            if (mongoose.isValidObjectId(user._id)) {
                user._id = new mongoose.Types.ObjectId(user._id);
            } else {
                delete user._id; // Remove invalid `_id`, MongoDB will auto-generate one
            }
        });

        // ✅ Insert Users
        await User.insertMany(users);
        console.log("✅ Users inserted successfully.");

    } catch (error) {
        console.error("❌ Error inserting users:", error.message);
    } finally {
        await mongoose.connection.close(); // ✅ Close the connection
        console.log("🔌 Disconnected from MongoDB.");
    }
};

// Run the function to insert users
insertUsers();
