// Horizon Forbidden West Quiz

// Q1 code below
document.getElementById("pic1").addEventListener("click", choose1);
document.getElementById("pic2").addEventListener("click", choose2);
document.getElementById("pic3").addEventListener("click", choose3);
document.getElementById("pic4").addEventListener("click", choose4);

let choseCorrectPicture = false;
let score = 0;

function choose1() {
  document.getElementById("pic1").style.border = "2px solid blue";
  document.getElementById("pic2").style.border = "none";
  document.getElementById("pic3").style.border = "none";
  document.getElementById("pic4").style.border = "none";
  choseCorrectPicture = false;
}

function choose2() {
  document.getElementById("pic2").style.border = "2px solid blue";
  document.getElementById("pic1").style.border = "none";
  document.getElementById("pic3").style.border = "none";
  document.getElementById("pic4").style.border = "none";
  choseCorrectPicture = true;
}

function choose3() {
  document.getElementById("pic3").style.border = "2px solid blue";
  document.getElementById("pic1").style.border = "none";
  document.getElementById("pic2").style.border = "none";
  document.getElementById("pic4").style.border = "none";
  choseCorrectPicture = false;
}

function choose4() {
  document.getElementById("pic4").style.border = "2px solid blue";
  document.getElementById("pic1").style.border = "none";
  document.getElementById("pic2").style.border = "none";
  document.getElementById("pic3").style.border = "none";
  choseCorrectPicture = false;
}
// overall button
function markQuiz() {
  if (choseCorrectPicture) {
    score++;
  }
}
