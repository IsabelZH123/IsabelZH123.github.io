lab1 = function (){
    var canvas = document.getElementById("lab1Canvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#d8ffff";
    ctx.fillRect(0,0,800,800);

    ctx.fillStyle = "red";
    ctx.fillRect(80,200,100,600);

    ctx.fillStyle = "orange";
    ctx.fillRect(180,500,100,300);

    ctx.fillStyle = "yellow";
    ctx.fillRect(280,350,100,450);

    ctx.fillStyle = "green";
    ctx.fillRect(380,720,100,80);

    ctx.fillStyle = "blue";
    ctx.fillRect(480,650,100,150);

    ctx.fillStyle = "purple";
    ctx.fillRect(580,600,100,200);

    ctx.fillStyle = "black";
    ctx.font = "26px Arial";
    ctx.fillText("20", 105, 760);
    ctx.fillText("Apple", 90, 790)
    

    ctx.font = "26px Arial";
    ctx.fillText("10", 205, 760);
    ctx.fillText("Orange", 185, 790);

    ctx.font = "26px Arial";
    ctx.fillText("15", 305, 760);
    ctx.fillText("Banana", 285, 790);

    ctx.font = "26px Arial";
    ctx.fillText("3", 410, 760);
    ctx.fillText("Kiwi", 400, 790);

    ctx.font = "22px Arial";
    ctx.fillText("5", 515, 760);
    ctx.fillText("Blueberry", 483, 790);

    ctx.font = "26px Arial";
    ctx.fillText("8", 615, 760);
    ctx.fillText("Grapes", 590, 790);




}

document.addEventListener('DOMContentLoaded', lab1);
