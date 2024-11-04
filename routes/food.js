const express = require('express')
const router = express.Router()

// for javascript.html
const { getFoodList, postFoodList, putFoodList, deleteFoodList } = require('../controller/food')

router.get('/', getFoodList)

router.post('/', postFoodList)

router.put('/:id', putFoodList)

router.delete('/:id', deleteFoodList)

module.exports = router