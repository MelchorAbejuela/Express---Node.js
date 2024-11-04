const express = require('express')
const app = express()

app.use(express.static('./post-form'))
app.use(express.urlencoded({ extended: true })) // parse the data that was send by a form
app.use(express.json())

const food = require('./routes/food')
const auth = require('./routes/auth')

app.use('/api/foodlist', food)
app.use('/login', auth)

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})