const express = require('express')
const { port, message } = require('./config')
const app = express()

const PORT: number = port | 4000

console.log(message)

app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`)
})

