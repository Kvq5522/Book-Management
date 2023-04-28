'use strict';

const { Book } = require('../models/book.model');

class AccessService {
    static async getBookList() {
        const bookList = await Book.find();

        return bookList;
    }

    static async addBook(name, category, author, quantity, price) {
        try {
            const book = await Book.create({
                name: name,
                category: category,
                author: author,
                quantity: quantity,
                price: price
            });
    
            return book ? book : null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

module.exports = AccessService;