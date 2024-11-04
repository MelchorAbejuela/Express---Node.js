const express = require('express')
const app = express()

app.use(express.static('./post-form'))
app.use(express.urlencoded({ extended: true })) // parse the data that was send by a form
app.use(express.json())

// define the route for index.html
app.post('/login', (req, res) => {
    const { food } = req.body
    if (food) {
        res.status(201).send(`A ${food}, nice food!`)
    } else {
        return res.status(400).send('Please provide food.')
    }
})

// for javascript.html
const foodList = require('./post-form/food-data')
app.get('/api/foodlist', (req, res) => {
    res.status(200).json({ success: true, data: foodList })
})

app.post('/api/foodlist', (req, res) => {
    const { food } = req.body
    if (food) {
        res.status(201).json({ success: true, data: food })
    } else {
        return res.status(400).send({ success: false, msg: 'Please provide value' })
    }
})

app.put('/api/foodlist/:id', (req, res) => {
    const { id } = req.params
    const { food } = req.body

    const foodMaching = foodList.find((food) => food.id === Number(id))

    if (!foodMaching) {
        return res.status(404).json({ success: false, msg: `Cannot find food with ${id}` })
    }
    const updatedFoodList = foodList.map((foodObj) => {
        if (foodObj.id === Number(id)) {
            foodObj.food = food
        }
        return foodObj
    })
    res.status(200).json({ success: true, data: updatedFoodList })

})

app.delete('/api/foodlist/:id', (req, res) => {
    const machingFood = foodList.find((food) => food.id === Number(req.params.id))
    if (!machingFood) {
        return res.status(400).json({ success: false, msg: `Cannot find item with id ${req.params.id}` })
    }
    const updatedFoodList = foodList.filter((food) => {
        if (food.id !== Number(req.params.id)) {
            return food
        }
    })
    res.status(200).json({ success: true, data: updatedFoodList })
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})