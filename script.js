//snare
var buttonElement=document.getElementById('snareDrum')
var snareAudio = new Audio('snare.wav');

buttonElement.addEventListener('click', function () {
  snareAudio.play();
})

buttonElement.addEventListener('mouseenter', function () {
  snareAudio.play();
})

//hihat
var buttonElement=document.getElementById('hiHat')
var hatAudio = new Audio('hihat.wav');

buttonElement.addEventListener('click', function () {
  hatAudio.play();
})

buttonElement.addEventListener('mouseenter', function () {
  hatAudio.play();
})

//boom
var buttonElement=document.getElementById('boom')
var boomAudio = new Audio('boom.wav');

buttonElement.addEventListener('click', function () {
  boomAudio.play();
})

buttonElement.addEventListener('mouseenter', function () {
  boomAudio.play();
})
