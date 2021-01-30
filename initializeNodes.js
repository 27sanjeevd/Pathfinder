const random1 = require("./randomInt");

function initializeNodes(xVals, yVals){
	let gfg = new Array(xVals.length);
	
	for(let x = 0; x < gfg.length; x++){
		
		gfg[x] = [];
		let paths = random1(0, xVals.length / 3 - 1);
		
		for(let y = 0; y < paths; y++){
			
			let position = random1(0, xVals.length - 1);
			gfg[x].push(position);
		)
	}
	

	return gfg;
}