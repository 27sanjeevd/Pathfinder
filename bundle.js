function bundle() {
	
	alert("HI");
}


var ColorArray = ["red", "blue"];
var xNode = [];
var yNode = [];
var counter = 0;
var canvas = "";
var Info = "";
var x = 500;
var y = 500;

function SetUp(){
	canvas = document.getElementById('canvas');
	Info = canvas.getContext('2d');
	Run.Change();
			
}
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
function getXY(event){
	x = event.clientX;
	y = event.clientY;
	if (Run.key && Run.key[81]) {
		Info.fillStyle = "skyblue";
		Info.fillRect(x-10, y-10, 10, 10);
	}
			
	else if (Run.key && Run.key[87]) {
		Info.fillStyle = "red";
		Info.fillRect(x-10, y-10, 10, 10);
	}
			
	else if (Run.key && Run.key[69]) {
		Info.fillStyle = "green";
		Info.fillRect(x-10, y-10, 10, 10);
	}
	xNode.push(x-10);
	yNode.push(y-10);
	counter++;
	
}