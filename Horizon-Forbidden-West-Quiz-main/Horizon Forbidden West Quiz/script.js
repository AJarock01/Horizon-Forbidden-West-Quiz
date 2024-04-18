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

// Q2 code below
document.getElementById("pic1a").addEventListener("click", choose1a);
document.getElementById("pic2a").addEventListener("click", choose2a);
document.getElementById("pic3a").addEventListener("click", choose3a);
document.getElementById("pic4a").addEventListener("click", choose4a);

function choose1a() {
  document.getElementById("pic1a").style.border = "2px solid blue";
  document.getElementById("pic2a").style.border = "none";
  document.getElementById("pic3a").style.border = "none";
  document.getElementById("pic4a").style.border = "none";
  choseCorrectPicture = false;
}

function choose2a() {
  document.getElementById("pic2a").style.border = "2px solid blue";
  document.getElementById("pic1a").style.border = "none";
  document.getElementById("pic3a").style.border = "none";
  document.getElementById("pic4a").style.border = "none";
  choseCorrectPicture = false;
}

function choose3a() {
  document.getElementById("pic3a").style.border = "2px solid blue";
  document.getElementById("pic1a").style.border = "none";
  document.getElementById("pic2a").style.border = "none";
  document.getElementById("pic4a").style.border = "none";
  choseCorrectPicture = true;
}

function choose4a() {
  document.getElementById("pic4a").style.border = "2px solid blue";
  document.getElementById("pic1a").style.border = "none";
  document.getElementById("pic2a").style.border = "none";
  document.getElementById("pic3a").style.border = "none";
  choseCorrectPicture = false;
}

// Q3 code below
document.getElementById("pic1b").addEventListener("click", choose1b);
document.getElementById("pic2b").addEventListener("click", choose2b);
document.getElementById("pic3b").addEventListener("click", choose3b);
document.getElementById("pic4b").addEventListener("click", choose4b);

function choose1b() {
  document.getElementById("pic1b").style.border = "2px solid blue";
  document.getElementById("pic2b").style.border = "none";
  document.getElementById("pic3b").style.border = "none";
  document.getElementById("pic4b").style.border = "none";
  choseCorrectPicture = false;
}

function choose2b() {
  document.getElementById("pic2b").style.border = "2px solid blue";
  document.getElementById("pic1b").style.border = "none";
  document.getElementById("pic3b").style.border = "none";
  document.getElementById("pic4b").style.border = "none";
  choseCorrectPicture = false;
}

function choose3b() {
  document.getElementById("pic3b").style.border = "2px solid blue";
  document.getElementById("pic1b").style.border = "none";
  document.getElementById("pic2b").style.border = "none";
  document.getElementById("pic4b").style.border = "none";
  choseCorrectPicture = false;
}

function choose4b() {
  document.getElementById("pic4b").style.border = "2px solid blue";
  document.getElementById("pic1b").style.border = "none";
  document.getElementById("pic2b").style.border = "none";
  document.getElementById("pic3b").style.border = "none";
  choseCorrectPicture = true;
}

// Q4 code below
document.getElementById("pic1c").addEventListener("click", choose1c);
document.getElementById("pic2c").addEventListener("click", choose2c);
document.getElementById("pic3c").addEventListener("click", choose3c);
document.getElementById("pic4c").addEventListener("click", choose4c);

function choose1c() {
  document.getElementById("pic1c").style.border = "2px solid blue";
  document.getElementById("pic2c").style.border = "none";
  document.getElementById("pic3c").style.border = "none";
  document.getElementById("pic4c").style.border = "none";
  choseCorrectPicture = true;
}

function choose2c() {
  document.getElementById("pic2c").style.border = "2px solid blue";
  document.getElementById("pic1c").style.border = "none";
  document.getElementById("pic3c").style.border = "none";
  document.getElementById("pic4c").style.border = "none";
  choseCorrectPicture = false;
}

function choose3c() {
  document.getElementById("pic3c").style.border = "2px solid blue";
  document.getElementById("pic1c").style.border = "none";
  document.getElementById("pic2c").style.border = "none";
  document.getElementById("pic4c").style.border = "none";
  choseCorrectPicture = false;
}

function choose4c() {
  document.getElementById("pic4c").style.border = "2px solid blue";
  document.getElementById("pic1c").style.border = "none";
  document.getElementById("pic2c").style.border = "none";
  document.getElementById("pic3c").style.border = "none";
  choseCorrectPicture = false;
}
// overall button
document.getElementById("checkQuizMark").addEventListener("click", markQuiz);

function markQuiz() {
  if (choseCorrectPicture) {
    score++;
  }
}
