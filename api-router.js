const router = require('express').Router();

router.get('/', (req, res) => {
	res.sendFile('index.html', {root: 'dist/angular-cardealer/'});
});

const carsController = require('./carsController');

router.route('/api/cars')
	.get(carsController.index);

router.route('/api/cars/:cars_id')
	.get(carsController.view);

router.get('*', (req, res) => {
	res.send("Custom requests not allowed, make sure the address ends with .com and nothing else.");
});

module.exports = router;
