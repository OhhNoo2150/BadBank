require("dotenv").config()
const express = require('express')

const {
    PORT = 3001
} = process.env

const app = express()

app.use(express.static("../frontend/build"))

app.listen(PORT, () => {
    console.log("Server listening on port " + PORT)
})