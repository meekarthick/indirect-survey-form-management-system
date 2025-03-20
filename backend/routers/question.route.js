import express from "express"
import  fetchUserQuestions  from "../fetch_and_post/fetchUserQuestions.js";
import { sumbmitResponse } from "../fetch_and_post/submitResponse.js";

const router = express.Router();

router.get('/:role/:department?',fetchUserQuestions)

router.post('/submitresponse',sumbmitResponse)

export default router