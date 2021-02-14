var xNode = [];
var yNode = [];
var counter = 0;
var canvas = "";
var Info = "";
var generateGraph = false;
var graph = [];

//Generates a random Number
function randomInt(min, max) {	
			
	var RandInt = Math.floor(Math.random() * (max - min)) + (min);
			
	return RandInt;
}

//Set up
function SetUp(){
	canvas = document.getElementById('canvas');
	Info = canvas.getContext('2d');
	Run.Change();
			
}

//Main Event Listener
var Run = {
	Change : function (){
		window.addEventListener('keydown', function (e) {
			Run.key = (Run.key || []); 										
			Run.key[e.keyCode] = (e.type == "keydown");
		})
		window.addEventListener('keyup', function (e) {
			Run.key[e.keyCode] = (e.type == "keydown");            
		})
	}
}


//Initializes the graph
function initializeNodes(xVals, yVals){
	let gfg = new Array(xVals.length);
	
	
	for(let x = 0; x < gfg.length; x++){
		
		gfg[x] = [];
		
		/*
		var tempArray = new Array(xVals.length);
		var tempArray1 = new Array(xVals.length);
		
		
		for(let y = 0; y < xVals.length; y++){
			
			
			if (distance != 0){
				if (tempArray.length == 0){
					tempArray[y] = distance;
					tempArray1[y] = y;
				}
				else{
					for(let z = 0; z < tempArray.length; z++){
						if (tempArray[z] > distance){
							tempArray.splice(z, 0, distance);
							tempArray1.splice(z, 0, y);
						}
					}
				}
			}
			
		}
		*/	
		
		var d1  = [];
		var e1  = [];
		
		for(var y = 0; y < xVals.length; y++){
			let distance = Math.sqrt((xVals[y] - xVals[x]) ** 2 + (yVals[y] - yVals[x]) ** 2);
			
			if (distance != 0){
				
				d1.push(distance);
				e1.push(y);
			}
			
			
		}
		
		let paths = randomInt(1, 3);
		
		for(let g = 0; g < 1; g++){
			
			let position = randomInt(0, xVals.length / 4);
			gfg[x].push(position);
		}
	}
	

	return gfg;
}

//gets the current mouse position
function getXY(event){
	
	
	var x = event.clientX;
	var y = event.clientY;
	return [x, y];
}
function main1(event){
	
	var x = 0;
	var y = 0;
	x = getXY(event)[0];
	y = getXY(event)[1];
	
	var temp1 = false;
	
	if (Run.key && Run.key[81]) {
		Info.fillStyle = "skyblue";
		Info.fillRect(x-10, y-10, 10, 10);
		temp1 = true;
	}
			
	else if (Run.key && Run.key[87]) {
		Info.fillStyle = "red";
		Info.fillRect(x-10, y-10, 10, 10);
		temp1 = true;
	}
			
	else if (Run.key && Run.key[69]) {
		Info.fillStyle = "green";
		Info.fillRect(x-10, y-10, 10, 10);
		temp1 = true;
	}
	else if (Run.key && Run.key[82]) {
		
		if (generateGraph == false){
			graph = initializeNodes(xNode, yNode);
			generateGraph = true;
		}
		
		Info.clearRect(0, 0, canvas.width, canvas.height);
		
		for(var i = 0; i < graph.length; i++){
			
			Info.fillStyle = "green";
			Info.fillRect(xNode[i], yNode[i], 10, 10);
			
			
			for(var j = 0; j < graph[i].length; j++){
				
				Info.moveTo(xNode[i]+5, yNode[i]+5);
				Info.lineTo(xNode[graph[i][j]]+5, yNode[graph[i][j]]+5);
				Info.strokeStyle = "#7b967a";
				Info.stroke();
			}
			
		}
		
		
	}
	if (temp1){
		
		xNode.push(x-10);
		yNode.push(y-10);
		counter++;
	}
	
}