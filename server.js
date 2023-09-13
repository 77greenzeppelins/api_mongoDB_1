// console.log('test.....');
/*
___1.to create this const some special package named 'express' is required ==> it is taken from express library ==> go to node_modules and look for express folder
*/
const express = require('express');
const app = express();
const port = 3000;

/*
___1. lets create rout
*/
app.get('/', (req, res) => {
  //___why we focus on res? ==> res is the staff we want to send to client (browser)
  res.send('hello on rout: / ');
});

//___hi server, just listen to this port
app.listen(port, () => {
  console.log('Express is running!');
});
