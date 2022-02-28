//form section
function validateForm(){

  var fullname = document.getElementById("fullname").value;
  var number = document.getElementById("number").value;
  var pincode = document.getElementById("pincode").value;
  var flatno = document.getElementById("flat").value;
  var location = document.getElementById("area").value;
  var landmark = document.getElementById("landmark").value;
  var town = document.getElementById("towncity").value;
   
  //validation for full name
  if(fullname.value == ""){
    document.getElementById('name').innerHTML = "Please enter your name";
  }
  if((fullname.length < 3) || (fullname.length > 20)){
    document.getElementById('name').innerHTML = "Character must be between 2 and 20";
  }
  if(!isNaN(fullname)){
    document.getElementById('name').innerHTML = "You have entered a number";
  }

 //validation for number
 if(isNaN(number)){
   document.getElementById('mobilenumber').innerHTML = "Mobile number should contain only numeric value";
 }
 if(number.value == ""){
  document.getElementById('mobilenumber').innerHTML = "Please enter your number";
} 
if((number.length < 10) || (number.length > 10)){
  document.getElementById('mobilenumber').innerHTML = "Number contain 10 digits only";
}

//validation for number
if(isNaN(pincode)){
  document.getElementById('pin').innerHTML = "pin number should contain only numeric value";
}
if(pincode.value == ""){
 document.getElementById('pin').innerHTML = "Please enter your pin code";
} 
if((pincode.length < 2) || (pincode.length > 10)){
 document.getElementById('pin').innerHTML = "not applicable";
}

 //validation for house no
 if(flatno.value == ""){
  document.getElementById('houseno').innerHTML = "Please enter your Flat, House no., Building, Company, Apartment";
}

//validation for location
if(location.value == ""){
  document.getElementById('location').innerHTML = " Please enter your Area, Colony, Street, Sector, Village";
}

//validation for landmark
if(landmark.value == ""){
  document.getElementById('mark').innerHTML = "Please enter your landmark";
}

//validation for town
if(town.value == ""){
  document.getElementById('town').innerHTML = "Please enter your town";
}

}



