function setup() {
  createCanvas(500, 500);
}

function draw() {
  var x = width - 370
  var y = height - 450
  background(0,200,0);
  //first segment 
  fill(0);
  line(x, y, 200,30);
  //second segment 
  fill(0);
  line(200, 30, 300,120);
  // third segment
  fill(0);
  line(300, 120, 350,300);
  //fourth segment 
  fill(0);
  line(350, 300, 350,350);
  //fifth segment
  fill(0);
  line(350, 350, 320,370);
  //sixth segment
  fill(0);
  line(320, 370, 200,380);
  //seventh segment 
  fill(0);
  line(200, 380, 100, 450);
  //eighth segment 
  fill(0);
  line(100, 450, 20, 300);
  //ninth segment 
  fill(0);
  line(20, 300, 80, 270 );
  //tenth segment 
  fill(0);
  line(80, 270, 85, 200);
  //eleventh segment 
  fill(0);
  line(85, 200, 110, 180);
  //twelveth segment
  fill(0);
  line(110, 180, 85, 130);
  //thirteenth segment, connect back to the starting point 
  fill(0);
  line(85, 130, 130, 50);
  //first location, larger cricle
  fill (200, 100, 30)
  ellipse(250, 200, 50, 50)
  strokeWeight(2)
  stroke(0)
  // second location, smaller circle
  fill (150, 130, 50)
  ellipse(150, 300, 25, 25)
  //city name: Shanghai  
   fill(0)
  textSize(30)
  text('Shanghai, China',200,480)
}
