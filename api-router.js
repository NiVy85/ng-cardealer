const router = require('express').Router();

router.get('/', (req, res) => {
	res.sendFile('index.html', {root: 'dist/angular-cardealer/'});
});

router.get('*', (req, res) => {
	res.send('Your request: ' + req + ' is not allowed! Redirecting...');
	setTimeout(() => {
		res.sendFile('index.html', {root: 'dist/angular-cardeal'});
	}, 5000);
});

const carsController = require('./carsController');

router.route('/api/cars')
	.get(carsController.index);

router.route('/api/cars/:cars_id')
	.get(carsController.view);

module.exports = router;
