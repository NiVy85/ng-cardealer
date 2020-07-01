const mongoose = require('mongoose');

const carsSchema = mongoose.Schema({
	regnr: {
		type: String,
		required: true
	},
	modell: {
		type: String,
		required: true
	},
	img: {
		type: String,
		required: true
	}
});

let Cars = module.exports = mongoose.model('cars', carsSchema);

module.exports.get = (callback, limit) => { Cars.find(callback).limit(limit)};

