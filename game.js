const Game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game-canvas', { preload, create ,update})
let player
let explo
let counter=0
let distanceX,distanceY
let x1,y1

function preload() {
Game.load.spritesheet("dude","dude-red.288x40.9x1.png",288/9,40/1)
Game.load.spritesheet("explo","explosion.192x64.6x2.png",192/6,64/2)
}

function create() {
    player=Game.add.sprite(Game.width/2,Game.height/2,"dude")
    explo=Game.add.sprite(Game.width/2+200,Game.height/2,"explo")
    player.anchor.setTo(0.5)
    explo.anchor.setTo(0.5)
    explo.animations.add("anim1",[],10,true).play()
    player.animations.add("left",[0,1,2,3],10,true)
    player.animations.add("right",[5,6,7,8],10,true)
Game.input.keyboard.createCursorKeys()
distanceX=player.width/2+explo.width/2
distanceY=player.height/2+explo.height/2
}
function update()
{
    counter++
    if(counter===40)
    {
    explo.x=Game.rnd.integerInRange(player.width/2,Game.width-player.width/2)
    explo.y=Game.rnd.integerInRange(player.height/2,Game.height-player.height/2)
    counter=0
    }
    if(Game.input.keyboard.createCursorKeys().left.isDown)
    {
        player.x-=2
        player.animations.play("left")
        
    }
    else
    
        if(Game.input.keyboard.createCursorKeys().right.isDown)
    {
        player.x+=2
        player.animations.play("right")
    }
    else
    if(Game.input.keyboard.createCursorKeys().up.isDown)
    {
        player.y-=2
        
    }
    else
    if(Game.input.keyboard.createCursorKeys().down.isDown)
    {
        player.y+=2
        
    }
    else
        player.frame=4
    
    x1=player.x-explo.x
    y1=player.y-explo.y
    if(x1<0)
    x1=-x1
    if(y1<0)
    y1=-y1
    if((y1<=distanceY)&&(x1<=distanceX))
    {
        Game.stage.backgroundColor=Phaser.Color.getRandomColor()
    }
    
}
