var images = ['../images/back1.jpg','../images/back2.jpg','../images/Tomatoes.jpg'];
    $(function () {
        var i = 0;
        $("#dvImage").css("background-image", "url(images/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#dvImage").css("background-image", "url(images/" + images[i] + ")");
            

        }, 4000);
    });

