//Global Variables
var canvas;
var ctx;
var platforms = [];
var player;
var keys = [];
var left_key = 37,
	right_key = 39;
	space = 32;
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
	bindInput();

	//Initialize Game Objects
	platforms.push(new Platform(150, 300, 200, 10));
	platforms.push(new Platform(100, 250, 100, 10));
	platforms[1].color = "blue";
	platforms[1].startMove();

	//Place on the first platform
	player = new Player(160, 290);
};
var gameloop = function(){
	handleInput();
	update();
	draw();
	//hope for a 30fps loop
	setTimeout(gameloop, 1000/30);
};
var bindInput = function(){
	document.body.addEventListener("keydown", function (e) {
	    keys[e.keyCode] = true;
	});
	document.body.addEventListener("keyup", function (e) {
	    keys[e.keyCode] = false;
	});
}
var handleInput = function(){
	if(keys[right_key])
		player.move(1);
	else if(keys[left_key])
		player.move(-1);
	if(keys[space])
		player.jump();
};
var update = function(){
	for(var i = 0; i < platforms.length; i++){
		platforms[i].update();
	}
	player.update();
};
var draw = function(){
	clearCanvas();
	for(var i = 0; i < platforms.length; i++)
		platforms[i].draw();

	player.draw();
};
var clearCanvas = function(){
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
};