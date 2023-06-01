


const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/taiwanese_immigrants.jpeg") {
    myImage.setAttribute("src", "images/taiwanese_immigrants2.jpeg");
  } else {
    myImage.setAttribute("src", "images/taiwanese_immigrants.jpeg");
  }
};

function playSound() {
  var audio = document.getElementById("audio");
  audio.play();
}



// import { annotate } from 'https://unpkg.com/rough-notation?module';

// // Code for Rough Notation annotations
// document.addEventListener('DOMContentLoaded', () => {
//   const n3 = document.querySelector('h1');
//   const n4 = document.querySelector('span');
//   const a3 = annotate(n3, { type: 'box', color: 'orange' });
//   const a4 = annotate(n4, { type: 'highlight', color: 'yellow', iterations: 1, multiline: true });
//   a3.show();
//   a4.show();
// });


// import { annotate } from 'https://unpkg.com/rough-notation?module';

// const n3 = document.querySelector('h1');
// const n4 = document.querySelector('span');
// const a3 = annotate(n3, { type: 'box', color: 'orange' });
// const a4 = annotate(n4, { type: 'highlight', color: 'yellow', iterations: 1, multiline: true });
// a3.show();
// a4.show();

