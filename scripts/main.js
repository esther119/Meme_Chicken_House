
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

function soundPOV(){
  var sound = new Audio('./sounds/collapse.wav');
  sound.volume = 0.05; 
  sound.play();
};

function playSound() {
  var audio = document.getElementById("audio");
  audio.play();
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = 'max-content';
    } 
  });
}
