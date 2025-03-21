import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is mandatory"]
    },
    email: {
        type: String,
        required: function () {
            return this.role !== "Parent"; // Parents may not have emails
        },
        unique: function () {
            return this.role !== "Parent" && this.email !== null; // Ensure uniqueness only for non-parents
        }
    },
    rollNumber: {
        type: String,
        required: function () {
            return this.role === "Student" || this.role === "Alumni";
        },
        unique: function () {
            return this.role === "Student" || this.role === "Alumni";
        },
        sparse: true 
    },
    batch: {
        type: Number,
        required: function () {
            return this.role === "Student" || this.role === "Alumni" || this.role === "Parent";
        }
    },
    department: {
        type: String,
        enum: [
            "Biomedical", "Biotechnology", "Aeronautical Engineering", "Agricultural Engineering",
            "Artificial Intelligence and Datascience", "Artificial Intelligence and Machine Learning",
            "Automobile Engineering", "Civil Engineering", "Computer Science and Business Systems",
            "Computer Science and Design", "Computer Science and Engineering", "Computer Technology",
            "Electrical and Electronics Engineering", "Electronics and Communication Engineering",
            "Electronics and Instrumentation Engineering", "Fashion Technology", "Food Technology",
            "Information Science and Engineering", "Information Technology", "Mechanical Engineering",
            "Mechatronics Engineering"
        ],
        required: function () {
            return this.role === "Student" || this.role === "Alumni";
        }
    },
    designation: {
        type: String,
        required: function () {
            return this.role === "Employer";
        }
    },
    organization: {
        type: String,
        required: function () {
            return this.role === "Employer";
        }
    },
    contactNo: {
        type: Number,
        required: function () {
            return this.role === "Employer" || this.role === "Parent";
        },
        unique: function () {
            return this.role === "Employer" || this.role === "Parent";
        }
    },
    username: {
        type: String,
        required: function () {
            return this.role === "Employer";
        },
        unique: function () {
            return this.role === "Employer";
        }
    },
    password: {
        type: String,
        required: function () {
            return this.role === "Employer";
        }
    },
    role: {
        type: String,
        enum: ["Student", "Alumni", "Employer", "Parent"],
        required: true
    }
});

const User = mongoose.model("User", UserSchema);

export default User;
