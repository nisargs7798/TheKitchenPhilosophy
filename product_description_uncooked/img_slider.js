$(document).ready(function(){
var images = ['images/carrot.jpg','images/carot2.jpg','images/nutrifacts.jpg'];
    
        var i = 0;
        document.getElementById("paneer_img").src = images[i];
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#paneer_img").fadeOut("slow", function () {
                document.getElementById("paneer_img").src = images[i];
                $(this).fadeIn("slow");
            });
        }, 5000);

    function dispData(){
        let HB = ['Help Prevent Cancer.', 'Promote Eye Health.', 'Might Enhance Hair Growth','Promote Skin Health ',' Regulate Blood Pressure','Boost Immunity','Strengthen Bones'];
        let temp = "";

        for(let i = 0; i < HB.length; i++){
            temp += "<li>" + HB[i] + "</li>";
        }
        document.getElementById("HB_Ul").innerHTML = temp;
        document.getElementById("carrot_desc").innerHTML = "The carrot is a root vegetable, usually orange in colour, though purple, black, red, white, and yellow cultivars exist. Carrots are a domesticated form of the wild carrot, Daucus carota, native to Europe and southwestern Asia. The plant probably originated in Persia and was originally cultivated for its leaves and seeds. The most commonly eaten part of the plant is the taproot, although the stems and leaves are eaten as well. The roots contain high quantities of alpha- and beta-carotene, and are a good source of vitamin K and vitamin B6, but the belief that eating carrots improves night vision is a myth put forward by the British in World War II to mislead the enemy about their military capabilities. Carrots are widely used in many cuisines, especially in the preparation of salads, and carrot salads are a tradition in many regional cuisines.";
    }
    
    dispData();
});