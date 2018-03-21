//Team AtomicSVG (Shaina Peters && Michael Ruvinshteyn)
//SoftDev2 pd07
//K13 -- Scattered
//2018 - 03 - 20

//collect svg and size variables
var svg = document.getElementById("vimage");
var width = svg.getAttribute("width");
var height = svg.getAttribute("height");

//randomly generated data
var data = {
    0:1.3525935687835,
    1:9.3268783573652,
    2:3.2279023496564,
    3:2.6587845816551,
    4:5.3045966361205,
    5:5.6380173916174,
    6:9.1374840769626,
    7:9.9246329115353,
    8:2.3807890677735,
    9:1.5175469273317
}
var count = Object.keys(data).length + 1; //used for computing coordinates

//create circles with a radius and a fill to place on the svg
for (var i = 0; i < count - 1; i++){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("fill","black");
    c.setAttribute("r",10);
    svg.appendChild(c);
}

//array of x-coordinates (key)
var x = [];
for (i = 0; i < count - 1; i++){
    x.push(i);
}

//array of y-coordinates (value)
var y = [];
for (i = 0; i < count - 1; i++){
    y.push(data[i]);
}

//select all circles and append their x- and y-coordinates
var circles = d3.selectAll("circle");
circles.data(x);
circles.attr("cx", function(d){return (width / count) * (d + 1)});
circles.data(y);
circles.attr("cy", function(d){return (height / count) * (count - d)})

//add the title
var title = d3.select("#title");
title.html("Random Number Gen vs. Trial Number");