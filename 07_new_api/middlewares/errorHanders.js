const logErrors = (error, req, res, next) => {
	console.log("Se ejecuto logErrors");
	console.error(error);
	next(error);
  };
  
  const errororHandler = (error, req, res, next) => {
	res.status(500).json({
	  error,
	});
  };
  
  module.exports = { logErrors, errorHandler };