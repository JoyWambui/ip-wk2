 function akanName(){
  var d = parseInt(document.getElementById("selectDay").value);
  var m = parseInt(document.getElementById("selectMonth").value);
  var y = parseInt(document.getElementById("selectYear").value);
  var yearNumber = y%100;
  var centuryNumber = parseInt(y/100);
  let result = parseInt((d + ((13*(m + 1))/5) + yearNumber + (yearNumber/4) + (centuryNumber/4) + (5*centuryNumber))%7)
  var akanMale =[Kwame,Kwasi,Kwadwo,Kwabena,Kwaku,Yaw,Kofi]
  var akanFemale= [Ama,Akosua,Adwoa,Abenaa,Akua,Yaa,Afua]
  var selectMale= document.getElementById("male").checked;
  var selectFemale= document.getElementById("female").checked;
}


