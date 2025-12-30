let modelKursi, modelTanaman;
let soundEffect;
let activeModel;
let placedObjects = [];

function preload() {
  modelKursi = loadModel('chair.obj', true);
  modelTanaman = loadModel('plantSmall1.obj', true);
  
  soundFormats('mp3', 'ogg');
  soundEffect = loadSound('lesungpipi.mp3'); 
}

function setup() {
  createARCanvas();
}

function draw() {
  ambientLight(255);
  directionalLight(255, 255, 255, 0, 0, -1);
  
  specularMaterial(200);
  shininess(50);
  
}

function mousePressed() {
  
  if (soundEffect.isLoaded()) {
    soundEffect.play();
  }
  
}