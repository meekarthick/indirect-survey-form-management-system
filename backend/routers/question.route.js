import express from "express"
import  fetchUserQuestions  from "../fetch_and_post/fetchUserQuestions.js";

const router = express.Router();

router.get('/:role/:department?',fetchUserQuestions)

export default router