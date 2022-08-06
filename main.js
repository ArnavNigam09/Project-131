function setup()
{
    canvas  = createCanvas(640, 420);
    canvas.center();
}

img = "";

function preload()
{
    img = loadImage('Tyra_Storage_Bed_Finish_Californian_Walnut_LP.jpg');

}

function draw()
{
    image(img, 0 , 0 , 640 , 420);
    fill("#FF0000");
    text("Bed", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(20, 60, 597, 275);
    
}
