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
	res.send("Custom requests not allowed, make sure the address ends with .com and nothing else. Redirecting in 3..2..");
	setTimeout(function() {
		window.location.href="https://angular-cardealer.herokuapp.com";
	}, 3000);
});

module.exports = router;
