function check(){
  document.getElementById('output').innerHTML = ('enter a number.')
  inputText = document.getElementById('input').value;
  var n = parseInt(inputText);
  var flag = 0;
  var i = 2;
  for(i; i < n; i++){
    if(n % i == 0){
      flag = 1;
      break;
    }
  }
  if (flag == 1){
    document.getElementById('output').innerHTML = ('the number is not prime')
  }
  else{
    document.getElementById('output').innerHTML = ('the number is prime')
  }
}
