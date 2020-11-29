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
		for (i = 0;i < cars.length;i++) {
	template += `<div>` + cars[i].brand + ` ` + cars[i].model + ` <a id="`+ cars[i].model + `" name="name" href="` + cars[i].brand + `"> Add to basket</a> <span id="`+ cars[i].brand + `">Already in basket</span></div> <style type="text/css" scoped> #` + cars[i].brand +` {display: none;}</style>`;
}
template += `<h1> In basket</h1>`;
template += `<div id="noItem">There is no item.</div>`;
app.get("/", function (req, res) {
	res.send(template);
});
app.get("/Toyota", function (req, res) {
	template = template + `<style type="text/css" scoped> #Camry{display: none;} #Toyota {display: inline;} #noItem {display:none;}</style>`;
	//console.log(template);
	cookieOfCars = req.cookies['cars'];
	if (!cookieOfCars) {
		template = template + "<span> Itesms with id: 1</span>"
	}
	else {
		template = template + "<span> , 1</span>";
	}
	if (cookieOfCars === undefined) {
		cookieOfCars = "";
	}
	res.cookie('cars', cookieOfCars + "id=1 ");
	res.send(`<a href="/">Back</a>`);
		
});
app.get("/BMW", function (req, res) {
	template = template + `<style type="text/css" scoped> #X6 {display: none;} #BMW {display: inline;} #noItem {display:none;}</style>`;
	//console.log(template);
	cookieOfCars = req.cookies['cars'];
	if (!cookieOfCars) {
		template = template + "<span> Itesms with id: 2</span>"
	}
	else {
		template = template + "<span> , 2</span>";
	}
	if (cookieOfCars === undefined) {
		cookieOfCars = "";
	}
	res.cookie('cars',cookieOfCars + "id=2 ");
	res.send(`<a href="/">Back</a>`);
		
});
app.get("/Daewoo", function (req, res) {
	template = template + `<style type="text/css" scoped> #Nexia{display: none;} #Daewoo {display: inline;} #noItem {display:none;}</style>`;
	//console.log(template);
	cookieOfCars = req.cookies['cars'];
	console.log(cookieOfCars);
	if (!cookieOfCars) {
		template = template + "<span> Itesms with id: 3</span>"
	}
	else {
		template = template + "<span> , 3</span>";
	}
	if (cookieOfCars === undefined) {
		cookieOfCars = "";
	}
	res.cookie('cars', cookieOfCars + "id=3 ");

	res.send(`<a href="/">Back</a>`);
		
});	
			

	app.listen(3002, function() {
		console.log("LISTENING...");
	});
});
const express = require('express');
const app = express();
const router = require('./router');
let session = require('express-session');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(session({secret: "Shh, it's secret"}));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(router.router);
app.listen(3002, function() {
	console.log("LISTENING...");
});