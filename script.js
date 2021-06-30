console.log('hello!');

function sum() {
  var number1 = document.getElementById('num1').value;
  var number2 = document.getElementById('num2').value;
  var output = document.getElementById('final_ans');
  var ans = parseInt(number1) + parseInt(number2);

  output.innerHTML = 'The addition of two number is: ' + ans;
}

function sub() {
  var number1 = document.getElementById('num1').value;
  var number2 = document.getElementById('num2').value;
  var output = document.getElementById('final_ans');
  var ans = parseInt(number1) - parseInt(number2);

  output.innerHTML = 'The subtraction of two number is: ' + ans;
}

function mult() {
  var number1 = document.getElementById('num1').value;
  var number2 = document.getElementById('num2').value;
  var output = document.getElementById('final_ans');
  var ans = parseInt(number1) * parseInt(number2);

  output.innerHTML = 'The multiplication of two number is: ' + ans;
}

function divide() {
  var number1 = document.getElementById('num1').value;
  var number2 = document.getElementById('num2').value;
  var output = document.getElementById('final_ans');
  var ans = parseInt(number1) / parseInt(number2);

  output.innerHTML = 'The divison of two number is: ' + ans;
}
