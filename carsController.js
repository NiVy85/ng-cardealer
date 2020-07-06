Cars = require('./carsModel');

exports.index = (req, res) => {
	Cars.get((err, cars) => {
		if(err) {
			res.json({
				status: "error",
				message: err
			});
		} else {
			res.json({
				status: "success",
				message: "Cars retrieved successfully",
				data: cars
			});
		}
	});
};

exports.view = (req,res) => {
	Cars.findById(req.params.cars_id, (err, cars) => {
		if(err)
			res.send(err);
		else
			res.json({
				message: "Loading cars..",
				data: cars
			});
	});
};

exports.addcar = (req, res) => {
	if (!req.body.regnr) {
		res.status(400).send({message: "No empty fields allowed!"});
		return;
	}

	const newCar = new Cars.cars({
		regnr: req.body.regnr,
		modell: req.body.modell,
		imgsrc: req.body.imgsrc
	});

	newCar
		.save(newCar)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Error occured when creating new car."
			});
		});
};
