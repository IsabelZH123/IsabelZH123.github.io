var canvas;
var ctx;
let img = new Image();
img.src = "num3.png";;

draw = function (){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    ctx.fillStyle = "#d8ffff";
    ctx.fillRect(0,0,700,400);

    
    img.onload = function(){
         ctx.drawImage(img, 758, 242, 187, 242, 250, 80, 187, 242);
         
    }
}
document.addEventListener('DOMContentLoaded', draw);

var width = 186;
var height = 242;
var count = 0;
var count2 = 0;

function animation(){
    document.getElementById("canvas");
    
    setInterval(repeatDraw, 500);
    
};

function repeatDraw(){
         
        if (count<5){
            ctx.drawImage(img, width*count, 0, 186, 242, 250, 80, 186, 242);
            count++;
        }else{
            if(count2 < 4){

                ctx.drawImage(img, width*count2, height, 186, 242, 250, 80, 186, 242);
                count2++;
            }else{
                ctx.drawImage(img, 0, 0, 185, 242, 200, 80, 186, 242);
                ctx.drawImage(img, 758, 245, 187, 242, 385, 80, 186, 242);
            }
            
         
                 
            }
        }

    
         
        

    
    




    
    









