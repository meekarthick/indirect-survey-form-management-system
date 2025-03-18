import bcrypt from "bcryptjs"
import Employer from "../model/employerSignup.js"
import generateTokenandSetcookie from "../utils/generateToken.js";

export const signUp = async (req, res) => {
    try {
        
        const { name, username, password, designation, organization, email, contactNo } = req.body;

        console.log(username);
        

        // verifying all fields are filled or not
        if (!name || !username || !password || !designation || !organization || !email) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        //verifying the exiting user
        const existingUser = await Employer.findOne({ username })
        if (existingUser) {
            return res.status(400).json({ message: 'User name already exists' })
        }

        //verifying the user already exists
        const number = await Employer.findOne({ contactNo })
        if (number) {
            return res.status(400).json({ message: 'User already exists' })
        }


        //submitting to the database

        //hashing the password
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt)
        const role = "Employer"
        const newEmployer = new Employer({
            name,
            username,
            password: hashedPass,
            designation,
            organization,
            email,
            contactNo,
            role
        })
        

        if(newEmployer){
            await newEmployer.save();
            generateTokenandSetcookie(newEmployer._id,res);
            return res.status(201).json({
                name: newEmployer.name,
                designation: newEmployer.designation,
                organization: newEmployer.organization,
                role: newEmployer.role
            })
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message })
    }

}

export const login = async (req, res) => {

    try {
        const { username, password } = req.body

        if (!username || !password) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        //verifying user matching and password matching 

        const employer = await Employer.findOne({ username })

        const isPassCorrect = await bcrypt.compare(password, employer?.password)

        if (!employer || !isPassCorrect) {
            return res.status(400).json({ error: "Invalid Credentials" })
        }

        generateTokenandSetcookie(employer._id,res);
 
        return res.status(200).json({
            _id : employer.id,
            name: employer.name,
            designation: employer.designation,
            organization: employer.organization,
            role: employer.role
        })

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: "Server Error" })
    }

}
