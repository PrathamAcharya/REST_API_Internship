const asynchandler = require("express-async-handler");            //-----------handles async errors without try catch blocks
const Book = require("../models/bookmodel");

//@desc Get all contacts
//@route Get /api/book
//access private                                                                   // for all the other CRUD operations

const getbook = asynchandler(async (req, res) => {
    const books = await Book.find();    
    res.status(200).json(books);                                      
});

//@desc Get contact for id
//@route Get /api/contact/:id
//access private

const getbookbyid = asynchandler(async (req, res) => {
    try{

        const book = await Book.findById(req.params.id);
        if(!book){
            res.status(404);
            throw new Error("Book not found");
        }
        res.status(200).json(book);
        }
        catch(err){
            res.status(500).json({message: err.message})
        }
});

//@desc Create new contact
//@route Post /api/contact
//access private

const createbook = asynchandler(async (req, res) => {
    console.log(req.body);
    try{

        const {name, img, summary} = req.body;
        if(!name || !img || !summary){
            res.status(400);
            throw new Error("All fields are mandatory");
        }
        const book = await Book.create({
            name,
            img,
            summary
        });
        res.status(201).json(book);
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
});

//@desc Update contact
//@route Put /api/contact/:id
//access private

const updatebook = asynchandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if(!book){
        res.status(404);
        throw new Error("Book not found");
    }

    const updatedbook = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.status(200).json(updatedbook);
});

//@desc Delete contact
//@route Delete /api/contact/:id
//access private

const deletebook =  asynchandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if(!book){
        res.status(404);
        throw new Error("Book not found");
    }

    await Book.deleteOne(book);
    res.status(200).json(book);
});

module.exports = {getbook, getbookbyid, createbook, updatebook, deletebook};