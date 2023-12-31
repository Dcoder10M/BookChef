const Book = require("../model/Book");

const getAllBooks=async(req,res,next)=>{
    let books;
    try{
        books=await Book.find();
    }catch(err){
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message: "No products found"});
    }
    return res.status(200).json({books});
}


//just for reference if i was able to find the book by id or not
const getById=async(req,res,next)=>{
    const id=req.params.id;
    let book;
    try{
        book=await Book.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({messgae:"NO Book found"})
    }
    return res.status(200).json({book});
}

const addBook=async(req,res,next)=>{
    const {name,author,description,price,available,image}=req.body;
    let book;
    try{
        book=new Book({
            name,author,description,price,available,image
        });
        await book.save();
    }catch(err){
        console.log(err);
    }
    //we will get this response on postman
    if(!book){
        return res.status(500).json({messgae:"Unable to Add"})
    }
    return res.status(201).json({book});
}

const updateBook=async(req,res,next)=>{
    //taking is from url
    const id=req.params.id;
    const {name,author,description,price,available,image}=req.body;
    let book;
    try{
        book=await Book.findByIdAndUpdate(id,{
            name,author,description,price,available,image
        });
        book=await book.save();
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({messgae:"Unable to Update"})
    }
    return res.status(200).json({book});
}

const deleteBook=async(req,res,next)=>{
    const id=req.params.id;
    let book;
    try{
        book=await Book.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"Unable to Delete"})
    }
    return res.status(200).json({message:"Product Succesfully Deleted"});
}

exports.getAllBooks=getAllBooks;
exports.addBook=addBook;
exports.getById=getById;
exports.updateBook=updateBook;
exports.deleteBook=deleteBook;