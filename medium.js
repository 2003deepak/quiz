const quizData = [
    {
        question: "1) 6÷2(1+2) = ? ",
        a: "9",
        b: "6",
        c: "1",
        d: "2.75",
        correct: "a",
    },
    {
        question: "2)  ∫ sin x dx = ?",
        a: "-cos(x) + c ",
        b: "cos(x) + c ",
        c: "cosec(x)+cot(x) +c ",
        d: "None of These",
        correct: "a",
    },
    {
        question: "3) What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "4)  The nth term of an A.P. 5, 2, -1, -4, -7 … is ? ",
        a: "2n + 5",
        b: "2n – 5",
        c: "8 – 3n",
        d: "3n – 8",
        correct: "b",
    },
    {
        question: "5) cos2A + sin2A =  ? ",
        a: "0",
        b: "1",
        c: "2",
        d: "1/2",
        correct: "b",
    },
    {
        question: "6) when did india won its first world cup?",
        a: "1985",
        b: "1983",
        c: "2011",
        d: "2009",
        correct: "b",
    },
    {
        question: "7)Professional twenty 20 cricket league of india called ?",
        a: "Indian Premier League",
        b: "Gokuldham Premier League",
        c: "Ranji trophy",
        d: "World Cricket Championship",
        correct: "a",
    },
    {
        question: "8) The probability of an event is 3/7. Then probability of not happening it is ?  ",
        a: "7/3",
        b: "6/7",
        c: "5/7",
        d: "4/7",
        correct: "d",
    },
    {
        question: "9) What is the formula of Theory of relativity ? ",
        a: "F = mc^3 ",
        b: "E = mc^2 ",
        c: "F = mgh ",
        d: "F = u^2 + 2as ",
        correct: "b",
    },
    {
        question: "10) cos(x+y)= ? ",
        a: "sin(x)cos(y)–cos(x)sin(y)",
        b: "cos(x)cos(y)+sin(x)sin(y)",
        c: "cos(x)cos(y)–sin(x)sin(y)",
        d: "cos(x)cos(y)–cosec(x)sin(y)",
        correct: "b",
    },
    {
        question: " 11) What is the circumference of semicircle ? ",
        a: "2πr",
        b: "πr",
        c: "r(π+2)",
        d: "πr/3",
        correct: "c",
    },
    {
        question: "12) What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "13) What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "14) What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "15) What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "16) What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "17) What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "18) What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "19) What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "20) What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "21) What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "22) What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "23) What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "24) What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "25) What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score = score + 2 ;
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           let percentage = (score/8 )*100 ;
           quiz.innerHTML = `
           <h2>You have scored ${score} out of 50 marks </h2>
           <h2> You have secured ${percentage} %  in the exam </h2> `
       }
    }
})