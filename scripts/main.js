
const myImages = document.querySelectorAll("img.target-image");

myImages.forEach((image) => {
  image.onclick = () => {
    const mySrc = image.getAttribute("src");
    if (mySrc === "images/taiwanese_immigrants.jpeg") {
      image.setAttribute("src", "images/taiwanese_immigrants2.jpeg");
    } else {
      image.setAttribute("src", "images/taiwanese_immigrants.jpeg");
    }
  };
});

function soundPOV() {
  var sound = new Audio('./sounds/collapse.wav');
  sound.volume = 0.05;
  sound.play();
};

function soundAniket() {
  var sound = new Audio('./sounds/aniket.wav');
  sound.volume = 0.8;
  sound.play();
};

function playSound() {
  var audio = document.getElementById("audio");
  audio.play();
}



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = 'max-content';
    }
  });
}

// // Wait for the document to load
// document.addEventListener("DOMContentLoaded", function () {
//   // Get references to the button and image container
//   var showImageBtn = document.getElementById("showImageBtn");
//   var imageContainer = document.getElementById("imageContainer");

//   // Button click event handler
//   showImageBtn.addEventListener("click", function () {
//     // Create an image element
//     var image = document.createElement("img");

//     // Set the image source
//     image.src = "images/aniket.png"; // Replace with the actual image path

//     // Add the image to the container
//     imageContainer.appendChild(image);
//   });
// });

function replaceElement() {
  var image = document.createElement('img');
  image.src = "images/aniket.png";
  var oldElement = document.getElementById('checkmark-circle');
  console.log(oldElement);
  oldElement.replaceWith(image);
}

