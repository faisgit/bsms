// api/books.js

import express from "express";
import { connectDB } from "../config/db.js"; // Adjust relative paths
import dotenv from "dotenv";
import cors from "cors";
import Book from "../model/books.model.js"; // Adjust relative paths
import serverless from "serverless-http";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    console.error(`Error in fetch products: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.post("/books", async (req, res) => {
  const book = req.body;

  if (!book.name || !book.author || !book.price) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }

  const newBook = new Book(book);

  try {
    await newBook.save();
    res.status(201).json({
      success: true,
      data: newBook,
    });
  } catch (error) {
    console.error("Error in creating product");
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Book.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Book has been deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Book not found",
    });
  }
});

app.put("/books/:id", async (req, res) => {
  const { id } = req.params;
  const book = req.body;
  try {
    const updateBook = await Book.findByIdAndUpdate(id, book, {
      new: true,
    });
    res.status(200).json({
      success: true,
      data: updateBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// Export the wrapped serverless function handler
connectDB(); // Make sure to connect the database when the function is invoked
export const handler = serverless(app);
