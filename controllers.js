const {random} = require('./object');

exports.getLocation = (req, res, next) => {
	console.log('we got a request');
	res.status(200).send({random});
};
