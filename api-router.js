const router = require('express').Router();

router.get('/', (req, res) => {
	res.sendFile('index.html', {root: 'dist/angular-cardealer/'});
});

const carsController = require('./carsController');

router.route('/api/cars')
	.get(carsController.index);

router.route('/api/cars/:cars_id')
	.get(carsController.view);

router.route('/api/cars')
	.post(carsController.addcar);

router.route('/api/cars/del')
	.post(carsController.delete);

router.get('*', (req, res) => {
	res.redirect('https://angular-cardealer.herokuapp.com');
});

module.exports = router;
