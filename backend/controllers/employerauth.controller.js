import bcrypt from "bcryptjs"
import Employer from "../model/employerSignup.js"

export const signUp = async (req, res) => {
    try {
        const { name, username, password, designation, organization, email, contactNo } = req.body;
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

        // verifying the domain mail
        const domain = email.split('@')[1];
        const companyName = domain.split('.')[0]
        const expectedDomain = organization;

        if (companyName !== expectedDomain) {
            return res.status(400).json({ message: 'Enter valid organization mail id' })
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

        await newEmployer.save()

        return res.status(201).json({
            name: newEmployer.name,
            designation: newEmployer.designation,
            organization: newEmployer.organization,
            role: newEmployer.role
        })

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: 'Server Error' })
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

        if (!employer) {
            return res.status(400).json({ error: "Invalid Username" })
        }

        const isPassCorrect = bcrypt.compare(password, employer?.password)

        if (!isPassCorrect) {
            return res.status(400).json({ error: "Invalid Password" })
        }

        return res.status(201).json({
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
