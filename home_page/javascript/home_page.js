
// Initialize of variables
let imageCooked = document.getElementById("section1");
let imageUncooked = document.getElementById("section2");
let counter = 0;

//Set up two arrays of images -- one for uncooked, one for cooked
// Cooked first
let imgCookedArray = new Array("../../home_page/food_images_array/Cooked/1.jpg", "../../home_page/food_images_array/Cooked/2.jpg", "../../home_page/food_images_array/Cooked/3.jpg", "../../home_page/food_images_array/Cooked/4.jpg", "../../home_page/food_images_array/Cooked/5.jpg");

let imgUncookedArray = new Array("../../home_page/food_images_array/Uncooked/1.jpg", "../../home_page/food_images_array/Uncooked/2.jpg", "../../home_page/food_images_array/Uncooked/3.jpg", "../../home_page/food_images_array/Uncooked/4.jpg", "../../home_page/food_images_array/Uncooked/5.jpg", );

//The fuction which will change the background src automatically 
function changeImages(imgArray){
    if (counter >= imgUncookedArray.length)
    {
        counter = 0;
    }
    imageCooked.style.backgroundImage="url('"+imgCookedArray[counter]+"')";
    imageUncooked.style.backgroundImage="url('"+imgUncookedArray[counter]+"')";
    counter++;
}

// Use a setInterval function to automatically call the function 
setInterval("changeImages()",3000);


//Now use js to create the description in home page
let description = document.getElementById("description");
description.innerHTML="Enjoy looking at, making, eating and knowing the essence of delicious foods? Here let's explore the Love for food Nutritiously...";

let title = document.getElementById("HomePage_Title");
title.innerHTML="The Kitchen Philosophy";
