import express from 'express'
import commonDashBoardResponse from "../fetch_and_post/fetchResponses/commonDashboardResponse.js"
import batchDepDashboard from '../fetch_and_post/fetchResponses/batchDepDashboard.js';
const router = express.Router();

router.get('/',commonDashBoardResponse)
router.get('/bybatchandDepartment',batchDepDashboard)

export default router