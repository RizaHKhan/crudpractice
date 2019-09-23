const express = require('express')
const crudController = require('./controller/crudcontroller')
const router = express.Router()

//home page
router.get('/', crudController.home)
router.post('/delete-me', crudController.deleteItem)
router.post('/add-item', crudController.addItem)
router.post('/update-item', crudController.updateItem)

module.exports = router