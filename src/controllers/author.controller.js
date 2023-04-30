'use strict';

const { Author } = require('../models/author.model');
const { addAuthor, deleteAuthor, editAuthor, searchAuthor} = require('../services/author.service')

class AuthorController {
    addAuthor = async (req, res, next) => {
        const { name } = req.body;

        const author = await addAuthor(name);

        return author ? res.status(200).json({ 
            message: 'Add author successfully' 
        }) : res.status(400).json({ message: 'Add author failed' });
    }

    deleteAuthor = async (req, res, next) => {
        const { name } = req.body;

        const author = await deleteAuthor(name);

        return author ? res.status(200).json({ 
            message: 'Delete author successfully' }) :
        res.status(400).json({ message: 'Delete author failed' });
    }

    editAuthor = async (req, res, next) => {
        const { oldName, name } = req.body;

        const author = await editAuthor(oldName, name);

        return author ? res.status(200).json({
            message: 'Edit author successfully',
            metadata: author
        }) : res.status(400).json({ message: 'Edit author failed' });

    }

    searchAuthor = async (req, res, next) => {
        const { content } = req.body;

        const authors = await searchAuthor(content);

        return authors ? res.status(200).json({
            message: 'Search author successfully',
            metadata: authors
        }) : res.status(400).json({ message: 'Search author failed' });
    }
}

module.exports = new AuthorController;