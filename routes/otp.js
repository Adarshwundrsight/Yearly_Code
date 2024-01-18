import express from "express"
import {generateotp,matchOTP,getAll} from "../controller/otp.js"

const router=express.Router();


router.post('/get',generateotp);
router.post('/verify',matchOTP);
    

export default router;