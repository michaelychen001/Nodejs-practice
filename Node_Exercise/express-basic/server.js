const express = require('express')
const app = express()

const router = require('./router/index')

app.use('/', router)

app.listen(3000, ()=>{
    console.log('running on localhost:3000')
})