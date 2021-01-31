var xNode = [];
var yNode = [];
var counter = 0;
var canvas = "";
var Info = "";

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
		for(var i = 0; i < counter - 1; i++){
			
			Info.moveTo(xNode[i]+5, yNode[i]+5);
			Info.lineTo(xNode[i+1]+5, yNode[i+1]+5);
			Info.strokeStyle = "#FF0000";
			Info.stroke();
		}
	}
	if (temp1){
		
		xNode.push(x-10);
		yNode.push(y-10);
		counter++;
	}
	
}