function Platform(x, y, width, height){
	this.x = x;
	this.y = y;
	this.width = width; 
	this.height = height;
};
Platform.prototype.color = "red";
Platform.prototype.moveDir = 1;
Platform.prototype.moveSpeed = 2;
Platform.prototype.isMoving = false;
Platform.prototype.startMove = function(){
	this.isMoving = true;
};
Platform.prototype.endMove = function(){
	this.isMoving = false;
};
Platform.prototype.draw = function(){
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
};
Platform.prototype.update = function(){
	if(!this.isMoving)
		return;
	this.x += this.moveSpeed * this.moveDir;
	if(this.x + this.width > canvas.width)
		this.moveDir *= -1;
	if(this.x < 0)
		this.moveDir *= -1;
};