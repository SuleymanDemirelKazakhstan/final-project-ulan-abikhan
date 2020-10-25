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