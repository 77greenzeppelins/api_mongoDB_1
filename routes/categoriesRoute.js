const express = require('express');
const Category = require('../models/categoryModel');
const {
  createCategory,
  fetchAllCategories,
  fetchCategory,
  updateCategory,
  delateCategory,
} = require('../controllers/productController');

const router = express.Router();

//___create record in database / collection
router.post('/', createCategory);

//___fetch all records from database / collection
router.get('/', fetchAllCategories);

//___fetch one record from database / collection
router.get('/:id', fetchCategory);

//___update item in database
router.put('/:id', updateCategory);

//___delate item in database
router.delete('/:id', delateCategory);

/*
___1. in server.js this route is required
___2. we cen required it under any name we want; "categoriesRout"
*/
module.exports = router;
