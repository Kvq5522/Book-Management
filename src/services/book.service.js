'use strict';

const { Book } = require('../models/book.model');

class AccessService {
    static getBookList = async () => {
        const bookList = await Book.find().catch((error) => {
            console.log(error);
            return null;
        });

        return bookList;
    }

    static addBook = async (name, category, author, quantity, price) => {
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
    
    static searchBook = async (content="") => {
        return await Book.aggregate([
            {
              $match: {
                $or: [
                    { name: { $regex: content, $options: 'i' } },
                    { category: { $regex: content, $options: 'i' } },
                    { author: { $regex: content, $options: 'i' } },
                ],
              },
            },
        ]).catch((error) => {
            console.log(error);
            return null;
        });
    };

    static editBook = async (oldName, name, category, author, quantity, price) => {
        let updateInfo = {};

        const fieldsToUpdate = [
            { key: 'name', value: name },
            { key: 'category', value: category },
            { key: 'author', value: author },
            { key: 'quantity', value: quantity },
            { key: 'price', value: price },
        ];
        
        for (const field of fieldsToUpdate) {
            if (field.value) {
                updateInfo[field.key] = field.value;
            }
        }

        return Book.findOneAndUpdate({ name: oldName }, updateInfo, { new: true }).catch((error) => {
            console.log(error);
            return null;
        });
    }

    static deleteBook = async (name) => {
        return await Book.findOneAndDelete({ name: name }).catch((error) => {
            console.log(error);
            return null;
        });
    }
}

module.exports = AccessService;