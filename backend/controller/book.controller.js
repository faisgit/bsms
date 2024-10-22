import Book from "../model/books.model";

export const getAllBooks = async(req, res) => {
    try {
            const books = await Book.find({});
            res.status(200).json({
              sucess: true,
              data: books,
            });
          } catch (error) {
            console.error(`Error in fetch products : ${error.message}`);
          }
}

export const addBook =  async (req, res) => {
    const book = req.body;
  
    if (!book.name || !book.author || !book.price) {
      return res.status(400).json({
        sucess: false,
        message: "Please Provide all fields",
      });
    }
  
    const newBook =  new Book(book)
  
  
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
  }


export const deleteBook = async (req, res) => {
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
}

export const updateBook =   async (req, res) => {
    const {id} = req.params
    const book = req.body;
    try {
        const updateBook = await Book.findByIdAndUpdate(id, book,{
            new : true,
        })

        res.status(200).json({
            success : true,
            data : updateBook
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Server Error"
        })
    }
}