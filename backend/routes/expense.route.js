import express from "express";
import { addExpense } from "../controllers/expense.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/addExpense").post(isAuthenticated,addExpense); //next

export default router;