const Category = require('../models/categoryModel');
/*
___1. solve problem between controllers and error middleware
*/
const asyncHandler = require('express-async-handler');

//___create record
const createCategory = asyncHandler(async (req, res) => {
  // console.log(req.body);
  // res.send(req.body);
  try {
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(500);
    throw new Error(error.messaga);
    //__version before asyncHandler
    // res.status(500).json({ message: error.message });
  }
});

//__fetchAllCategories
const fetchAllCategories = asyncHandler(async (req, res) => {
  try {
    const category = await Category.find({});
    res.status(200).json(category);
  } catch (error) {
    res.status(500);
    throw new Error(error.messaga);
    //__version before asyncHandler
    // res.status(500).json({ message: error.message });
  }
});

//__fetchCategory
const fetchCategory = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(500);
    throw new Error(error.messaga);
    //__version before asyncHandler
    // res.status(500).json({ message: error.message });
  }
});

const updateCategory = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    //___second parameter includes data we want to send to update
    const category = await Category.findByIdAndUpdate(id, req.body);
    //___in case user / dev typed id doesn't exist
    if (!category) {
      return res
        .status(404)
        .json({ message: `we cannot find product with id ${id}` });
    }
    //___such update is required
    const updatedItem = await Category.findById(id);
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500);
    throw new Error(error.messaga);
    //__version before asyncHandler
    // res.status(500).json({ message: error.message });
  }
});

const delateCategory = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      res.status(404);
      throw new Error(`we cannot find any product with id ${id}`);
      // res.status(404).json({ message: `we cannot find any product with id ${id}` });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500);
    throw new Error(error.messaga);
    //__version before asyncHandler
    // res.status(500).json({ message: error.message });
  }
});

module.exports = {
  createCategory,
  fetchAllCategories,
  fetchCategory,
  updateCategory,
  delateCategory,
};

// const createProduct = async (req, res) => {
//   //___to send data to datadase we have to use model
//   const product = await Product.create(req.body);
//   res.status(200).json(product);
//   try {
//   } catch (error) {
//     console.log(`error on product route ${error}`);
//     res.status(500).json({ message: error.message });
//   }
// };
