var myIndex = 0;
    carousel();
    
    function carousel() {
      let i;
      
      //get element by mySlides id

      let x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        //display the ith image
        x[i].style.display = "none";  
      }
      
      //increment index of image in carousel
      myIndex++;

      //logic to display the next image inside the carousel
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      
      setTimeout(carousel, 2000); // Change image every 2 seconds
    }