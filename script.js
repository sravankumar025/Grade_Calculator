let english = document.getElementById("english");
let maths = document.getElementById("maths");
let physics = document.getElementById("physics");
let chemistry = document.getElementById("chemistry");
let computer = document.getElementById("computer");
let btn = document.getElementById("calculate");
let calcGrade = document.getElementById("grade");
btn.addEventListener("click", calcuateGrade);
let arr = new Array(5).fill(0);

function calcuateGrade() {
  let sum = 0;
  document.getElementById("totalMarks").textContent = " ";
  document.getElementById("averageMarks").textContent = " ";
  calcGrade.textContent=" ";
  if (
    english.value < 100 &&
    english.value > 0 &&
    physics.value < 100 &&
    physics.value > 0 &&
    maths.value < 100 &&
    maths.value > 0 &&
    chemistry.value < 100 &&
    chemistry.value > 0 &&
    computer.value < 100 &&
    computer.value > 0
  ) {
    arr.push(
      english.value,
      maths.value,
      physics.value,
      chemistry.value,
      computer.value
    );
    
    for (let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i]);
      if (arr[i] <= 35) {
        calcGrade.textContent = "You got F grade";
      }
    }
    document.getElementById("totalMarks").textContent = sum;
    document.getElementById("averageMarks").textContent = sum / 5;
    if (
      english.value > "35" &&
      maths.value > "35" &&
      physics.value > "35" &&
      chemistry > "35" &&
      computer > "35"
    ) {
      let grade = (sum / 500) * 100;
      console.log(grade);
      if (grade > 90) {
        calcGrade.textContent = "You got A grade";
      } else if (grade > 80 && grade < 90) {
        calcGrade.textContent = "You got B grade";
      } else if (grade > 70 && grade < 80) {
        calcGrade.textContent = "You got C grade";
      } else if (grade > 60 && grade < 70) {
        calcGrade.textContent = "You got D grade";
      }
    } else {
      calcGrade.textContent = "You got F grade";
    }
  } else {
    alert("Please Enter marks between 0-100 range only");
  }
}
