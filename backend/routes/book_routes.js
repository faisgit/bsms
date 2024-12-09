import express from "express"
import { addBook, deleteBook, getAllBooks, updateBook } from "../controller/book.controller";

const router = express.Router();
router.get("/", getAllBooks)
router.post("/",addBook)
router.put("/:id", updateBook)
router.delete("/:id", deleteBook)

export default router