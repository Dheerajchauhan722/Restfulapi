const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/studentsapi",
{
     useNewUrlParser: true, 
     useUnifiedTopology: true ,
     useCreateIndex:true,
     useFindAndModify:false
}).then(()=>console.log("connection successfull....")).catch((err)=>console.log("No connection"));
    