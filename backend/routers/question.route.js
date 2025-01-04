import express from "express"
import { fetchQuestions } from "../fetch_and_post/fetchUserQuestions.js";

const router = express.Router();

router.get('/:role/:department?',fetchQuestions)

export default router