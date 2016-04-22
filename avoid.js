var inside = function (point, vs, id) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
    
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
  
    if (inside) avoid.push(id);
};

var h1 = document.getElementById('title')

var titleP1 = [h1.offsetLeft,h1.offsetTop] //angolo  sinistro alto titolo
var titleP2 = [h1.offsetLeft+cWidth,h1.offsetTop]
var titleP3 = [h1.offsetLeft+cWidth ,h1.offsetTop + cHeight] // angolo destro basso titolo
var titleP4 = [h1.offsetLeft,h1.offsetTop+cHeight]
var corners = [titleP1,titleP2,titleP3,titleP4]
var avoid = []



function calculate(){
    avoid = []
    for(var j in corners){
    	for (var i in canvasIDs){
    		inside(corners[j],canvasIDs[i][1],canvasIDs[i][0])
    	}
    }
}


for(var k = 0; k<10; k++){
   

    titleP1 = [h1.offsetLeft,h1.offsetTop] //angolo  sinistro alto titolo

    titleP2 = [h1.offsetLeft+cWidth,h1.offsetTop]

    titleP3 = [h1.offsetLeft+cWidth ,h1.offsetTop + cHeight] // angolo destro basso titolo

    titleP4 = [h1.offsetLeft,h1.offsetTop+cHeight]
    calculate()

    
   
    console.log(avoid.length)
} 








