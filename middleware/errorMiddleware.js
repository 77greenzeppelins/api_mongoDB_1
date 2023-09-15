/*
___1. how this function can access 4 parameters?
___2. we use it in server.js in this paradigh: app.use(errorMiddleware)
*/
const errorMiddleware = (err, req, res, next) => {
  console.log(`...errorMiddleware takes controll over errors`);
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : null,
  });
};

module.exports = errorMiddleware;
