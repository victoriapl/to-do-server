const express = require('express')
const router  = express.Router()
const toDo = require('../models/ToDo')

/* GET home page */

router.post('/add', (req, res, next) =>{
  toDo.create(req.body)
  .then(data => res.status(200).json(data))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

router.get('/', (req, res, next) => {
  toDo.find(req.body)
  .then(data => res.status(200).json(data))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

router.post('/', (req, res, next) => {
  toDo.findOneAndRemove(req.body._id)
  .then(data => res.status(200).json(data))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

module.exports = router
