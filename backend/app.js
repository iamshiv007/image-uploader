const express = require('express')
const app = express()
const env = require("dotenv").config()

app.use(express.json())

const port = process.env.PORT || 13000

app.listen(port, (req, res) => {
    console.log(`Server is Live on http://localhost:${port}`)
})

// Databse
const connect = require('./database/connnect')
connect()

// Routes
const router = require('./route/router')
app.use("/api", router)

// Test 
app.get("/", (req, res) => {
    res.send("Test Success")
})