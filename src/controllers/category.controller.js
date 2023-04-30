'use strict';

const { addCategory, deleteCategory, searchCategory } = require('../services/category.service')

class CategoryController {
    addCategory = async (req, res, next) => {
        const { name, description } = req.body;

        const category = await addCategory(name, description);

        return category ? res.status(200).json({
            message: 'Add category successfully',
            metadata: category
        }): res.status(400).json({
            message: 'Add category failed'
        });
    }

    editCategory = async (req, res, next) => {
    }

    deleteCategory = async (req, res, next) => {
        const { name } = req.body;

        const category = await deleteCategory(name);

        return category ? res.status(200).json({
            message: 'Delete category successfully',
        }): res.status(400).json({
            message: 'Delete category failed'
        });
    }

    searchCategory = async (req, res, next) => {
        const { content } = req.body;

        const categories = await searchCategory(content);

        return categories ? res.status(200).json({
            message: 'Search category successfully',
            metadata: categories
        }): res.status(400).json({
            message: 'Search category failed'
        });
    }
}

module.exports = new CategoryController();