const akanName = () => {
  if(document.getElementsByName("gender").checked === false){
    alert("Please choose your gender");
    return false;
  }
  else{
    return true;
  }
}



