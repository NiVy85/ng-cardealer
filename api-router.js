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
	setTimeout(res.redirect('https://angular-cardealer.herokuapp.com', 3000));
	res.send("Error. Custom get not allowed. Redirecting in 3..2..");
});

module.exports = router;
