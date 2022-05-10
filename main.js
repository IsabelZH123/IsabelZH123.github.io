draw = function (){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#d8ffff";
    ctx.fillRect(0,0,1000,700);
    
    /*Draw a yellow circle to be a sun */
    ctx.beginPath();
    ctx.arc(75,75,60,0,2*Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();

    /*Some caption text written on the canvas! */
    ctx.font = "40px Arial Black";
    ctx.fillStyle = "blue";
    ctx.fillText("Welcome to my home!", 200, 50);

    /*Draw two trangles and a rectangle, conbine into the roof of the house*/
    ctx.beginPath();
    ctx.fillStyle = "#800000";
    ctx.moveTo(120,200);
    ctx.lineTo(120,300);
    ctx.lineTo(70,300);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#800000";
    ctx.fillRect(120,200,280,100);

    ctx.beginPath();
    ctx.fillStyle = "#800000";
    ctx.moveTo(400,200);
    ctx.lineTo(400,300);
    ctx.lineTo(450,300);
    ctx.fill();

    /* a rectangle to be the house body*/     
    ctx.fillStyle = "#e28010";
    ctx.fillRect(70,300,380,300);

    /* three rectangle to be the house's door and windows*/  
    ctx.fillStyle = "#00FFFF";
    ctx.fillRect(230,500,60,100);

    ctx.fillStyle = "#00FFFF";
    ctx.fillRect(100,400,60,60);

    ctx.fillStyle = "#00FFFF";
    ctx.fillRect(360,400,60,60);

    /* Draw a circle to be the lock on the house's door*/
    ctx.beginPath();
    ctx.arc(280,550,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    /* Draw a small rectangle to be the decration on the house's windows*/
    ctx.fillStyle = "#397693";
    ctx.fillRect(130,400,3,60);

    ctx.fillStyle = "#397693";
    ctx.fillRect(390,400,3,60);
 
     /* a rectangle to be the tree trunk*/  
    ctx.fillStyle = "#808000";
    ctx.fillRect(680,450,60,250);
    
       
    /* draw three circles and combine into the tree branches*/ 
    ctx.beginPath();
    ctx.arc(650,400,80,0,2*Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(760,400,80,0,2*Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(710,320,80,0,2*Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();

    /* use for loop to draw the apples on the tree   */
    for (i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.arc(610 +i*40,400 + i*10,10,0,2*Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
    }

    for (i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(680 +i*30,300 + i*10,10,0,2*Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
    }

    for (i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(680 +i*30,270 + i*10,10,0,2*Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
    }

    for (i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.arc(660 +i*30,330 + i*10,10,0,2*Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
    }
    
    for (i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.arc(600 +i*30,350 + i*10,10,0,2*Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
    }

    for (i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(610 +i*30,430 + i*10,10,0,2*Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
    }

    /* draw some semicircle and combine into the mountains*/ 
    ctx.beginPath();
    ctx.arc(800,165,100,0,Math.PI, true);
    ctx.fillStyle = "#492600";
    ctx.fill();

    for (i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(750+i*100,220,100,0,Math.PI, true);
        ctx.fillStyle = "#492600";
        ctx.fill();
    }

    /* use for loop to draw fence*/ 
    for (i = 0; i < 3; i++) {
        ctx.fillStyle = "#ffff7f";
        ctx.fillRect(450,500 + i*60 ,600,15);
    }

    for (i = 0; i < 20; i++) {
        ctx.fillStyle = "#ffff7f";
        ctx.fillRect(450+ i*30,450,10,300);
    }

    /* use for loop to draw flying birds*/ 
    for (i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(420+ i*60,115 + i*60,20,0,Math.PI*1.5, true);
        ctx.stroke();
    }

    for (i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(440+ i*60,135 + i*60,20,0,Math.PI*1.5, true);
        ctx.stroke();
    }

    for (i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.arc(500+ i*60,130 + i*60,20,0,Math.PI*1.5, true);
        ctx.stroke();
    }

    for (i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.arc(520+ i*60,150 + i*60,20,0,Math.PI*1.5, true);
        ctx.stroke();
    }

    for (i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.arc(400+ i*60,180 + i*60,20,0,Math.PI*1.5, true);
        ctx.stroke();
    }

    for (i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.arc(420+ i*60,200 + i*60,20,0,Math.PI*1.5, true);
        ctx.stroke();
    }

    /* use for loop to draw stairs*/ 
    for (i = 0; i < 3; i++) {
        ctx.fillStyle = "#280000";
        ctx.fillRect(220 +i*20,600 + i*20 ,80,20);
    }

    /* use for loop to draw grass*/  
    for (i = 0; i < 34; i++) {
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.moveTo(i*30,700);
        ctx.lineTo(15 + i*30,650);
        ctx.lineTo(30 + i*30,700);
        ctx.fill();
    }
    
    

}
document.addEventListener('DOMContentLoaded', draw);