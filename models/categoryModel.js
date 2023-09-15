const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
  {
    index: { type: Number, require: true, default: 0 },
    name: { type: String, require: [true, 'please enter the product name'] },
    path: { type: String, require: true, default: '/' },
    image: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

/*
___1. model('Categories', categorySchema) ==> in Atlas "Categories" is converted to "categories" and becomes a name of collection;
___2. when I started http.POST with "Product" all records went to collection named "products"; after change, new collection was created automatically... 
*/
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
