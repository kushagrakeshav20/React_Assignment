function square(value) {  
    return value * value;
  }
  
  function double(value) {
    return value * 2;
  }
  
  function composedValue(value) {
    return square(double(value));
  }
  
  var myValue = window.prompt("Enter value : ");
  console.log(composedValue(myValue));
  
  // var f1 = composedValue(square, double);
  // console.log(f1(5));