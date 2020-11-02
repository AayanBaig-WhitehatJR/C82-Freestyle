var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

var last_position_of_x, last_position_of_y;
var color = "black";
var width_of_the_line = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseEvent = "mouseDown";
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("lineWidth").value;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseUp"
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseLeave"
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
 current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
 current_position_of_mouse_y = e.clientY - canvas.offsetTop; 

 if (mouseEvent == "mouseDown") {
     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = width_of_the_line;
     console.log("Last position of X and Y coordinates equal to");
     console.log("X = " + last_position_of_x + "Y =" + last_position_of_y);
     ctx.moveTo(last_position_of_x, last_position_of_y);
     
     console.log("Current position of X and Y coordinates equal to")
     console.log("X = " + current_position_of_mouse_x + "Y =" + current_position_of_mouse_y);

     ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();
 }
 last_position_of_x = current_position_of_mouse_x;
 last_position_of_y = current_position_of_mouse_y;
}
