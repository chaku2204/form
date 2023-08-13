document.getElementsByClassName("bg-light")[0].addEventListener("submit",validation,false);

function validation(e) {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if (user == "") {
      document.getElementById("username").innerHTML =
        " ** Please fill the username field";
        e.preventDefault();
    }
  
   

    if (pass == "") {
      document.getElementById("passwords").innerHTML =
        " ** Please fill the password field";
        e.preventDefault();
    }


    
  }