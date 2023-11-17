const express = require('express')

const app = express()

const middlewares = [(req, res, next) => {
                        // this is the middleware 
                        // res.send('hello')
                        console.log('0')
                        next()
                    }, (req, res, next) => {
                        // res.send('world')
                        console.log('1')
                        next()
                    }, (req, res, next) => {
                        // res.send('world')
                        console.log('2')
                        next()
                    }]

app.use('/', middlewares)

app.use('/api', (req, res) => {
    res.send('hello api')
})

app.listen(3000, () => {
    console.log('localhost:3000')
})