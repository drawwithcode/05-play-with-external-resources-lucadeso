var mySong;
var analyzer;

function preload(){
  mySong = loadSound("./assets/Little-Monster-Alejandro2_Starring-Role-Instrumental-Remake.mp3");
  img = loadImage("./assets/marina.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
  mySong.loop();
}

function draw() {

  var cerchio = 200;

  var rotazione;
  var color;
  var freq = 0.00001+0.0000000005*(mouseX);
  var cont = 0;
  var raggio;

  var volume = 0;

  background(230);

  if (mouseX > -10) {
    if (mySong.isPlaying() == false) {
      mySong.play();
    }
    volume = analyzer.getLevel();
    volume = map(volume,0,1,0,height/10);
  } else {
    background(255,0,0);
    mySong.stop();
  }

  translate(width/2, height/2);
  rotate(radians(rotazione));
  //scale(1+(1/(volume*100)), 1+(1/(volume*100)));

  ellipseMode(RADIUS);

  for (var i=0; i<500; i ++) {
  cerchio = 200 + 50*sin(millis()*freq*i);
  color = map(cerchio,150,250,255,60);
  raggio = map(cerchio,150,250,5,2);
  fill(color,0,color*74);
  noStroke();
  ellipse(cerchio*cos(i), cerchio*sin(i),raggio*(volume/30),raggio*(volume/30));
  rotazione = rotazione+0.00005;
}

  var ruotami = 0;
  ruotami = ruotami + 0.5;

  var testo = 'Move your mouse and see what happens!';
  textFont('Poppins');
  textAlign(CENTER);
  textSize(16);
  fill(210);
  text(testo, 0, -290);


  push();
  rotate(ruotami*(frameCount/80));
  image(img, -100, -100, 200, 200);
  pop();

}
