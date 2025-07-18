var i = 0;
var txt = 'confidence and clarity.';
var speed = 50;

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}