// document.querySelectorAll('button').forEach((item) => {
//   item.addEventListener('click', (event) => {
//     alert('You clicked me! Hehe');
//   });
// });

var drumMap = {
  w: 'kick-bass',
  a: 'snare',
  s: 'tom-1',
  d: 'tom-2',
  j: 'tom-3',
  k: 'tom-4',
  l: 'crash',
};

document.addEventListener('keydown', function (event) {
  // var buttonInnerHTML = document.querySelector('.drum').innerHTML;
  if (event.key) {
    var hit = new Audio(`sounds/${drumMap[event.key]}.mp3`);
    hit.play();
    buttonAnimation(event.key);
  }
});

var numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (var i = 0; i <= numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

function makeSound(key) {
  switch (key) {
    case 'w':
      var kickHit = new Audio('sounds/kick-bass.mp3');
      kickHit.play();
      break;

    case 'a':
      var snareHit = new Audio('sounds/snare.mp3');
      snareHit.play();
      break;

    case 's':
      var tom1Hit = new Audio('sounds/tom-1.mp3');
      tom1Hit.play();
      break;

    case 'd':
      var tom2Hit = new Audio('sounds/tom-2.mp3');
      tom2Hit.play();
      break;

    case 'j':
      var tom3Hit = new Audio('sounds/tom-3.mp3');
      tom3Hit.play();
      break;

    case 'k':
      var tom4Hit = new Audio('sounds/tom-4.mp3');
      tom4Hit.play();
      break;

    case 'l':
      var cymbalHit = new Audio('sounds/crash.mp3');
      cymbalHit.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');

  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}
