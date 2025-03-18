import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import dotenv from "dotenv"
import Student from "../model/StudentSchema.js"
import Alumini from "../model/aluminiSchema.js"

dotenv.config()

passport.use(
    new GoogleStrategy(
        {
            clientID : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET,
            callbackURL : "/auth/google/callback"
        },
        async (accessToken,refreshToken,profile,done) => {
            try {
                const email = profile.emails[0].value

                const isOrganizationMail = email.endsWith("@bitsathy.ac.in")

                if(!isOrganizationMail){
                    return done(null,false,{message:"UnAuthorized Access"})
                }

                let user = null
                let role = ""
                
                user = await Student.findOne({email})


                //change Alumini as Admin
                if(!user){
                    user = await Alumini.findOne({email})
                }
                
                if(user.Role !== "Student" && user.Role !== "Admin"){
                    return done(null,false,{message : "You are not a authorized person"})
                }

                done(null,user)


            } catch (error) {
                done(error,null)
                
            }
        }
    )
)

passport.serializeUser((user,done) =>{
    done(null,user)
})


passport.deserializeUser((user,done) =>{
    done(null,user)
})

export default passport