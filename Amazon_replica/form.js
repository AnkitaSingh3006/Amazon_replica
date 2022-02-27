//Hamburger for lowerpart of header

const openNav = () => {
    document.getElementById('mySidenav').style.width ="280px";
  }

const closeNav = () => {
    document.getElementById('mySidenav').style.width ="0";
  }

 //form section

var fullname = document.getElementById("fullname");

function validateForm(){
 
    if(fullname.value == ""){
        console.log("empty");
    }
}
