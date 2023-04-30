'use strict';

const { Category } = require('../models/category.model');

class CategoryService {
    static getCategoryList = async () => {
        return await Category.find().catch((err) => { return null; });
    }

    static addCategory = async (name, description) => {
        return await Category.create({
            name: name,
            description: description
        }).catch((err) => { return null; });
    }

    static deleteCategory = async (name) => {
        return await Category.findOneAndDelete({ name: name }).catch((err) => { return null; });
    }

    static searchCategory = async (content) => {
        return await Category.find({ name: { $regex: content, $options: 'i' } }).sort({ products: -1 })
        .catch((err) => { return null; });
    }
}

module.exports = CategoryService;