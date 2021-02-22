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
    if (selectMale==true){
      if(result===0){
        alert("Your Akan name is " + akanMale[0]);    
      }else if(result===1){
        alert("Your Akan name is " + akanMale[1]);
      }else if(result===2){
        alert("Your Akan name is " + akanMale[2]);
      }else if(result===3){
        alert("Your Akan name is " + akanMale[3]);
      }else if(result===4){
        alert("Your Akan name is " + akanMale[4]);
      }else if(result===5){
        alert("Your Akan name is " + akanMale[5]);
      }else if(result===6){
        alert("Your Akan name is " + akanMale[6]);
      }
    }else  if (selectFemale==true)
    {
      if(result===0)
      {
        alert("Your Akan name is " + akanFemale[0]);
      }   else if(result===1)
      {
        alert("Your Akan name is " + akanFemale[1]);
      }   else if(result===2)
      {
        alert("Your Akan name is " + akanFemale[2]);
      }   else if(result===3)
      {
        alert("Your Akan name is " + akanFemale[3]);
      }   else if(result===4)
      {
        alert("Your Akan name is " + akanFemale[4]);
      }   else if(result===5)
      {
        alert("Your Akan name is " + akanFemale[5]);
      }   else if(result===6)
      {
        alert("Your Akan name is " + akanFemale[6]);
    }
 }
}

 