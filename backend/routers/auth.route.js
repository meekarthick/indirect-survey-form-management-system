import express from "express"
import  {signUp, login}  from '../controllers/employerauth.controller.js';
const router = express.Router()

router.post('/employerSignup',signUp)
router.post('/employerLogin',login)




export default router