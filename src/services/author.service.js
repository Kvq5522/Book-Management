'use strict';

const { Author } = require('../models/author.model');
const { Book } = require('../models/book.model');

class AuthorService {
    static getAuthorList = async () => {
        return await Author.find().catch((err) => { return null });
    }

    static addAuthor = async (name) => {
        return await Author.create({ name }).catch((err) => { return null });
    }

    static deleteAuthor = async (name) => {
        return await Author.findOneAndDelete({ name: name }).catch((err) => { return null });
    }

    static searchAuthor = async (name) => {
        return await Author.find({name: { $regex: content, $options: 'i' }}).catch((err) => {return null});
    }

    static editAuthor = async (oldName, name) => {
        if (oldName == name) {
            return await Author.findOne({ name: name }).catch((err) => { return null });
        }

        await Book.updateMany({ author: oldName }, { author: name }).catch((err) => { return null });

        return await Author.findOneAndUpdate({ name: oldName }, {name: name}).catch((err) => { return null });
    }

    static searchAuthor = async (name) => {
        return Author.find({ name: { $regex: name, $options: 'i' } }).catch((err) => { return null });
    }
}

module.exports = AuthorService;