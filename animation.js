


setInterval(draw,100,[cWidth/10,cHeight/2],'1.5ch','green');
//console.log(avoid)
function draw(position, size, color){
		var id = randomize()
		 var movement = delta()
		if(actives[id] =="off" && id != String(avoid[0]) && id != String(avoid[1]) && id != String(avoid[2]) && id != String(avoid[3])){
			//console.log("im drawing on: ",id)
			actives[id] = "on"
			var canvas = document.getElementById(id);;
			var ctx = canvas.getContext('2d');
    		ctx.textAlign = "center";
    		fadeInOut(canvas, randomText(),size,position,id,movement)
    }

}

//helper functions

function fadeInOut(canvas,text, size, position,id, movement) {
	
    var alpha = 0.0
    var peaked = false
    var context = canvas.getContext('2d');
    var txt = randomText()
   	var newPosition = [position[0],position[1]]

    
 
       
        var interval = setInterval(function () {
        	newPosition[0] += movement[0]

        	if(!peaked){
        		alpha = alpha + 0.03;
            	canvas.width = canvas.width; // Clears the canvas

            	letters(txt,context,alpha,size,newPosition) //draws

            	if(~~alpha >= 1) peaked = true;
        	}
            else{ 
            	canvas.width = canvas.width;
            	alpha = alpha - 0.04; // decrease opacity (fade out)

             	letters(txt,context,alpha,size,newPosition) //draws
            	            	
            	if (alpha <= 0) {
            		
            		actives[id] = "off"
                	canvas.width = canvas.width;
                	clearInterval(interval);
                
            	}
            }
        }, 50); 
}


function randomize(){
	var a = ~~(Math.random()*rows)
	var b = ~~(Math.random()*cols)
	var id = 'canvas'+a+b
	return id
}


function letters(txt,context,alpha,size, newPosition){
	var arrayTxt = txt[0]
	var arrayColor = txt[1]
	
	var relPos = 0;
	for(var i = 0; i< arrayTxt.length;i++){
		
		
		context.fillStyle = hexToRGBA(colors[arrayColor[i]],alpha)
        context.font = size+" arial";
        context.fillText(arrayTxt[i], newPosition[0]+ relPos,newPosition[1]);
        var measureObj = context.measureText(arrayTxt[i])
        relPos += measureObj.width
	}

}



function hexToRGBA(hex, opacity) {
    return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(opacity||1).join(',') + ')';
}


function randomText(){
	text = [
			[['var ','a,b,c'],['violet','white']],
			[['if','( ','!','peaked ) ','{','return ~~ -','1','}'],['pink','white','pink','white','white','pink','violet','white']],
			[['function ','hexRgba','( ','hex',', ','a',')'],['blue','green','white','orange','white','orange','white']],
			[['console','.','log','( this )'],['violet','pink','violet','white']],
			[['var ', 'cWidth', '=', '200',';'],['violet','white','pink','violet','white']],
			[['array','.sort','((','a',',','b',')','=> ','{','return ','a','-','b})'],['white','blue','white','orange','white','orange','white','blue','white','pink','white','pink','white']],
			[[],[]]
	]

	return text[~~(text.length*Math.random())]
}


function move(startingPoint,lineParams){
	var newX = startingPoint[0]+1
	var newY = lineParams[0]*newX + lineParams[1]
}


function line(a,b){
	var m = (b[1]-a[1])/(b[0]-a[0])
	var q = a[1]- m*a[0]
	return [m,q]
}

function randomPoint(){
	var x = ~~(Math.random()*10) * Math.pow(-1, ~~(Math.random()*10))
	var y = ~~(Math.random()*10) * Math.pow(-1, ~~(Math.random()*10))

	return [x,y]
}

// constants

var colors = {
	blue:'#4ec4eb',
	green:'#a6e22e',
	orange:'#fd9720',
	violet:'#ae81ff',
	pink:'#f92672',
	yellow:'#d7db74',
	white:'#FFFFFF'
}





