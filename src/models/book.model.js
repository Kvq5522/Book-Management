'use strict';

const mongoose = require('mongoose');
const { Schema, Model, Types } = mongoose;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        ref: 'Author',
    },
    category: {
        type: String,
        ref: 'Category',
    },
    quantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

bookSchema.post('save', async (doc, next) => {   
    const { Author } = require('./author.model');
    const { Category } = require('./category.model');
 
    try {
        await Author.findOneAndUpdate({ name: doc.author }, { $inc: { products: 1 } }, { new: true })
        await Category.findOneAndUpdate({ name: doc.category }, { $inc: { products: 1 } }, { new: true })
        next();
    } catch (e) {
        next(e);
    }
});

bookSchema.post('findOneAndDelete', async (doc, next) => {
    const { Author } = require('./author.model');

    try {
        await Author.findOneAndUpdate({ name: doc.author, products: { $gte: 1 } }, { $inc: { products: -1 } }, { new: true })
        next();
    } catch (e) {
        next(e);
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = {
    bookSchema,
    Book
}