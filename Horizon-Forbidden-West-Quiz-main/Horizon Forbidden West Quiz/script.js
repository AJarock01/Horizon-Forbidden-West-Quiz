// Horizon Forbidden West Quiz

// Q1 code below
document.getElementById("pic1").addEventListener("click", choose1);
document.getElementById("pic2").addEventListener("click", choose2);
document.getElementById("pic3").addEventListener("click", choose3);
document.getElementById("pic4").addEventListener("click", choose4);

let choseCorrectPicture = false;

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

let choseCorrectPicture1 = false;

function choose1a() {
  document.getElementById("pic1a").style.border = "2px solid blue";
  document.getElementById("pic2a").style.border = "none";
  document.getElementById("pic3a").style.border = "none";
  document.getElementById("pic4a").style.border = "none";
  choseCorrectPicture1 = false;
}

function choose2a() {
  document.getElementById("pic2a").style.border = "2px solid blue";
  document.getElementById("pic1a").style.border = "none";
  document.getElementById("pic3a").style.border = "none";
  document.getElementById("pic4a").style.border = "none";
  choseCorrectPicture1 = false;
}

function choose3a() {
  document.getElementById("pic3a").style.border = "2px solid blue";
  document.getElementById("pic1a").style.border = "none";
  document.getElementById("pic2a").style.border = "none";
  document.getElementById("pic4a").style.border = "none";
  choseCorrectPicture1 = true;
}

function choose4a() {
  document.getElementById("pic4a").style.border = "2px solid blue";
  document.getElementById("pic1a").style.border = "none";
  document.getElementById("pic2a").style.border = "none";
  document.getElementById("pic3a").style.border = "none";
  choseCorrectPicture1 = false;
}

// Q3 code below
document.getElementById("pic1b").addEventListener("click", choose1b);
document.getElementById("pic2b").addEventListener("click", choose2b);
document.getElementById("pic3b").addEventListener("click", choose3b);
document.getElementById("pic4b").addEventListener("click", choose4b);

let choseCorrectPicture2 = false;

function choose1b() {
  document.getElementById("pic1b").style.border = "2px solid blue";
  document.getElementById("pic2b").style.border = "none";
  document.getElementById("pic3b").style.border = "none";
  document.getElementById("pic4b").style.border = "none";
  choseCorrectPicture2 = false;
}

function choose2b() {
  document.getElementById("pic2b").style.border = "2px solid blue";
  document.getElementById("pic1b").style.border = "none";
  document.getElementById("pic3b").style.border = "none";
  document.getElementById("pic4b").style.border = "none";
  choseCorrectPicture2 = false;
}

function choose3b() {
  document.getElementById("pic3b").style.border = "2px solid blue";
  document.getElementById("pic1b").style.border = "none";
  document.getElementById("pic2b").style.border = "none";
  document.getElementById("pic4b").style.border = "none";
  choseCorrectPicture2 = false;
}

function choose4b() {
  document.getElementById("pic4b").style.border = "2px solid blue";
  document.getElementById("pic1b").style.border = "none";
  document.getElementById("pic2b").style.border = "none";
  document.getElementById("pic3b").style.border = "none";
  choseCorrectPicture2 = true;
}

// Q4 code below
document.getElementById("None").addEventListener("click", NS);
document.getElementById("Burrower").addEventListener("click", BS);
document.getElementById("Digger").addEventListener("click", DS);
document.getElementById("Rockbreaker").addEventListener("click", RBS);
document.getElementById("Grounder").addEventListener("click", GS);

let choseCorrectName = false;

function NS() {
  choseCorrectName = false;
}
function BS() {
  choseCorrectName = false;
}
function DS() {
  choseCorrectName = false;
}
function RBS() {
  choseCorrectName = true;
}
function GS() {
  choseCorrectName = false;
}

// overall button
document.getElementById("checkQuizMark").addEventListener("click", markQuiz);

function markQuiz() {
  let score = 0;
  if (choseCorrectPicture) {
    score++;
  }
  if (choseCorrectPicture1) {
    score++;
  }
  if (choseCorrectPicture2) {
    score++;
  }
  if (choseCorrectName) {
    score++;
  }
  let percent = (score * 100) / 4;
  document.getElementById("displayGrade").innerHTML = `${percent}`;
}
