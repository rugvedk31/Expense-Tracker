import { Expense } from "../models/expense.model.js";
export const addExpense = async (req, res)=> {
    try {

        // Expense create
        const {description,amount,category} = req.body;
        const userId = req.id;  // current logged in user id
        if(!description || !amount || !category)
        {
            return res.status(401).json({
                message: "All fields are required.",
                status:false
            })
        }
        const expense = await Expense.create({
            description,
            amount,
            category,
            userId
        });
        return res.status(201).json({
            message:"New expense added.",
            expense,
            status : true
        })

    } catch (error) {
        console.log(error);
        
    }
}