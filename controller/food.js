const foodList = require('../post-form/food-data')

const getFoodList = (req, res) => {
    res.status(200).json({ success: true, data: foodList })
}

const postFoodList = (req, res) => {
    const { food } = req.body
    if (food) {
        res.status(201).json({ success: true, data: food })
    } else {
        return res.status(400).send({ success: false, msg: 'Please provide value' })
    }
}

const putFoodList = (req, res) => {
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

}

const deleteFoodList = (req, res) => {
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
}

module.exports = { getFoodList, postFoodList, putFoodList, deleteFoodList }