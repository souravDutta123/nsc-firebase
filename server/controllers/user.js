const mongoose = require('mongoose')
const User = mongoose.model('User')

const userRoute = require('express').Router()

userRoute.get('/', (req, res) => {
    User.find({}, '-_id -__v', (err, records) => {
        if(err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            res.json(records)
        }
        
    })
})

userRoute.post('/', (req, res) => {
    const userData = req.body
    console.log(userData);
    const user = new User(userData)
    user.save((err) => {
        console.log(err)
        res.sendStatus(200)
    })
})

module.exports = userRoute
