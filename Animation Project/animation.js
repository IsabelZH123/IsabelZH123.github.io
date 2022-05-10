window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 2400;
    canvas.height = 720;

    var x = 0;
    var y = 0;

    var srcX;
    var srcY;

    var sheetWidth = 1875;
    var sheetHeight = 1080;

    var cols = 5;
    var rows = 4;

    var width = sheetWidth/cols;
    var height = sheetHeight/rows;

    var currentFrame = 0;
    
    

    var player = new Image();
    player.src = "lion1.png";

    function updateFrame(){
        currentFrame = ++ currentFrame % cols;
        srcX = currentFrame*width;
        srcY = 0;

        ctx.clearRect(0, 0,2400,720);
    }

    function drawImage(){
        updateFrame();
        ctx.drawImage(player, srcX, srcY, width, height, x , 400, 400, 300);
        x=x+100;
        if (x>2400){
            x=0;
            srcY+=height;
            currenrFrame = 0;
            ctx.drawImage(player, srcX, srcY, width, height, x , 400, 400, 300);
            x=x+100;
        }
    }

     

    this.setInterval(drawImage, 200);

    

    

  

})