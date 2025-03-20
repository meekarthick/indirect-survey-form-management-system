import express from "express"
import  {signUp, login}  from '../controllers/employerauth.controller.js';
import { SendOTP, verifyOtp } from "../controllers/parentauth.controller.js";
import { studentLogin } from "../controllers/studentauth.controller.js";
import { aluminiLogin } from "../controllers/alumniauth.controller.js";
const router = express.Router()

router.post('/employerSignup',signUp)
router.post('/employerLogin',login)

router.post('/sendOtp',SendOTP)
router.post('/verifyOtp',verifyOtp)

router.post('/google',studentLogin)
router.post('/google',aluminiLogin)

export default router
