const mongoose = require('mongoose')
const MONGO_CONNECTION_URL = 'mongodb://localhost:27017/quiz'

const connectDataBase = callback => {
    mongoose.connect(MONGO_CONNECTION_URL, err => {
        if (err) {
            console.error(err)
            throw new Error('Mongo connection failed.')
        }
        console.log(err)
        console.log('Database connection established!!');
        require('../models/user')
        callback()
    })
}

module.exports = connectDataBase
