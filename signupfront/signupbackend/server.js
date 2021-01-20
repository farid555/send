const express = require('express')
const app = express()
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
//const bodyParser = require('body-parser')
const cors = require('cors')



dotenv.config()

mongoose.connect(process.env.MONGOOSE_DATA,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("mongoose is connected...".yellow.inverse))


app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000, () => console.log("Server is running...".yellow.inverse))