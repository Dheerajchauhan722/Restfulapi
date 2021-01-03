const express=require("express");
const Student=require("../models/Students");  // we get collection object to insert documents in it


//1.create a new router (we will do all things of app by router)
const router=new express.Router();
//2.we need to define the router

//create a new student and using post from postman we call this post and insert document in student api db
router.post("/students",async(req,res)=>{
    console.log(req.body);
    try{
        const user=new Student(req.body);
        // Student.insertMany([user]); // it returns promise so we must do try and catch or then and catch
        const createUser=await user.save();
        res.status(201).send(createUser); //201 for successful updation
    }
    catch(e){
        res.status(400);
        res.send(e);
    }
})

// get the entire collection if student db in one go
router.get("/students",async(req,res)=>{
    try{
        const studentsData=await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})

// get the individual student data using id
router.get("/students/:id_value",async(req,res)=>{ //  /:param_name   so (/:) treates the previous variables as params
    try{
        const _id=req.params.id_value;
        const studentData=await Student.findById({_id:_id});
        console.log(studentData);
        if(!studentData){
            return res.status(404).send();
        }
        else{
            res.status(500).send(studentData); // 500 internal server error
        }

        
    }catch(e){
        res.send(e);
    }
})

//update the student info
router.patch("/students/:id_value",async(req,res)=>{
    try{
        const _id=req.params.id_value;
        console.log(_id);
        const updatestudent=await Student.findByIdAndUpdate({_id:_id},req.body,{
            new:true
        });
        console.log(updatestudent);
        res.send(updatestudent);
        
        
    }catch(e){
        res.status(400).send(e);
    }
})

//delete the student data
router.delete("/students/:id_value",async(req,res)=>{
    try{
        const _id=req.params.id_value;
        const deletestudent=await Student.findByIdAndDelete({_id:_id});
        
        if(!_id){
            return res.status(404).send();
        }
        res.send(deletestudent);
        
    }catch{
        res.send(e).status(500);
    }
})

module.exports=router;