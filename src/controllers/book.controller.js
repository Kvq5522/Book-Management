'use strict';

const { addBook, getBookList } = require('../services/book.service');

class BookController {
    getBook = async (req, res, next) => {
        
    }

    addBook = async (req, res, next) => {
        const { name, category, author, quantity, price } = req.body;

        console.log(name, category, author, quantity, price);

        const book = await addBook(name, category, author, quantity, price);

        if (book) {
            res.status(200).json({
                message: 'Add book successfully',
                book: book
            });
        } else {
            res.status(500).json({
                message: 'Add book failed'
            });
        }
    }
}

module.exports = new BookController();