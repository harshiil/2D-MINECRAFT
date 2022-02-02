var canvas=new fabric.Canvas("myCanvas");
playerx=10;playery=10;
blockwidth=30;
blockheight=30;
var playerobject="";
var blockobject="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:playery,
            left:playerx
        });
      canvas.add(playerobject);  
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockobject=Img;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({
            top:playery,
            left:playerx
        });
      canvas.add(blockobject);  
    });  
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=="80"){
        console.log("p andshiftpressed");
        blockheight=blockheight+10;
        blockwidth=blockwidth+10;
        document.getElementById("current_width").innerHTML=blockwidth;
        document.getElementById("current_height").innerHTML=blockheight;
    }
    if(e.shiftKey==true && keypressed=="77"){
        console.log("m andshiftpressed");
        blockheight=blockheight-10;
        blockwidth=blockwidth-10;
        document.getElementById("current_width").innerHTML=blockwidth;
        document.getElementById("current_height").innerHTML=blockheight;
    }
    if(keypressed=="38"){
        up();
    }
    if(keypressed=="37"){
        left();
    }
    if(keypressed=="39"){
        right();
    }
    if(keypressed=="40"){
        down();
    }
    if(keypressed=="87"){
        new_image("wall.jpg");
    }
    if(keypressed=="71"){
        new_image("ground.png");
    }
    if(keypressed=="76"){
        new_image("light_green.png");
    }
    if(keypressed=="84"){
        new_image("trunk.jpg");
    }
    if(keypressed=="82"){
        new_image("roof.jpg");
    }
    if(keypressed=="89"){
        new_image("yellow_wall.png");
    }
    if(keypressed=="68"){
        new_image("dark_green.png");
    }
    if(keypressed=="67"){
        new_image("cloud.jpg");
    }
    if(keypressed=="85"){
        new_image("unique.png");
    }
    function up(){
        if(playery>=0){
            playery=playery-blockheight;
            canvas.remove(playerobject);
            player_update();
        }
    }
    function down(){
        if(playery<=500){
            playery=playery+blockheight;
            canvas.remove(playerobject);
            player_update();
        }
    }
    function left(){
        if(playerx>=0){
            playerx=playerx-blockwidth;
            canvas.remove(playerobject);
            player_update();
        }
    }
    function right(){
        if(playerx<=850){
            playerx=playerx+blockwidth;
            canvas.remove(playerobject);
            player_update();
        }
    }
}
