var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent


var recognition = new SpeechRecognition();
//recognition.continuous = false;
recognition.lang = 'en-US';

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

hints.innerHTML = 'Tap/click then say something';

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to transcribe. ');
}

recognition.onresult = function(event) {

  var spokenText = event.results[0][0].transcript;

  if (event.results[0].isFinal) {
    hints.innerHTML = speechToText;
  }
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = "I didn't recognise that word.";
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}
