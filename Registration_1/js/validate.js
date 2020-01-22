document.getElementById("btnSubmit").onclick = function(){
 
  
    if(validateName() === true && validateEmail() === true && validatePassword() === true){
        window.location.href = "../index.html"
    }
    
    
    
}
function validateName(){
    let fName = document.getElementById("fName");
    if(fName.value == ""){
        document.getElementById("errorName").innerHTML =  "Please enter name";
        return false;
    }
    else{
        document.getElementById("errorName").innerHTML = "";
        return true;
    }
}
function validateEmail(){
    let email = document.getElementById("email");
    var emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(email.value == ""){
        document.getElementById("errorEmail").innerHTML = "Please enter Email";
        email.focus;
        return false;
    }
    if (!emailPattern.test(email.value)) {
        document.getElementById("errorEmail").innerHTML = "Please provide a valid email address";
        email.focus;
        return false;
 }
    
    else{
        document.getElementById("errorEmail").innerHTML = "";
        return true;
    }

}
function validatePassword(){
    let password = document.getElementById("password");
    if(password.value == ""){
        document.getElementById("errorPassword").innerHTML = "Please enter Password";
        return false;
    }
    else{
        document.getElementById("errorPassword").innerHTML = "";
        return true;
    }
}
