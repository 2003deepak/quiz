var questions =[
    {
        num : 1,
        question : "What does HTML stand for?",
        answer : "Hyper Text Markup Language",
        option : [
            "Hyper Text Multiple Language",
            "Hyper Text Preprocessor",
            "Hyper Tool Multi Language",
            "Hyper Text Markup Language"
        ]
    },
    {
num: 2,
question: "What does CSS stand for?",
answer: "Cascading Style Sheet",
option: [
"Computer Style Sheet",
"Cascading Style Sheet",
"Colorful Style Sheet",
"Common Style Sheet"
]
},
{
num: 3,
question: "What does PHP stand for?",
answer: "Hypertext Preprocessor",
option: [
"Hypertext Preprocessor",
"Hypertext Programming",
"Hometext Preprocessor",
"Hypertext Preprogramming"
]
},

{
num: 4,
question: "What does XML stand for?",
answer: "eXtensible Markup Language",
option: [
"eXTra Multi-Program Language",
"eXecutable Multiple Language",
"eXtensible Markup Language",
"eXamine Multiple Language"
]
},
{
num: 5,
question: "What does SQL stand for?",
answer: "Structured Query Language",
option: [
"Statement Question Language",
"Stylesheet Query Language",
"Stylish Question Language",
"Structured Query Language"
]
},

];

const question = document.getElementById("question");
const option0 = document.getElementById("option0");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");



let question_number = 0 ;
let finalscore = 0 ;

const loadquestion = () =>{

    question.innerHTML = questions[question_number ].question ;

    // option0.innerText = question[question_number].option[0];
    // option1.innerText = question[question_number].option[1];
    // option2.innerText = question[question_number].option[2];
    // option3.innerText = question[question_number].option[3];

    question_number++ ;
}
