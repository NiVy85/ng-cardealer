const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRouter = require("./api-router");
const app = express();
const port = 8080;
const db_uri = 'mongodb+srv://mili018:BAc3w2Gg6iuT@mili.qa54w.gcp.mongodb.net/cars_db?retryWrites=true&w=majority';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
mongoose.Promise = global.Promise;
// Connect to Database
mongoose.connect(db_uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static('./dist/ng-cardealer/'), apiRouter);


app.listen((process.env.PORT || port), function () {
    console.log("Running on port " + port);
});
