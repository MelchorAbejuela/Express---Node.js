const express = require('express')
const router = express.Router()

// define the route for index.html
router.post('/', (req, res) => {
    const { food } = req.body
    if (food) {
        res.status(201).send(`A ${food}, nice food!`)
    } else {
        return res.status(400).send('Please provide food.')
    }
})

module.exports = router