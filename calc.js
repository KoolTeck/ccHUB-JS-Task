// getting the required dom elements
const calcForm = document.getElementById("calcForm");
let result = document.getElementById("result");

// setting an event listener on form submit
calcForm.addEventListener("submit", calculate);

function calculate(eve) {
  eve.preventDefault();
  //getting the needed inputs by user from form
  let firstNum = calcForm.querySelector("[name=num1]").value;
  let secondNum = calcForm.querySelector("[name=num2]").value;
  let operand = calcForm.querySelector("[name=operation]").value;
  if (firstNum == "" || secondNum == "") {
    alert("first number and second number required");
    return;
  }
  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);
  // checking if the input is still a string after conversion
  if (Number.isNaN(firstNum) || Number.isNaN(secondNum)) {
    result.innerHTML = `<h5 style="color: crimson; background: #eee;">please input valid numbers</h5>`;
  } else {
    switch (operand) {
      case "Addition":
        result.innerHTML = `<h5 class="alert-success">
 			 ${firstNum} + ${secondNum} =  ${firstNum + secondNum}
 			</h5>`;
        calcForm.reset();
        break;
      case "Subtraction":
        result.innerHTML = `<h5 class="alert-success">
 			  ${firstNum} - ${secondNum} = 
 			   ${firstNum - secondNum}
 			</h5>`;
        calcForm.reset();
        break;
      case "Multiply":
        result.innerHTML = `<h5 class="alert-success">
 			   ${firstNum} * ${secondNum} = 
 			   ${firstNum * secondNum}
 			</h5>`;
        calcForm.reset();
        break;
      case "Division":
        result.innerHTML = `<h5 class="alert-success">
 			  ${firstNum} / ${secondNum} = 
 			   ${firstNum / secondNum}
 			</h5>`;
        calcForm.reset();
        break;
    }
  }
}
