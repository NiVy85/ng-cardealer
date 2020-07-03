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
	document.write('Not allowed to send custom requests. Redirecting in 3sec...')
	window.setTimeout(res.sendFile('index.html', {root: 'dist/angular-cardealer/'}), 3000);
});
module.exports = router;
