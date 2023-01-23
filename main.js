var canvas= document.getElementById('c1');
ctx= canvas.getContext('2d');


var MouseEvent= "";
canvas.addEventListener('mousedown', my_mousedown);
function my_mousedown(e){
MouseEvent='mouseDown';
}

canvas.addEventListener('mouseup', my_mouseup);
function my_mouseup(e){
MouseEvent='mouseUp';
}

canvas.addEventListener('mouseleave', my_mouseleave);
function my_mouseleave(e){
MouseEvent='mouseLeave';
}

canvas.addEventListener('mousemove', my_mousemove);
function my_mousemove(e){
 CPX=e.clientX-canvas.offsetLeft;
 CPY=e.clientY-canvas.offsetTop;
    if(MouseEvent=='mouseDown'){
        ctx.beginPath();
        ctx.strokeStyle='red';
        ctx.lineWidth=2;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*)
        ctx.stroke();
    }
    lpx=CPX;
    lpy=CPY;
}