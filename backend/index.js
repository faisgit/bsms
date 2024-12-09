import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors"
import Book from "./model/books.model.js";
dotenv.config();
const app = express();

app.use(cors())

app.use(express.json());


app.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({
      sucess: true,
      data: books,
    });
    res.send("Express on vercel")
  } catch (error) {
    console.error(`Error in fetch products ${error.message}`);
  }
})

app.post("/books", async (req, res) => {
  const book = req.body;

  if (!book.name || !book.author || !book.price) {
    return res.status(400).json({
      sucess: false,
      message: "Please Provide all fields",
    });
  }

  const newBook = new Book(book)


  try {
    await newBook.save();
    res.status(201).json({
      sucess: true,
      data: newBook,
    });
  } catch (error) {
    console.error("Error is Created Product");
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await Book.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Product has been Deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Product not found",
    });
  }
})

app.put("/books/:id", async (req, res) => {
  const { id } = req.params
  const book = req.body;
  try {
    const updateBook = await Book.findByIdAndUpdate(id, book, {
      new: true,
    })

    res.status(200).json({
      success: true,
      data: updateBook
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error"
    })
  }
})

app.get("/books/:id", async (req, res) => {
  const {id} = req.params;
  try{
    const book = await Book.findById(id)
    if (book) {
      res.status(200).json({
        success : true,
        data : book
      })
    }
    else{
      res.status(404).json({
        success: false,
        message : "Product not found"
      })
    }
  }
  catch(error){
    console.eeor(`Error in fetching book : ${error.message}`);
  }
})
const port = process.env.PORT || 4000
app.listen(port, () => {
  connectDB();
  console.log("Server Started at : http://localhost:5000");
});