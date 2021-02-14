var xNode = [];
var yNode = [];
var counter = 0;
var canvas = "";
var Info = "";
var generateGraph = false;
var graph = [];

function startDFS(event){
	
	if (graph.length != 0){
		var x = 0;
		
		var visited = [];
		for(var y = 0; y < graph.length; y++){
			visited.push(false);
		}
		
		for(var y = 0; y < graph[0].length; y++){
			dfs(graph, event, visited, graph[0][y], 0);
		}
	}
}

function dfs(graph, event, visited, position, end){
	if (visited[position] == false){
		visited[position] = true;
		console.log(position);
		
		Info.moveTo(xNode[end]+5, yNode[end]+5);
		Info.lineTo(xNode[position]+5, yNode[position]+5);
		Info.strokeStyle = "red";
		Info.stroke();
		
		for(var y = 0; y < graph[position].length; y++){
			dfs(graph, event, visited, graph[position][y], position);
		}
	}
	/*
	else {
		Info.clearRect(0, 0, canvas.width, canvas.height);
			
		for(var i = 0; i < graph.length; i++){
				
			Info.fillStyle = "green";
			Info.fillRect(xNode[i], yNode[i], 10, 10);				
				
			for(var j = 0; j < graph[i].length; j++){
				
				Info.moveTo(xNode[i]+5, yNode[i]+5);
				Info.lineTo(xNode[graph[i][j]]+5, yNode[graph[i][j]]+5);
				Info.strokeStyle = "white";
				Info.stroke();
			}
			
		}
	}
	*/
}

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
	}
	
	for(let x = 0; x < gfg.length; x++){
		
		var d1  = [];
		var e1  = [];
		
		for(var y = 0; y < xVals.length; y++){
			let distance = Math.sqrt((xVals[y] - xVals[x]) ** 2 + (yVals[y] - yVals[x]) ** 2);
			
			if (distance != 0){
				
				d1.push(distance);
				e1.push(y);
			}
			
		}
		
		var len = d1.length;
		for(var i =len-1; i >= 0; i--){
			for(var j =1; j <= 1; j++){
				if (d1[j-1] > d1[j]){
					var temp = d1[j-1];
					d1[j-1] = d1[j];
					d1[j] = temp;
					
					var temp1 = e1[j-1];
					e1[j-1] = e1[j];
					e1[j] = temp1;
				}
			}
		}
		
		for(let g = 0; g < 1; g++){
			
			let position = randomInt(0, xVals.length/2);
			
			var checkBool = true;
			for(var h = 0; h < gfg[x].length; h++){
				if (gfg[x][h] == e1[position]){
					checkBool = false;
				}
			}
			for(var h = 0; h < gfg[e1[position]]; h++){
				if (gfg[e1[position]][h] == x){
					checkBool = false;
				}
			}
			if (checkBool){
				gfg[x].push(e1[position]);
				gfg[e1[position]].push(x);
			}
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
	else if (Run.key && Run.key[84]) {
		startDFS(event);
	}
	else if (Run.key && Run.key[82]) {
		
		if (generateGraph == false){
			graph = initializeNodes(xNode, yNode);
			generateGraph = true;
			
			Info.clearRect(0, 0, canvas.width, canvas.height);
			
			for(var i = 0; i < graph.length; i++){
				
				Info.fillStyle = "green";
				Info.fillRect(xNode[i], yNode[i], 10, 10);
				
				
				for(var j = 0; j < graph[i].length; j++){
					
					Info.moveTo(xNode[i]+5, yNode[i]+5);
					Info.lineTo(xNode[graph[i][j]]+5, yNode[graph[i][j]]+5);
					Info.strokeStyle = "white";
					Info.stroke();
				}
				
			}
		}
		
		
		
	}
	if (temp1){
		
		xNode.push(x-10);
		yNode.push(y-10);
		counter++;
	}
	
}