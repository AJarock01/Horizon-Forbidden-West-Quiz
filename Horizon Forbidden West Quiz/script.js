document.getElementById("pic1").addEventListener("click", choose1);
document.getElementById("pic2").addEventListener("click", choose2);

let choseCorrectPicture = false;
let score = 0;

function choose1() {
  document.getElementById("pic1").style.border = "2px solid blue";
  document.getElementById("pic2").style.border = "none";
  choseCorrectPicture = false;
}

function choose2() {
  document.getElementById("pic2").style.border = "2px solid blue";
  document.getElementById("pic1").style.border = "none";
  choseCorrectPicture = true;
}

// overall button
function markQuiz() {
  if (choseCorrectPicture) {
    score++;
  }
}
