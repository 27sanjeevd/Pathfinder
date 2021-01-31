var xNode = [];
var yNode = [];
var counter = 0;
var canvas = "";
var Info = "";

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
		let paths = randomInt(0, 3);
		
		for(let y = 0; y < paths; y++){
			
			let position = randomInt(0, xVals.length - 1);
			gfg[x].push(position);
		}
	}
	

	return gfg;
}


function getXY(event){
	
	var temp1 = false;
	
	var x = event.clientX;
	var y = event.clientY;
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
		
		var graph = initializeNodes(xNode, yNode);
		
		for(var i = 0; i < graph.length; i++){
			
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