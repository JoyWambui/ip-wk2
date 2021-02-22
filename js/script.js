window.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed!");

  function akanName(event){
    event.preventDefault();
    console.log("Form submitted");
    let d = parseInt(document.querySelector("#selectDay").value);
      console.log("day", d);
    let m = parseInt(document.querySelector("#selectMonth").value);
      console.log("month", m);
    let y = parseInt(document.querySelector("#selectYear").value);
      console.log("year", y);
    let yearNumber = y%100;
      console.log("yearnumber", yearNumber);
    let centuryNumber = parseInt(y/100);
      console.log("centurynumber", centuryNumber);
    let weekDay =parseInt((d + ((13*(m + 1))/5) + yearNumber + (yearNumber/4) + (centuryNumber/4) + (5*centuryNumber))%7)-1;
      console.log("weekday", weekDay);
    let akanMale =["Kwame","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];
      console.log("maleakan", akanMale);
    let akanFemale= ["Ama","Akosua","Adwoa","Abenaa","Akua","Yaa","Afua"];
      console.log("femaleakan", akanFemale);
    let maleCheck= document.querySelector("#selectMale").checked;
      console.log("malecheck", maleCheck);
    let femaleCheck= document.querySelector("#selectFemale").checked;
      console.log("femalecheck", femaleCheck);
    if(maleCheck ===true){
      if(weekDay === 0){
        console.log("akanname",akanMale[0])
        alert("your Akan name is: " + akanMale[0]);
      }else if(weekDay === 1){
        console.log("akanname",akanMale[1])
        alert("your Akan name is: " + akanMale[1]);
      }else if(weekDay === 2){
        console.log("akanname",akanMale[2])
        alert("your Akan name is: " + akanMale[2]);
      }else if(weekDay === 3){
        console.log("akanname",akanMale[3])
        alert("your Akan name is: " + akanMale[3]);
      }else if(weekDay === 4){
        console.log("akanname",akanMale[4])
        alert("your Akan name is: " + akanMale[4]);
      }else if(weekDay === 5){
        console.log("akanname",akanMale[5])
        alert("your Akan name is: " + akanMale[5]);
      }else if(weekDay === 6){
        console.log("akanname",akanMale[6])
        alert("your Akan name is: " + akanMale[6]);
      }
    }else if(femaleCheck === true){
      if(weekDay === 0){
        console.log("akanname",akanFemale[0])
        alert("your Akan name is: " + akanFemale[0]);
      }else if(weekDay === 1){
        console.log("akanname",akanFemale[1])
        alert("your Akan name is: " + akanFemale[1]);
      }else if(weekDay === 2){
        console.log("akanname",akanFemale[2])
        alert("your Akan name is: " + akanFemale[2]);
      }else if(weekDay === 3){
        console.log("akanname",akanFemale[3])
        alert("your Akan name is: " + akanFemale[3]);
      }else if(weekDay === 4){
        console.log("akanname",akanFemale[4])
        alert("your Akan name is: " + akanFemale[4]);
      }else if(weekDay === 5){
        console.log("akanname",akanFemale[5])
        alert("your Akan name is: " + akanFemale[5]);
      }else if(weekDay === 6){
        console.log("akanname",akanFemale[6])
        alert("your Akan name is: " + akanFemale[6]);
      }
    }
  }
  let akanForm = document.querySelector("#akanForm");
  akanForm.addEventListener("submit", akanName);
});

 