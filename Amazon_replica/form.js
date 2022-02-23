let fullname = document.getElementById("fullname");
let number = document.getElementById("number");

function validateForm(){
    if(fullname.value == ""){
        console.log("empty");
    }
    return false;
}
