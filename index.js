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
  if (event.key) {
    var hit = new Audio(`sounds/${drumMap[event.key]}.mp3`);
    hit.play();
  }
});

// document.addEventListener('keydown', function (event) {
//   switch (event.key) {
//     case 'w':
//       var kickHit = new Audio('sounds/kick-bass.mp3');
//       kickHit.play();
//       break;
//     case 'a':
//       var snareHit = new Audio('sounds/snare.mp3');
//       snareHit.play();
//       break;

//     case 's':
//       var tom1Hit = new Audio('sounds/tom-1.mp3');
//       tom1Hit.play();
//       break;

//     case 'd':
//       var tom2Hit = new Audio('sounds/tom-2.mp3');
//       tom2Hit.play();
//       break;

//     case 'j':
//       var tom3Hit = new Audio('sounds/tom-3.mp3');
//       tom3Hit.play();
//       break;

//     case 'k':
//       var tom4Hit = new Audio('sounds/tom-4.mp3');
//       tom4Hit.play();
//       break;

//     case 'l':
//       var cymbalHit = new Audio('sounds/crash.mp3');
//       cymbalHit.play();
//       break;

//     default:
//       break;
//   }
// });

// var allDrums = document.querySelectorAll('.drum');

// var drumKeys = this.keyboardEvent.key;

// switch (drumKeys) {
//   case 'k':
//     var kickHit = new Audio('sounds/kick-bass.mp3');
//     kickHit.play();
//     break;
// }

// for (var i = 0; i < allDrums.length; i++) {
//   allDrums[i].addEventListener('click', function () {
//     var buttonInnerHTML = this.innerHTML;

//     switch (buttonInnerHTML) {
//       case 'w':
//         var kickHit = new Audio('sounds/kick-bass.mp3');
//         kickHit.play();
//         break;

//       case 'a':
//         var snareHit = new Audio('sounds/snare.mp3');
//         snareHit.play();
//         break;

//       case 's':
//         var tom1Hit = new Audio('sounds/tom-1.mp3');
//         tom1Hit.play();
//         break;

//       case 'd':
//         var tom2Hit = new Audio('sounds/tom-2.mp3');
//         tom2Hit.play();
//         break;

//       case 'j':
//         var tom3Hit = new Audio('sounds/tom-3.mp3');
//         tom3Hit.play();
//         break;

//       case 'k':
//         var tom4Hit = new Audio('sounds/tom-4.mp3');
//         tom4Hit.play();
//         break;

//       case 'l':
//         var cymbalHit = new Audio('sounds/crash.mp3');
//         cymbalHit.play();
//         break;

//       default:
//         break;
//     }
//   });
// }
