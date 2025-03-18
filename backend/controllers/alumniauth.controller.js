import Alumini from "../model/alumniSignup";
import generateTokenandSetcookie from "../utils/generateToken";

export const login = async (req,res) =>{
    try {
        const {userName, rollno} = req.body;

        if(!userName ||  !rollno){
            return res.status(500).json({error:"All fields are required"})
        }

        const alumini = await Alumini.findOne(rollno);
        const aluminiPass = await bcrypt.compare(password,alumini.password);

        if(!alumini || !aluminiPass){
            return res.status(400).json({error : "Invalid Credentials"});
        }

        generateTokenandSetcookie(alumini._id,res);

        res.status(200).json({
            _id : alumini.id,
            name : alumini.Name,
            batch : alumini.batch,
            rollNo : alumini.rollno,
            dep : alumini.department,
        })

    } catch (error) {
        return res.status(500).json({error : "Server error"});
    }
}

