var SpeechRecognition = window.webkitSpeechRecognition ; 
var recognizer = new SpeechRecognition ; 

function start(){
    document.getElementById("textbox").innerHTML="";
    recognizer.start()

}
recognizer.onresult=function getresults(event){
  console.log(event)
  var content = event.results[0][0].transcript ; 
  console.log(content)
  document.getElementById("textbox").innerHTML=content;
  if(content=="take my selfie"){
    speak()

  }
}
 
function speak(){
  var speech = window.speechSynthesis;
  var speak_data = "Smile Please and wait for 5 seconds";
  var speak_this = new SpeechSynthesisUtterance(speak_data);
  speech.speak(speak_this);
  Webcam.attach("#camera");
  setTimeout(function(){
    snapshot();
    download()
  },5000
  )
}

Webcam.set({
  height:300,
  width:300,
  image_format:'jpg',
  jpg_quality:90
});

function snapshot(){
  Webcam.snap(
    function(selfie){
      document.getElementById("output").innerHTML=`<img src=${selfie} id="capture_image">`
    }
  );
}

function download(){
  link = document.getElementById("link");
  image = document.getElementById("capture_image").src;
  link.href = image;
  link.click()
}

