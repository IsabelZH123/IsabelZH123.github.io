document.addEventListener('DOMContentLoaded', init)

var game;
var config = {
    type: Phaser.AUTO,
    width:800,
    height:600,  
    _parent: 'phaser-example',
    backgroundColor: '#90dcff',              
    scene : {
        preload : preload,
        create : create
    }
};

function init(){
    game = new Phaser.Game(config);
}


function preload(){
    this.load.image('background', 'city.jpg')
    this.load.image('kids','kids.jpg');
}

function create(){
    this.add.image(0,0, 'background').setOrigin(0,0);
    var kids = this.physics.add.sprite(200, 200, 'kids');
    kids.setScale(0.5);
    kids.setInteractive();
    this.input.on('drag', function(pointer, gameObject, dragX, dragY){
        gameObject.x = dragX;
        gameObject.y = dragY;
    });
}        