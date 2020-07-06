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

exports.addcar = (req, res, next) => {
	let car = new Cars({
		regnr: req.body.regnr,
		modell: req.body.modell,
		imgsrc: req.body.imgsrc
	});
	car.save(function (err, car) {
		if (err) {return next(err)}
		res.json(201,car);
	})
};

exports.delcar = (req, res) => {
	let car = { regnr: req.body.regnrdel};
	Cars.find(car).deleteOne((err) => {
		if(err)
			res.send(err)
		else
			res.json({
			status: "success",
			message: "Car has been removed successfully",
			data: car
		});
	});
};

exports.updcar = (req, res) => {
	let editCar = { regnr: req.body.regnrtoedit };
	let editVal = () => {
		switch(req.body.cars) {
			case "regnr":
				return { regnr: req.body.newvalue };
			case "modell":
				return { modell: req.body.newvalue };
			case "imgsrc":
				return { imgsrc: req.body.newvalue };
			default:
				return false;
		}
	};

	if(!editVal) {
		res.json({
			error: "error",
			message: "No valid data"
		});
	} else {
		Cars.updateOne(editCar, editVal, function (err) {
			if(err)
				res.send(err);
			else
				res.json({
					status: "success",
					message: "Car updated successfully",
					data: editCar
				});
		});
	}
};
