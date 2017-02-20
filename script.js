//snare
var snareButton=document.getElementById('snareDrum')
var snare=document.getElementById('snareAudio')

snareButton.addEventListener('click', function () {
  snare.play();
})

snareButton.addEventListener('mouseenter', function () {
  snare.play();
})

//hihat
var hatButton=document.getElementById('hiHat')
var hihat=document.getElementById('hatAudio')

hatButton.addEventListener('click', function () {
  hihat.play();
})

hatButton.addEventListener('mouseenter', function () {
  hihat.play();
})

//  boom

var boomButton=document.getElementById('boom')
var boom=document.getElementById('boomAudio')

boomButton.addEventListener('click', function () {
  boom.play();
})

boomButton.addEventListener('mouseenter', function () {
  boom.play();
})
