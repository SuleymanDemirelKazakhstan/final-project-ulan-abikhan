const express = require('express');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const expbs = require("express-handlebars");
const app = express();
var bodyParse = require('body-parser');

var hbs = expbs.create();
var urlencodedParser = bodyParse.urlencoded({ extended: false });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



MongoClient.connect(url, {useUnifiedTopology: true},(err, db) => {
	if (err) return console.log(err);
		var dbo = db.db("cars");

		app.get("/", (req, res)=> {
			dbo.collection("collection").find().toArray(function(err, results) {
				if (err) return console.log(err);
				
				console.log(results);
				
				res.render('cars', {cars: results, nCars: results});
				
			});
		});
		app.post("/filter", urlencodedParser, (req, res)=> {
			dbo.collection("collection").find().toArray(function(err, results) {
				 var carsModel = req.body;

            	console.log(carsModel.car);

            	let brands = [];

            	for (let i of results) {
                	if (i.brand === carsModel.car) {
                 	   brands.push(i);
                	}
            	}

            	res.render("cars", { cars: brands, nCars: results });
			});
		});	
			

	app.listen(3002, function() {
		console.log("LISTENING...");
	});
});
