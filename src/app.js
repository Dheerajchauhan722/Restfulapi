const express =require("express");
const app=express(); // to use express like a object
const port=process.env.PORT || 8000;  // to use any port and by default 8000
require("./db/conn");
const Student=require("./models/Students");  // we get collection object to insert documents in it
const studentRouter=require("./routers/student"); // importing the initialised router

app.use(express.json())// to get the send json request from postmen

//3. we need to register our router
app.use(studentRouter);  // we are using the router created in student.js file

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})







