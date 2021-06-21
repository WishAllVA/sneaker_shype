const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.get('/', (req, res) => {
    res.send("Welcome to sneakershype")
})

app.listen(PORT, () => { console.log(`App started on port ${PORT}`) })