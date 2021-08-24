const bodyParser = require('body-parser')
const path = require('path')
const express = require('express')
const connectDataBase = require('./db/mongoConnection')
const app = express()
const route = express.Router()

const PORT = 8081

app.use(bodyParser())
app.use(express.static(path.join(__dirname, "../" ,"build")))
const startApplication = () => {
    connectDataBase(() => {
        const userRoute = require('./controllers/user')
        route.use('/api/user', userRoute)
        app.use(route)
        app.get('*', (req,res) =>{
            res.sendFile(path.join(__dirname, "../" ,"build", "index.html"));
        });
        app.listen(PORT, () => {
            console.log('Server is running on port', PORT)
        })
    })
}

module.exports = startApplication
