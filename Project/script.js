for (i = 0;i < 4;i++) {
	var z = document.querySelector(".menu");
	z.addEventListener('click', func);
}
function func() {
	console.log("hello");
}
var express = require('express');
var app = express();
var server = app.listen(3000, listening);
function listening() {}
for (i = 0;i < 1000;i++) {
	console.log("Hello, world!");
}
app.use(express.static('website'));
let cars = [{brand:'Toyota',model:'Camry','year':1999,price:20000,image_url:"https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"},{brand:'BMW',model:'X6',year:2014,price:25000,image_url:"https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"},{brand:'Daewoo',model:'Nexia',year:2007,price:15000,image_url:"https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"}];
const marks =  `<a href="/bmw">BMW</a> | <a href="/toyota">Toyota</a> | <a href="/daewoo">Nexia Daewoo</a><br/>`;
const bmw = `<a href="/old">Old cars(More than 10 years)</a> | <a href="/exclusive">Exclusive cars(More than 20000$)</a>`;
const http = require('http');
const hostname = '127.0.0.1';
const port = 5005;
const server = http.createServer((request, response) => {
	response.setHeader("Content-Type", "text/html; charset=utf-8;");
	var year1 = 2020 - cars[0].year;
	var description1 = cars[0].brand + " " + cars[0].model;
	var year2 = 2020 - cars[1].year;
	var description2 = cars[1].brand + " " + cars[1].model;
	var year3 = 2020 - cars[2].year;
	var description3 = cars[2].brand + " " + cars[1].model;
	response.write("<div class=\"toyota\"><div class=\"card\"><img src = \"" + cars[0].image_url + "\" width=300px height=150px/><div class=\"main\"><span>"+description1+"</span> <nav>" +cars[0].price + "$</nav> <nav>" + year1 + " years</nav></div></div></div>");
	response.write("<div class=\"bmw\"><div class=\"card\"><img src = \"" + cars[1].image_url + "\" width=300px height=150px/><div class=\"main\"><span>"+description2+"</span> <nav>" +cars[1].price + "$</nav> <nav>" + year2 + " years</nav></div></div></div>");
	response.write("<div class=\"daewoo\"><div class=\"card\"><img src = \"" + cars[2].image_url + "\" width=300px height=150px/><div class=\"main\"><span>"+description3+"</span> <nav>" +cars[2].price + "$</nav> <nav>" + year3 + " years</nav></div></div></div>");
	response.write(marks);
	response.write(bmw);
	response.write("<style> .card {border: 3px solid red; margin-bottom: 15px;} img{display:inline-block}span { font-size: 40px; font-weight: bold; margin-bottom: 50px;} .main {display:inline-block;} nav { font-size: 30px; margin:10px, 30px, 15px, 0px;}</style>");
	if (request.url === "/bmw") {
		for (i = 0;i < cars.length;i++) {
			if (cars[i].brand.toLowerCase() === "bmw") {
				response.write("<style> ." + cars[i].brand.toLowerCase() + " { display:block;}</style>");
			}
			else {
				response.write("<style> ." + cars[i].brand.toLowerCase() + " { display:none;}</style>");
			}
		}
	}
	if (request.url === "/toyota") {
		for (i = 0;i < cars.length;i++) {
			if (cars[i].brand.toLowerCase() === "toyota") {
				response.write("<style> ." + cars[i].brand.toLowerCase() + " { display:block;}</style>");
			}
			else {
				response.write("<style> ." + cars[i].brand.toLowerCase() + " { display:none;}</style>");
			}
		}
	}
	if (request.url === "/daewoo") {
		for (i = 0;i < cars.length;i++) {
			if (cars[i].brand.toLowerCase() === "daewoo") {
				response.write("<style> ." + cars[i].brand.toLowerCase() + " { display:block;}</style>");
			}
			else {
				response.write("<style> ." + cars[i].brand.toLowerCase() + " { display:none;}</style>");
			}
		}
	}
	if (request.url === "/old") {
		for (i = 0;i < cars.length;i++) {
			if (2020 - cars[i].year < 10) {
				response.write("<style> ." + cars[i].brand.toLowerCase() + " { display:none;}</style>");
			}
			else {
				response.write("<style> ." + cars[i].brand.toLowerCase() + " { display:block;}</style>");
			}
		}
	}
	if (request.url === "/exclusive") {
		for (i = 0;i < cars.length;i++) {
			if (cars[i].price < 20000) {
				response.write("<style> ." + cars[i].brand.toLowerCase() + " { display:none;}</style>");
			}
			else {
				response.write("<style> ." + cars[i].brand.toLowerCase() + " { display:block;}</style>");
			}
		}
	}
	response.end();
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});