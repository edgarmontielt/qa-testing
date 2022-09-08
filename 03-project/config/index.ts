const path = require("path")
const env = process.env.NODE_ENV

require('dotenv').config({
    path: path.join(__dirname, '..', `.env.${env}.local`)
})

module.exports = {
    port: process.env.PORT,
    message: process.env.MESSAGE
}