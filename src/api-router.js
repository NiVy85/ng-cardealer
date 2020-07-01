const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    status: 'Working',
    message: 'This is awesome!'
  });
});

const carsController = require('./carsController');

router.route('/cars')
	.get(carsController.index);

router.route('/cars/:cars_id')
	.get(carsController.view);

module.exports = router;
