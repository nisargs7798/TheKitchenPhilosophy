//Array containing complete questions and answers
let quesAnsArr = [
    {
        "id": 1,
        "question": "Q. Can these ingredients be found in Canada?",
        "answer": "A. Yes, they are available in most Indian and Chinese food stores"
    },
    {
        "id": 2,
        "question": "Q. Do you have a restaurants where these foods are readily available",
        "answer": "A. For now , we do not have but maybe in the futue"
    },
    {
        "id": 3,
        "question": "Q. Do you offer catering services?",
        "answer": "A. No."
    },
    {
        "id": 4,
        "question": "Q. Do you have a physical office?",
        "answer": "A. No."
    },
    {
        "id": 5,
        "question": "Q. Can you design a special meal plan for diabetic patients?",
        "answer": "A. No."
    },
    {
        "id": 6,
        "question": "Q. Do you offer catering services?",
        "answer": "A. No."
    },

];

//main accordion wrapper elememt which holds all the questions and answers
let questionsDiv = document.getElementById('div7');
for (let questionIndex = 0; questionIndex < quesAnsArr.length; questionIndex++) {

    //single question and answer div
    let questionDiv = document.createElement("div");
    if (questionIndex == 0) {
        questionDiv.className = "accordionItem open";
    }
    else {
        questionDiv.className = "accordionItem close";
    }

    //single question header
    let questionHeader = document.createElement('h2');
    questionHeader.className = "accordionItemHeading";
    questionHeader.innerHTML = quesAnsArr[questionIndex]["question"];
    questionHeader.id = "qpara" + quesAnsArr[questionIndex]["id"];

    //single answer content
    let answerContent = document.createElement('div');
    answerContent.className = "accordionItemContent";
    answerContent.innerHTML = quesAnsArr[questionIndex]["answer"];
    answerContent.style.color = "black";

    //append question header and answer content to div containing single question and answer
    questionDiv.appendChild(questionHeader);
    questionDiv.appendChild(answerContent);

    //append single question and answer div to the wrapper
    questionsDiv.appendChild(questionDiv);
} 

//add event listener to every question header
let accItem = document.getElementsByClassName('accordionItem');
let accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}

//toggle logic of accordion
function toggleItem() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}