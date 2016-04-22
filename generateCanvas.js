
var maxWidth = document.getElementById('leftbox').offsetWidth
var maxHeight = document.getElementById('leftbox').offsetHeight
var canvasIDs = []
var actives = {}

 cWidth = perfectFit(maxWidth, 150)
 cHeight = perfectFit(maxHeight,50);
 //console.log(cWidth,cHeight)

function perfectFit(maxWidth, minSize){  //calculate best size of canvases
	var res = listDivisors(maxWidth)
	var k = 0;
	while(res.length <= 8) {
		k++
		res = listDivisors(maxWidth-k) // account for prime numbers
	}
	
	var exit = false
	var i = 0
	

	while(!exit){
		if(res[i] >= minSize) {
			return res[i]
		}
		i++
	}
}

 cols = Math.floor(maxWidth/cWidth)
 rows = Math.floor(maxHeight/cHeight)

 
 //console.log("avoid: ",avoid[0], avoid[1], avoid[2], avoid[3])

for(var j = 0; j< rows; j++){
	for ( var i = 0; i<cols; i++){

	var canvas = document.createElement('canvas');
	canvas.id     = "canvas"+j+i;
	canvasIDs.push([canvas.id, [[cWidth*i,cHeight*j],[cWidth*i+cWidth,cHeight*j],[cWidth*i,cHeight*j+cHeight],[cWidth*i+cWidth,cHeight*j+cHeight]]])


	addToActives(canvas.id,"off")
	canvas.width  = cWidth;
	canvas.height = cHeight;
	canvas.style.zIndex   = -1;
	canvas.style.position = "absolute";
	//canvas.style.border   = "1px solid red";
	canvas.style.backgroundColor = "#272822"
	canvas.style.left = cWidth*i
	canvas.style.top = cHeight*j



	document.getElementById('leftbox').insertBefore(canvas, document.getElementById('leftbox').firstChild);
	}
}

//console.log(actives)

// helper functions


function listDivisors(n) {
	if (n < 1)
		throw "Argument error";
	
	var small = [];
	var large = [];
	var end = Math.floor(Math.sqrt(n));
	for (var i = 1; i <= end; i++) {
		if (n % i == 0) {
			small.push(i);
			if (i * i != n)  // Don't include a square root twice
				large.push(n / i);
		}
	}
	large.reverse();
	return small.concat(large);
}

function avoidCanvases(){
	var c = Math.floor(cols/2)
	var r = Math.floor(rows/2)

	return ['canvas'+r+c,'canvas'+r+(c-1),'canvas'+(r-1)+c,'canvas'+(r-1)+(c-1)]
}


function addToActives (my_key, my_value) {
    actives[my_key] = my_value;
}
function readFromActives (my_key) {
    return actives[my_key];
}



