var canvas=document.getElementById('canvas'); //declaring all the variables
var context=canvas.getContext('2d');
var snake;
var snakeSize=10;
var score=0;
var food;
var w=500;
var h=500;

var drawModule=(function(){
	var bodySnake=function(x,y){
		context.fillStyle='green';
		context.fillRect(x*snakeSize,y*snakeSize,snakeSize,snakeSize);
		context.strokeStyle='darkgreen';
		context.strokeRect(x*snakeSize,y*snakeSize,snakeSize,snakeSize);
	}
	
	var snakeFood=function(x,y){
		context.fillStyle='yellow';
		context.fillRect(x*snakeSize,y*snakeSize,snakeSize,snakeSize);
		context.fillStyle='red';
		context.fillRect(x*snakeSize+1,y*snakeSize+1,snakeSize-2,snakeSize-2);
	}
	
	var scoreText=function(){
		var score_text="Score"+score;
		context.fillStyle="blue";
		context.fillText(score_text,145,h-5);
	}
	
	var drawSnake=function(){
		var length=4;
		snake=[];
		for(var i=length;i>=0;i--){
			snake.push({x:i,y:0});
		}
	}

	var createFood=function(){
		food={
			x: Math.floor((Math.random()*50)+1);
			y: Math.floor((Math.random()*50)+1);
		}
		
		for(var i=0;i<snake.length;i++){
			var snakeX=snake[i].x;
			var snakeY=snake[i].y;
			
			if(food.x===snakeX||food.y===snakeY||food.y===snakeY && food.x===snakeX){
				food.x=Math.floor((Math.random()*50)+1);
				food.y=Math.floor((Math.random()*50)+1);
			}
		}
	}
})
