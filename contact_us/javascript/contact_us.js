//Use js innerHTML to create title and description is this page
let title = document.getElementById('mainheader');
let description = document.getElementById('mainp');
title.innerHTML = "Get In Touch";
description.innerHTML = "We're here for you, and we're wearing our thinking caps. Fill in the form below and one of our team member will reach you as soon as possible.";

// Whenever user click on submit button, this will validate the whole form
document.getElementById("button").onclick=function(){
    validateWholeForm();
} 

// Set a pattern for name and email and phone (if need)
let namePattern = /^[a-zA-Z]{2,30}$/;
let emailPattern = /^\w([\.-]?\w+)*@\w([\.-]?\w+)*(\w{2,3})+$/;
let phonePattern = /^[0-9]{10}$/;

//The function to validate all input, occurs when button is clicked
//Will detect if there's null on required input. If yes, validate. If no, still validate(To show "Verified"), then put content into local storage, then call a confirm reading from local storage to show user what he/she input just now.
function validateWholeForm(){
    let email = document.getElementById('Email');
    let FirstName = document.getElementById('FirstName');
    let LastName = document.getElementById('LastName');
    let message = document.getElementById('Message');
    let Regarding = document.getElementById('Regarding').value;
    if((email.value == "")||(FirstName.value == "")||(message.value == "")||(Regarding.value == "")||(LastName.value == "")||(!emailPattern.test(email.value))||(!namePattern.test(LastName.value))||(!namePattern.test(FirstName.value)))
    {
        firstNameValidation();
        lastNameValidation();
        emailValidation();
        messageValidation();
    }
    else
    {
        firstNameValidation();
        lastNameValidation();
        emailValidation();
        messageValidation();
        $(document).ready(function() {
            //alert(localStorage.getItem('name'));
            //localStorage.removeItem('name');
            $('#button').click(function() {
        
                // add task to web storage
          
                let fName = document.getElementById('FirstName').value;
                localStorage.setItem('fName', fName);
        
                let lName = document.getElementById('LastName').value;
                localStorage.setItem('lName', lName);
        
                let Email = document.getElementById('Email').value;
                localStorage.setItem('Email', Email);
        
                let Regarding = document.getElementById('Regarding').value;
                localStorage.setItem('Regarding', Regarding);
        
                let Message = document.getElementById('Message').value;
                localStorage.setItem('Message', Message);
          
                let form = localStorage.contactForm || ''; // default value of empty string
                localStorage.contactForm = form.concat(task, '\n');
          
                // clear task text box and re-display tasks
                //textbox.val('');
                //$('#task_list').val(localStorage.C15tasks);
                //textbox.focus();
            })
        });
        confirm("\n"
                + "Please confirm the info you provide: " 
                +"\nFirst Name:       "+localStorage.getItem('fName')
                +"\nLast Name:       "+localStorage.getItem('lName')
                +"\nEmail:               "+localStorage.getItem('Email')
                +"\nRegrading:       "+ localStorage.getItem('Regarding')
                +"\nYour message: "+ localStorage.getItem('Message'));
    }
}

// Use an eventlistener to make check whenever user is typing
//document.getElementById('FirstName').addEventListener("keyup", firstnamevalidation());
//document.getElementById('LastName').addEventListener("change", lastnamevalidation());

// Email Validatoin
function emailValidation(){
        let email = document.getElementById('Email');
        // if pattern not match ---Strange, my browser has an auto check for email, and when this happen, the placeholder above work;
        if (email.value=='')
        {
            email.placeholder=" Email is required !";
            email.classList.add('EmptyWarning');
        }
        else if (!emailPattern.test(email.value))
            {
                document.getElementById("emailvalidation").innerHTML="Email format incorrect!";
                document.getElementById("emailvalidation").classList.add('FormatWarning');
            }
            else
            {
                document.getElementById("emailvalidation").innerHTML=" Verified";
                document.getElementById("emailvalidation").classList.add('FormatVerified');
            }
}

// Lastname Validation
function lastNameValidation(){
        let LastName = document.getElementById('LastName');
        //if null --
        if (LastName.value == '')
        {
            LastName.placeholder=" Last Name is required !";
            LastName.classList.add('EmptyWarning');
        }
        //else if not match pattern -- 
    else if (!namePattern.test(LastName.value))
        {
            document.getElementById("lastnamevalidation").innerHTML="Must be characters!";
            document.getElementById("lastnamevalidation").classList.add('FormatWarning');
        }
        else
        {
            document.getElementById("lastnamevalidation").innerHTML=" Verified";
            document.getElementById("lastnamevalidation").classList.add('FormatVerified');
        }
}

//Firstname Validation
function firstNameValidation(){
        let FirstName = document.getElementById('FirstName');
        //if null
        if (FirstName.value == '')
        {
            FirstName.placeholder=" First Name is required !";
            FirstName.classList.add('EmptyWarning')
        }
        //else if not match pattern -- not working
        else if (!namePattern.test(FirstName.value))
            {
                document.getElementById("firstnamevalidation").innerHTML="Must be characters!";
                document.getElementById("firstnamevalidation").classList.add('FormatWarning');
            }
            else
            {
                document.getElementById("firstnamevalidation").innerHTML=" Verified";
                document.getElementById("firstnamevalidation").classList.add('FormatVerified');
            }
    }

//Message Validation (Don't have a format validation so don't need Format Warning as above)
function messageValidation(){
    let message = document.getElementById('Message');
    //if null
    if (message.value == '')
    {
        message.placeholder = "\n   We are listening ~"
        message.classList.add('EmptyWarning')
    }
}

//Local Storage

$(document).ready(function() {
    //alert(localStorage.getItem('name'));
    //localStorage.removeItem('name');
    $('#button').click(function() {

        // add task to web storage
  
        let fName = document.getElementById('FirstName').value;
        localStorage.setItem('fName', fName);

        let lName = document.getElementById('LastName').value;
        localStorage.setItem('lName', lName);

        let Email = document.getElementById('Email').value;
        localStorage.setItem('Email', Email);

        let Regarding = document.getElementById('Regarding').value;
        localStorage.setItem('Regarding', Regarding);

        let Message = document.getElementById('Message').value;
        localStorage.setItem('Message', Message);
  
        let form = localStorage.contactForm || ''; // default value of empty string
        localStorage.contactForm = form.concat(task, '\n');
  
        // clear task text box and re-display tasks
        //textbox.val('');
        //$('#task_list').val(localStorage.C15tasks);
        //textbox.focus();
    })
});



//Animation when scroll down
$(window).scroll(function() {
    $(".middle").each( function() {
        if( $(window).scrollTop() > $(this).offset().top - 500 ) {
            $(this).css('opacity',1);
        } else {
            $(this).css('opacity',0);
        }
    }); 
});