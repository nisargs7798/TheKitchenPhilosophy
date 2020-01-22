// Array of  Content
const source = [
    {
        "description": "A domesticated form of the wild carrot, Daucus carota, native to Europe and southwestern Asia...",
        "imageSrc": "Images/food_images/food1.jpg"
    },
    {
        "description": "Under the crisp juicy flesh of a lychee fruit is white or pinkish, translucent and glossy like the consistency of a grape, but the taste is sweeter.",
        "imageSrc": "Images/food_images/food2.jpg"
    },
    {
        "description": "A domesticated form of the wild carrot, Daucus carota, native to Europe and southwestern Asia...",
        "imageSrc": "Images/food_images/food3.jpg"
    },
    {
        "description": "A pancake (or hotcake, griddlecake, or flapjack, not to be confused with oat bar flapjacks) is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter.",
        "imageSrc": "Images/food_images/food4.jpg"
    },
    {
        "description": "The cucumber is a creeping vine that roots in the ground and grows up trellises or other supporting frames, wrapping around supports with thin, spiraling tendrils.",
        "imageSrc": "Images/food_images/food5.jpg"
    },
    {
        "description": "Classified as an oily fish, salmon is considered to be healthy due to the fish's high protein, high omega-3 fatty acids, and high vitamin D content.",
        "imageSrc": "Images/food_images/food6.jpeg"
    },
    {
        "description": "French fries primarily contain carbohydrates (mostly in the form of starch) and protein from the potato, and fat absorbed during the deep-frying process. Salt, which contains sodium, is almost always applied as a surface seasoning.",
        "imageSrc": "Images/food_images/food7.jpg"
    },
    {
        "description": "Could you believer that: annually, Americans consume 20 billion hot dogs!",
        "imageSrc": "Images/food_images/food8.jpg"
    }
];


//Now that we have the Array of content, let's fill them into HTML one by one

//Section 1 
let section1img = document.getElementById('img1');
let section1p = document.getElementById('p1');
section1img.setAttribute("src", source[0].imageSrc);
section1p.innerHTML = source[0].description;

//Section 2
let section2img = document.getElementById('img2');
let section2p = document.getElementById('p2');
section2img.setAttribute("src", source[1].imageSrc);
section2p.innerHTML = source[1].description;

//Section 3
let section3img = document.getElementById('img3');
let section3p = document.getElementById('p3');
section3img.setAttribute("src", source[2].imageSrc);
section3p.innerHTML = source[2].description;

//Section 4
let section4img = document.getElementById('img4');
let section4p = document.getElementById('p4');
section4img.setAttribute("src", source[3].imageSrc);
section4p.innerHTML = source[3].description;

//Section 5
let section5img = document.getElementById('img5');
let section5p = document.getElementById('p5');
section5img.setAttribute("src", source[4].imageSrc);
section5p.innerHTML = source[4].description;

//Section 6
let section6img = document.getElementById('img6');
let section6p = document.getElementById('p6');
section6img.setAttribute("src", source[5].imageSrc);
section6p.innerHTML = source[5].description;

//Section 7
let section7img = document.getElementById('img7');
let section7p = document.getElementById('p7');
section7img.setAttribute("src", source[6].imageSrc);
section7p.innerHTML = source[6].description;

//Section 8
let section8img = document.getElementById('img8');
let section8p = document.getElementById('p8');
section8img.setAttribute("src", source[7].imageSrc);
section8p.innerHTML = source[7].description;

/*
let imgIDArray = [ "img1", "img2" ];
let pIDArray = [ "p1", "p2" ];
let imgVarArray = ["sectionimg1", "sectionimg2"];
let pVarArray = ["sectionp1", "sectionp2"];
function createcontent(){

    for(let i=0; i<imgIDArray.length;i++)
    {
        let imgVarArray[i] = document.getElementById(imgIDArray[i]);
        let pVarArray[i] = document.getElementById(pIDArray[i]);
        sectionimg.setAttribute("src", source[i].imageSrc);
        sectionp.innerHTML = source[i].description;
    }

}
*/

// This is jQuery of the animation: Section will show when user scroll down to a certain position. And they will automatically disappear when user scroll up to that certain position;

$(window).scroll(function() {
    $(".foodhide").each( function() {
        if( $(window).scrollTop() > $(this).offset().top - 450 ) {
            $(this).css('opacity',1);
        } else {
            $(this).css('opacity',0);
        }
    }); 
});