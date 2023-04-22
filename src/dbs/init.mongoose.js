'use strict'

const mongoose = require('mongoose');
const {app, db, environment} = require('../config/config.mongodb');

class Database {
    constructor() {
        this.connect();
    }

    connect(type="mongodb") {
        if (environment === 'dev') {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true});
        }

        mongoose
            .connect(`${type}://${db.host}:${db.port}/${db.name}`)
            .then(() => {
                console.log(`Connected to ${db.name} database`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}

const mongodbInstance = Database.getInstance();
module.exports = mongodbInstance;


