console.log('hello!');

// function sum() {
//   var number1 = document.getElementById('num1').value;
//   var number2 = document.getElementById('num2').value;
//   var output = document.getElementById('final_ans');
//   var ans = parseInt(number1) + parseInt(number2);

//   output.innerHTML = 'The addition of two number is: ' + ans;
// }

// function sub() {
//   var number1 = document.getElementById('num1').value;
//   var number2 = document.getElementById('num2').value;
//   var output = document.getElementById('final_ans');
//   var ans = parseInt(number1) - parseInt(number2);

//   output.innerHTML = 'The subtraction of two number is: ' + ans;
// }

// function mult() {
//   var number1 = document.getElementById('num1').value;
//   var number2 = document.getElementById('num2').value;
//   var output = document.getElementById('final_ans');
//   var ans = parseInt(number1) * parseInt(number2);

//   output.innerHTML = 'The multiplication of two number is: ' + ans;
// }

// function divide() {
//   var number1 = document.getElementById('num1').value;
//   var number2 = document.getElementById('num2').value;
//   var output = document.getElementById('final_ans');
//   var ans = parseInt(number1) / parseInt(number2);

//   output.innerHTML = 'The divison of two number is: ' + ans;
// }

function result(action) {
  var number1 = document.getElementById('num1').value;
  var number2 = document.getElementById('num2').value;
  var output = document.getElementById('final_ans');

  if (action == 'add') {
    var answer = sum(number1, number2);
  } else if (action == 'sub') {
    var answer = sub(number1, number2);
  } else if (action == 'mult') {
    var answer = multiply(number1, number2);
  } else {
    var answer = divide(number1, number2);
  }

  output.innerHTML = 'The result is: ' + answer;
}

function sum(a, b) {
  return parseInt(a) + parseInt(b);
}

function sub(a, b) {
  return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}
$(document).ready(function() {
  $('.box').click(function() {
    $(this).css('backgroundColor', 'red');
  });
});
