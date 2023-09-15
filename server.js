// console.log('test.....');
/*
___1. comes from dotenv module; allows using data from .env file
*/
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
const PORT_NUMBER = process.env.PORT_NUMBER || 3000;
/*
___1.to create this const some special package named 'express' is required ==> it is taken from express library ==> go to node_modules and look for express folder
*/
const express = require('express');
/*
___1. "imports" router for '/api/categories';
___2. requires middlewere to work;
*/
const categoriesRoute = require('./routes/categoriesRoute');

const errorMiddleware = require('./middleware/errorMiddleware');

/**----------------------------------------------------------------------------**/
/*
___1. starts server app
*/
const app = express();
/*
___1. middleware ==> allows using json 
*/
app.use(express.json());
/*
___1. middleware ==> allows using form
*/
app.use(express.urlencoded({ extended: false }));
/*
___1. middleware ==> allows using productRoute
*/
app.use('/api/categories', categoriesRoute);
/*
___1. middleware ==> allows using errorMiddleware
*/
// app.use(errorMiddleware);
/*
___1. lets create testing rout
*/
app.get('/', (req, res) => {
  //___why we focus on res? ==> res is the staff we want to send to client (browser)
  res.send('hello on root rout');
  // throw new Error('fake error');
});

/*
___1. middleware ==> allows using errorMiddleware
___2. its position matters; should be near the code bottom
*/
app.use(errorMiddleware);

/*
___1. mongoose staff is necessary to connect to batadase in convenient way
"mongodb+srv://77objects:77%40password@cluster0.ckwscdp.mongodb.net/?retryWrites=true&w=majority"
*/
const mongoose = require('mongoose');
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('mongoose have made connection to mongoDB');
    //___hi server, just listen to this port
    app.listen(PORT_NUMBER, () => {
      console.log('Express is listening...Server works!');
    });
  })
  .catch(err => {
    console.log(`error from mongoose.connect(): ${err}`);
  });

//___hi server, just listen to this port
// app.listen(port, () => {
//   console.log('Express is listening!');
// });

//___create record in database / collection
// app.post('/api/categories', async (req, res) => {
//   // console.log(req.body);
//   // res.send(req.body);
//   try {
//     const category = await Category.create(req.body);
//     res.status(200).json(category);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//___fetch all records from database / collection
// app.get('/api/categories', async (req, res) => {
//   try {
//     const category = await Category.find({});
//     res.status(200).json(category);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//___fetch one record from database / collection
// app.get('/api/categories/:id', async (req, res) => {
//   try {
//     //___destructur id from params
//     const { id } = req.params;
//     const category = await Category.findById(id);
//     res.status(200).json(category);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//___update item in database
// app.put('/api/categories/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     //___second parameter includes data we want to send to update
//     const category = await Category.findByIdAndUpdate(id, req.body);
//     //___in case user / dev typed id doesn't exist
//     if (!category) {
//       return res
//         .status(404)
//         .json({ message: `we cannot find product with id ${id}` });
//     }
//     //___such update is required
//     const updatedItem = await Category.findById(id);
//     res.status(200).json(updatedItem);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//___delate item in database
// app.delete('/api/categories/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const category = await Category.findByIdAndDelete(id);
//     if (!category) {
//       res
//         .status(404)
//         .json({ message: `we cannot find any product with id ${id}` });
//     }
//     res.status(200).json(category);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
