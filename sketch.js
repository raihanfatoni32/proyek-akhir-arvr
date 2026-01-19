function setup() {
  noCanvas();
  
  let consoleDiv = document.getElementById('p5-console');
  
  setTimeout(() => {
    consoleDiv.innerHTML += "<br>> System Ready.";
  }, 1000);

  let modelViewer = document.querySelector('model-viewer');
  let audio = document.getElementById('click-sound');

  document.getElementById('ar-button').addEventListener('click', () => {
    consoleDiv.innerHTML = "<span style='color:yellow'> > Requesting WebXR Session...</span>";
  });

  modelViewer.addEventListener('click', () => {
    if(audio) {
      audio.currentTime = 0;
      audio.play();
      consoleDiv.innerHTML = "> Interaction: Tap Detected.<br>> Playing SFX.";
    }
  });
}
