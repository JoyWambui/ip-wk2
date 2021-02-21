var weekDay = function(number1,number2,number3,number4){
  return result
  };
  var number1 = parseInt(prompt("Day of birth"));
  var number2 = parseInt(prompt("Month of birth"));
  var number3 = parseInt(prompt("Year of birth"))%100;
  var number4 = parseInt(prompt("Year of birth"))/100;
  let result = parseInt((number1 + ((13*(number2 + 1))/5) + number3 + (number3/4) + (number4/4) + (5*number4))%7)
  weekDay(number1, number2, number3, number4);
  alert("weekday = " + result);
