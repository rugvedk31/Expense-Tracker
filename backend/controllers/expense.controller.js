import { Expense } from "../models/expense.model.js";

// add expense
export const addExpense = async (req, res)=> {
    try {

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

// get all expenses
export const getAllExpenses = async (req, res)=>{
    try {
        const userId = req.id;  // current logged in user id
        let category = req.query.category || "";
        const done = req.query.category || "";

        const query = {
            userId  // filter by userId
        }
         if(category.toLowercase() === "all")
         {
            // no need to filter by category
         }
         else{
            query.category = {$regex:category,$options:'i'};
         }
         if(done.toLowercase() === "done")
         {
            query.done = true;
         }
         else if(done.toLowercase() === "undone")
         {
            query.done = false  //filter for expense mark as a pending
         };

         const expense = await Expense.find(query)
         if(!expense || expense.length ===0)
         {
            return res.status(404).json({
                message : "No expense found.",
                success : false
            });
         }
         return res.status(200).json({
            expense,
            success : true
         });
    } catch (error) {
        console.log(error);
        
    }
}

// Mark as done and undone
export const markAsDoneOrUndone = async (req, res) =>{
    try {
        const expenseId = req.params.id;
        const done = req.body;
        const expense = await Expense.findByIdAndUpdate(expenseId, done, {new:true});

        if(!expense)
        {
            return res.status(404).json({
                message : "Expense not found.",
                success : false
            });
        }
        return res.status(200).json({
            message : `Expense mark as ${expnese.done ? 'done' : 'undone'}.` ,
            success : true
        })
    } catch (error) {
        console.log(error);
        
    }
}


// remove expense
export const removeExpense = async(req, res)=>{
    try {
        const expenseId = req.params.id;
        await Expense.findByIdAndDelete(expenseId);

         return res.status(200).json({
            message : "Expense removed.",
            success : true
        })

    } catch (error) {
        console.log(error);
        
    }
}


// update expense
export const updateExpense = async(req,res)=>{
    try {
        const {description, amount, category} = req.body;

        const expenseId = req.params.id;
        const updateData = {description, amount, category};

        const expense = await Expense.findByIdAndUpdate(expenseId, updateData,{new : true});
        return res.status(200).json({
            message : "Expense Updated.",
            expense,
            success : true
        })

    } catch (error) {
        console.log(error);
        
    }
}