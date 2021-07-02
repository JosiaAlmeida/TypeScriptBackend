import { Router } from "express";
import User from "./Controller/UserController";
const router = Router();

router.get("/", User.index)
router.get("/create", User.create)

export default router