function akanName(){
  let day = parseInt(document.getElementById("day").value);
  if(document.getElementById("day") === ""){
    alert("Please input day!");
  } else if (document.getElementById("day").value <= 0 || document.getElementById("day").value >31){
    document.getElementById("daydemo").innerHTML = "Out of range!"
    return false;
  }
  else{
    return true;
  }
}
akanName();


