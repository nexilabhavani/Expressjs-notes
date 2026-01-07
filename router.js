import { userlogin,usersignup} from './control.js';
import express from 'express';

const router=express.Router()
router.get('/login',userlogin)
router.get('/signup',usersignup)

export default router



