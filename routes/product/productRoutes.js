const express = require("express");
const router = express.Router();
const { index, store, show, update, destroy } = require('../../controllers/productController')

router.route('/').get(index).post(store) 
router.route('/:id').get(show).put(update).delete(destroy)   

// router.route('/')

router.route('/:id').get(show).put(update).delete(destroy)  
// router.route('/:id') 
// router.route('/:id')

module.exports = router;