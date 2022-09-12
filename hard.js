const quizData = [
    {
        question: "1) Differentiate sin3x ?",
        a: "3cos3x",
        b: "-3cos3x²",
        c:"cos3x",
        d: "sin3x",
        correct: "a",
    },
    {
        question: "2)Differentiate e^3x?",
        a: "3e^3x",
        b: "4e^3x",
        c: "5e^3x",
        d: "e^3x / 3",
        correct: "a",
    },
    {
        question: "3) Integration of 2x ?",
        a: "x^2",
        b: "2",
        c: "4x",
        d: "x^2/2",
        correct: "a",
    },
    {
        question: "4)sin(270) =  ? ",
        a: "-1",
        b: "0",
        c: "-√3",
        d: "1",
        correct: "a",
    },
    {
        question: "5)Which of these is not a moon of saturn ? ",
        a: "Titan",
        b: "Europa",
        c: "Moon",
        d: "Baskins",
        correct: "a",
    },
    {
        question: "6) Who won the asia cup 2022 ? ",
        a: "Srilanka",
        b: "Pakistan",
        c: "India",
        d: "Hong Kong",
        correct: "a",
    },
    {
        question: "7) A relation R in a set A is called _______, if (a1, a2) ∈ R implies (a2, a1) ∈ R, for all a1, a2 ∈ A. ? ",
        a: "symmetric",
        b: "transitive",
        c: "equivalence",
        d: "non-symmetric",
        correct: "a",
    },
    {
        question: "8) ∫x2 . dx =  with limits (0,2) ? ",
        a: "2",
        b: "8",
        c: "8/3",
        d: "None Of these",
        correct: "c",
    },
    {
        question: "9)  ∫cot²x dx equals to ? ",
        a: "cot x – x + C",
        b: "-cot x – x + C",
        c: "cot x + x + C",
        d: "-cot x + x + C",
        correct: "b",
    },
    {
        question: "10) The position vector of the point (1, 2, 0) is ? ",
        a: " i + j +k",
        b: "i + 2j + k",
        c: " i + 2j",
        d: "2j + k",
        correct: "c",
    },
    {
        question: "11) What is the magnitude of vector -3i + 5j?  ? ",
        a: "√34",
        b: "√32",
        c: "√8",
        d: "√16",
        correct: "a",
    },
    {
        question: "12) If l, m, n are the direction cosines of a line, then  ? ",
        a: "l^2+ m^2+ 2n^2 = 1",
        b: "l^2+ 2m^2+ n^2 = 1",
        c: "l^2+ m^2+ n^2 = 1",
        d: "None of these",
        correct: "c",
    },
    {
        question: "13) What is the order of differential equation y’’ + 5y’ + 6 = 0? ? ",
        a: "0",
        b: "1",
        c: "2",
        d: "None Of these",
        correct: "1",
    },
    {
        question: "14) The number of arbitrary constants in the particular solution of a differential equation of third order is ? ",
        a: "3",
        b: "2",
        c: "1",
        d: "0",
        correct: "d",
    },
    {
        question: "15) What is the general equation of parabola ? ",
        a: "y^2 = 4ax",
        b: "y = 4ax",
        c: "-y^2 = 4ax",
        d: "None of these",
        correct: "a",
    },
    {
        question: "16) sin^–1 (x) + sin^–1 (y) =  ? ",
        a: "π/2",
        b: "1",
        c: "0",
        d: "None Of these ",
        correct: "a",
    },
    {
        question: "17) What will be the change in the force of attraction between two bodies if the distance between them is doubled? ? ",
        a: "No change",
        b: " Becomes double",
        c: " Becomes less by four times",
        d: "Becomes nine times",
        correct: "c",
    },
    {
        question: "18) What is the S.I unit of Pressure? ",
        a: "pascal",
        b: "barr",
        c: "atm",
        d: "psi",
        correct: "a",
    },
    {
        question: "19) What is the formula of OHM LAW? ",
        a: " v = u + at",
        b: " V = IR",
        c: " V = I^2 * R *T",
        d: "None of these",
        correct: "b",
    },
    {
        question: "20) Which of these is a natural semiconductor ? ",
        a: "br",
        b: "Si",
        c: "Ge",
        d: "Both Si and Ge",
        correct: "d",
    },
    {
        question: "21) The person who conducts sales at which goods are sold to the persons making the highest bid is called ? ",
        a: "Bursar",
        b: "Conjurer",
        c: "Auctioneer",
        d: "Chairman",
        correct: "c",
    },
    {
        question: "22) If ___ i would not lose temper ? ",
        a: "I were you",
        b: "I was you",
        c: "I am not you",
        d: "i am you",
        correct: "a",
    },
    {
        question: "23) The train ___ as fast as the bus  ? ",
        a: "Went",
        b: "Running",
        c: "Moves",
        d: "Going",
        correct: "a",
    },
    {
        question: "24) Who is the author of book Wings Of Fire? ",
        a: "Mahatma Gandhi",
        b: "Dr APJ Abdul Kalam",
        c: "Narendra Modi",
        d: "Man Mohan Singh",
        correct: "b",
    },
    {
        question: "25) Whoes birthday is celebrated every year on 5 Sept ? ",
        a: "Sardar Vallabhbhai Patel",
        b: "Jawaharlal Nehru ",
        c: "Sarvepalli Radhakrishnan",
        d: "Dr APJ Abdul Kalam",
        correct: "c",
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
           let percentage = (score/50 )*100 ;

           if(percentage>=50){
            quiz.innerHTML = `
              <h2>You have scored ${score} out of 50 marks </h2>
              <h2> You have secured ${percentage} %  in the exam 
              You have passed the Exam </h2> `
           }else{
            quiz.innerHTML = `
            <h2>You have scored ${score} out of 50 marks </h2>
            <h2> You have secured ${percentage} %  in the exam 
            You have failed the Exam </h2> `
           }

           
       }

    
    }
})
