import express from "express"
import  {signUp, login}  from '../controllers/employerauth.controller.js';
import { SendOTP, verifyOtp } from "../controllers/parentauth.controller.js";
import passport from "../utils/passport.config.js";
import generateTokenandSetcookie from "../utils/generateToken.js";
import { studentLogin } from "../controllers/studentauth.controller.js";
const router = express.Router()

router.post('/employerSignup',signUp)
router.post('/employerLogin',login)

router.post('/sendOtp',SendOTP)
router.post('/verifyOtp',verifyOtp)

router.post('/google',studentLogin)

export default router

// // Google oAuth routes

// router.get("/google",passport.authenticate("google",{scope:["profile","email"]}))

// router.get("/google/callback",
//     passport.authenticate("google",{
//         failureRedirect : "/auth/failure",
//         successRedirect : "/auth/success",
//     })
// )

// //success route

// router.get("/success",(req,res) =>{
//     if(!req.user){
//         return res.status(401).json({error:"Unauthorized Access"})
//     }

//     generateTokenandSetcookie(req.user)
//     return res.status(200).json({message:"Login Succesful"})

// })

// router.get("/failure",(req,res) =>{
//     res.status(401).json({error:"Login Failed"})
// })

// router.get("/logout",(req,res) =>{
//     req.logout((err) =>{
//         if(err){
//             return res.status(500).json({message:"Logout Failed"})
//         }
//         req.session.destroy()
//         res.status({message:"Logout Successful"})
//     })
// })

