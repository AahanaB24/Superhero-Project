var canvas = new fabric.Canvas('myCanvas');
ctx = canvas.getContext("2d");

image_width = 30;
image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update(){
    fabric.Image.fromURL("groot.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(50);
        player_object.scaleToHeight(100);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object)
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        image_object = Img;

        image_object.scaleToWidth(image_width);
        image_object.scaleToHeight(image_height);
        image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed = e.keyCode
    console.log(keypressed)
    if(e.shiftKey == true && keypressed == '80'){
        console.log("p and shift pressed");
        image_height = image_height - 10;
        image_width = image_width - 10;
        document.getElementById("current_width").innerHTML = image_width;
        document.getElementById("current_height").innerHTML = image_height;
    }
    if(e.shiftKey == true && keypressed == '77'){
        console.log("m and shift pressed");
        image_height = image_height + 10;
        image_width = image_width + 10;
        document.getElementById("current_width").innerHTML = image_width;
        document.getElementById("current_height").innerHTML = image_height;
    }
    if(keypressed == '65'){
        new_image("hulk_face.png");
        console.log("A");
    }
    if(keypressed == '66'){
        new_image("captain_america_left_hand.png");
        console.log("B");
    }
    if(keypressed == '67'){
        new_image("hulk_left_hand.png");
        console.log("C");
    }
    if(keypressed == '68'){
        new_image("hulk_legs.png");
        console.log("D");
    }
    if(keypressed == '69'){
        new_image("hulk_right_hand.png");
        console.log("E");
    }
    if(keypressed == '70'){
        new_image("hulkd_body.png");
        console.log("F");
    }
    if(keypressed == '71'){
        new_image("ironman_body.png");
        console.log("G");
    }
    if(keypressed == '72'){
        new_image("ironman_face.png");
        console.log("H");
    }
    if(keypressed == '73'){
        new_image("ironman_left_hand.png");
        console.log("I");
    }
    if(keypressed == '74'){
        new_image("ironman_legs.png");
        console.log("J");
    }
    if(keypressed == '75'){
        new_image("ironman_right_hand.png");
        console.log("K");
    }
    if(keypressed == '76'){
        new_image("spiderman_body.png");
        console.log("L");
    }
    if(keypressed == '77'){
        new_image("spiderman_face.png");
        console.log("M");
    }
    if(keypressed == '78'){
        new_image("spiderman_left_hand.png");
        console.log("N");
    }
    if(keypressed == '79'){
        new_image("spiderman_legs.png");
        console.log("O");
    }
    if(keypressed == '80'){
        new_image("spiderman_right_hand.png");
        console.log("P");
    }
    if(keypressed == '81'){
        new_image("thor_face.png");
        console.log("Q");
    }
    if(keypressed == '82'){
        new_image("thor_left_hand.png");
        console.log("R");
    }
    if(keypressed == '83'){
        new_image("thor_right_hand.png");
        console.log("S");
    }
    if(keypressed == '38'){
        up();
        console.log("Up");
    }
    if(keypressed == '40'){
        down();
        console.log("Down");
    }
    if(keypressed == '37'){
        left();
        console.log("Left");
    }
    if(keypressed == '39'){
        right();
        console.log("Right");
    }
}

function up(){
    if(player_y >= 0){
        player_y = player_y - image_height;
        console.log("Image Height ~ " + image_height);
        console.log("When up arrow is pressed ~ X = " + player_x + "| Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y <= 500){
        player_y = player_y + image_height;
        console.log("Image Height ~ " + image_height);
        console.log("When down arrow is pressed ~ X = " + player_x + "| Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x >= 0){
        player_x = player_x - image_width;
        console.log("Image Width ~ " + image_width);
        console.log("When left arrow is pressed ~ X = " + player_x + "| Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x <= 850){
        player_x = player_x + image_width;
        console.log("Image Width ~ " + image_width);
        console.log("When right arrow is pressed ~ X = " + player_x + "| Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
