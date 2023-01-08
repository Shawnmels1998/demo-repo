const msg = new SpeechSynthesisUtterance();
msg.text = "Hello World";
window.SpeechSynthesis.speak(msg);