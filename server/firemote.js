var express = require('express');
var app = express();

var __appdir = "client";

var stateId = 1;

app.use(express.static(__appdir));
app.use(express.bodyParser());

app.get('/firemote/state', function(req, res){
	var obj = {
		stateId:stateId++,
		head:{"angle":0,"light":true},
		trayFeeder:{"name":"Tray Feeder", "pos":0, "posMax":300, "calibrate":false, "jog":1},
		pcbFeeder:{"name":"PCB Feeder", "pos":0, "posMax":300, "calibrate":false, "jog":1},
		gantry: {"name":"Gantry", "pos":0, "posMax":500, "jog":1},
		spindleLeft:{"pos":0, "name":"Left", "side":"left", "on":true, "part":true},
		spindleRight:{"pos":100, "name":"Right", "side":"right", "on":false, "part":false},
		message:"FireMote is in demo mode"
		};
	body = JSON.stringify(obj);
	console.log(body);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.post('/firemote/state', function(req, res){
	var obj = req.body;
	obj.stateId = stateId++;
	obj.message = "FireMote POST state response";
	body = JSON.stringify(obj);
	console.log(body);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.post('/firemote/echo', function(req, res){
	var obj = req.body;
	obj.stateId = stateId++;
	obj.message = "FireMote POST echo response";
	body = JSON.stringify(obj);
	console.log(body);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.listen(8000);
console.log('FireMote listening on port 8000');
