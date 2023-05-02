"use strict";

const { getBookList } = require("../services/book.service");
const { getAuthorList } = require("../services/author.service");
const { getCategoryList } = require("../services/category.service");

class RenderController {
    getSignIn = async (req, res) => {
        res.render('signIn');
    }

    getForgetPassword = async (req, res) => {
        res.render('forgetPassword');
    }

    getRecoverPassword = async (req, res) => {
        const { id } = req.params;
        res.render('recoverPassword', { userId: id });
    }

    getDashboard = async (req, res) => {
        res.render('dashboard');
    }

    getBookPage = async (req, res) => {
        res.render('dashboardBook', 
        { bookList: await getBookList(),
          authorList: await getAuthorList(),
          categoryList: await getCategoryList() 
        });
    }
    
    getCategoryPage = async (reg, res) =>{
        res.render('dashboardCategory', {categoryList: await getCategoryList()})
    }

    getAuthorPage = async (reg, res) =>{
        res.render('dashboardAuthor', { authorList: await getAuthorList() });
    }
}

module.exports = new RenderController();