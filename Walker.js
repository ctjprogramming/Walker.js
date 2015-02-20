//Global Variables
var canvas;
var ctx;
var platforms = [];

window.onload = main;

function main(){
	canvas = document.getElementById("canvas");
	canvas.width = 400;
	canvas.height = 400;
	ctx = canvas.getContext("2d");

	init();
	gameloop();
};
var init = function(){
	platforms.push(new Platform(150, 300, 200, 20));
	platforms.push(new Platform(100, 250, 100, 20));
	platforms[1].color = "blue";
	platforms[1].startMove();
};
var gameloop = function(){
	handleInput();
	update();
	draw();
	//hope for a 30fps loop
	setTimeout(gameloop, 1000/30);
};
var handleInput = function(){
	//This is where we handle input
};
var update = function(){
	for(var i = 0; i < platforms.length; i++){
		platforms[i].update();
	}
};

var draw = function(){
	clearCanvas();
	for(var i = 0; i < platforms.length; i++){
		platforms[i].draw();
	}
};
var clearCanvas = function(){
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
};