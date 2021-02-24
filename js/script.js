window.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed!");

  function akanName(event){
    event.preventDefault();
    console.log("Form submitted");
    let dateSelected = document.querySelector("#selectDate").value;
    let newDate = new Date(dateSelected);
    console.log(newDate);
    let day = newDate.getDay();
    console.log(day);
    let akanMale =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
      console.log("maleakan", akanMale);
    let akanFemale= ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
      console.log("femaleakan", akanFemale);
    let maleCheck= document.querySelector("#selectMale").checked;
      console.log("malecheck", maleCheck);
    let femaleCheck= document.querySelector("#selectFemale").checked;
      console.log("femalecheck", femaleCheck);
    if(maleCheck ===true){
      console.log(akanMale[day]);
      alert("Your Akan name is: " + akanMale[day]);
    }else if(femaleCheck === true){
        console.log(akanFemale[day])
        alert("your Akan name is: " + akanFemale[day]);
    }
  }
  let akanForm = document.querySelector("#akanForm");
  akanForm.addEventListener("submit", akanName);
});

 