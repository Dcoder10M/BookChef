const express=require('express');
const app=express();
const mongoose=require('mongoose');



const router =require("./routes/book-routes");
const cors=require('cors');

//Middlewares

//server  dont know the type of data it will receive .... this will allow to pass the data in json format across the application
app.use(express.json());
//middleware: function run karne se phele san check karne ka kaam iska
//3 parameter leta hai ye
//(req,res,next)
//agar next() call hoga tabhi aage badega varna nahi badega
//cors policy... cross origin resource sharing
app.use(cors());
//routing to router object
app.use('/books',router)


//mongoose ka purana version use kar rahe hai isliye
mongoose.set("strictQuery", false);

mongoose.connect(
    "mongodb+srv://admin:kB3HQVQQRL7A01qp@cluster0.qs5g4kh.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log("Connected To Database")).then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err));














