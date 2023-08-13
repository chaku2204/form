
document.getElementById("my-form").addEventListener("submit",validation,false);

async function validation(e) {
     var name = document.getElementById("name").value;
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var confirmpass = document.getElementById("conpass").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var emails = document.getElementById("emails").value;
    document.getElementById("Name").innerHTML = "";
    document.getElementById("emailids").innerHTML ="";
    document.getElementById("username").innerHTML ="";
    document.getElementById("passwords").innerHTML ="";
    document.getElementById("confrmpass").innerHTML ="";
    document.getElementById("mobileno").innerHTML ="";
   
    if (name == "") {
      document.getElementById("Name").innerHTML =
        " ** Please fill the Name field";
        e.preventDefault();
    }

    if (emails == "") {
      document.getElementById("emailids").innerHTML =
        " ** Please fill the email id field";
        e.preventDefault();
        
    }
    else if (emails.indexOf("@") <= 2) {
      document.getElementById("emailids").innerHTML = " ** Invalid Email";
      e.preventDefault();
    }
    else if (
      emails.charAt(emails.length - 4) != "." &&
      emails.charAt(emails.length - 3) != "."
    ) {
      document.getElementById("emailids").innerHTML = " ** Invalid Email";
      e.preventDefault();
    }
    // else if(dataemailuser.email==false){
    //   document.getElementById("emailids").innerHTML = "already email exist";
    //   e.preventDefault();
    // }
   
    if (user == "") {
      document.getElementById("username").innerHTML =
        " ** Please fill the username field";
        e.preventDefault();
    }
    else if(user.length <= 3 || user.length > 20) {
      document.getElementById("username").innerHTML =
        " ** Username lenght must be between 3 and 20";
        e.preventDefault();
    }else if(!isNaN(user)) {
      document.getElementById("username").innerHTML =
        " ** only characters are allowed";
        e.preventDefault();
    }

    if (pass == "") {
      document.getElementById("passwords").innerHTML =
        " ** Please fill the password field";
        e.preventDefault();
    }
    else if (pass.length <= 5 || pass.length > 20) {
      document.getElementById("passwords").innerHTML =
        " ** Passwords lenght must be between  5 and 20";
        e.preventDefault();
    }

    if (confirmpass == "") {
      document.getElementById("confrmpass").innerHTML =
        " ** Please fill the confirmpassword field";
        e.preventDefault();
    }

    else if (pass != confirmpass) {
      document.getElementById("confrmpass").innerHTML =
        " ** Password Mismatch";
        e.preventDefault();
     
    }

    if (mobileNumber == "") {
      document.getElementById("mobileno").innerHTML =
        " ** Please fill the mobile NUmber field";
        e.preventDefault();
    }
    else if (isNaN(mobileNumber)) {
      document.getElementById("mobileno").innerHTML =
        " ** user must write digits only not characters";
        e.preventDefault();
      
    }
    else if (mobileNumber.length!=10) {
      document.getElementById("mobileno").innerHTML =
        " ** Mobile Number must be 10 digits only";
        e.preventDefault();
    }

  
    

}


