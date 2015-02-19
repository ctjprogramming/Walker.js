var canvas = document.getElementById("canvas");
canvas.width = 400;
canvas.height = 400;
var ctx = canvas.getContext("2d");

var clearCanvas = function(){
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function Platform(x, y, width, height){
	this.x = x;
	this.y = y;
	this.width = width; 
	this.height = height;
}
Platform.prototype.color = "red";

Platform.prototype.draw = function(){
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
}

Platform.prototype.update = function(){
	this.x += 10 * moveDir;
	if(this.x + this.width > canvas.width)
		moveDir *= -1;
	if(this.x < 0)
		moveDir *= -1;
}

var platform = new Platform(150, 300, 200, 20);
var moveDir = 1;
setInterval(function(){
	platform.update();
	clearCanvas();
	platform.draw();
}, 100);