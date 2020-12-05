var mouseEvent = "empty"; 
var x_position, y_position;

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");	
color = "black"; 
radius = document.getElementById("radius"); 
width = 1; 
canvas.addEventListener("mousedown", my_mousedown); 
function my_mousedown(e) { 
    mouseEvent = "mousedown"; 
}

canvas.addEventListener("mouseup", my_mouseup); 
function my_mouseup(e){
    mouseEvent = "mouseup"; 
}

canvas.addEventListener("mouseleave", my_mouseleave); 
function my_mouseleave(e){ 
    mouseEvent = "mouseleave"; 
}

canvas.addEventListener("mousemove", my_mousemove); 
function my_mousemove(e) {
    mouseEvent = "mousemove"; 
    current_x = e.clientX - canvas.offsetLeft; 
    current_y = e.clientY - canvas.offsetTop; 

    if (mouseEvent == "mousedown"){ 
        ctx.beginPath(); 
        ctx.strokestyle = color; 
        ctx.linewidth = width; 
        console.log("Last position of x and y coordinates are equal to - ")
        console.log("x - "+ x_position + " y - " + y_position);
        ctx.moveTo(x_position, y_position); 

        console.log("Current position of x and y coordinates are equal to - ")
        console.log("x - "+ current_x + " y - " + current_y);
        ctx.lineTo(current_x, current_y); 
        ctx.stroke; 
    }

    x_position = current_x; 
    y_position = current_y; 
}