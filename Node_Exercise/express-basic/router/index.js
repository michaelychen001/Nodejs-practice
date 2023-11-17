const express = require('express')

const router = express.Router()

// console.log(router)

router.get('/', (req, res, next) => {
    res.send('hello')
    next()
})

router.get('/index', (req, res, next) => {
    const query = req.query
    // console.log(query)
    res.json(query)
})

module.exports = router