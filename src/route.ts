import { Router } from "express";
import User from "./Controller/UserController";
const router = Router();

router.get("/", User.index)
router.post("/create", User.create)

export default router