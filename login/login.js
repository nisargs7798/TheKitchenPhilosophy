
var profileDetails= {};
window.onload = function () {

    function changeImage() {  
        var BackgroundImg=["image1.jpg",
            "image2.jpg",
            "image3.jpg",
            "image4.jpg",
            "image6.jpg"
        ];
        var i = Math.floor((Math.random() * 4));
        document.body.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
    }
    window.setInterval(changeImage, 2000);
}
function openSignup(){  
    window.open("file:////C:\Users\RAHUL\Desktop\WebProgramming\Flogin/Signup.html#","_self");
   }  


   function signUp(fname, lname, password,mail) {
       profileDetails['fname'] = fname;
       profileDetails['lname'] = lname;
       profileDetails['password'] = password;
       profileDetails['mail'] = mail;
       window.open("file:///C:\Users\RAHUL\Desktop\WebProgramming\Flogin/SignupSuccess.html#","_self");
   }