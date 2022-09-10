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
        question: "5) cos^2(A) + sin^2(A) =  ? ",
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
        question: "12) What is the formula of propane ? ",
        a: "C₄H₁₀",
        b: "CH₄",
        c: "C₃H₈",
        d: "C₄H₁₀",
        correct: "c",
    },
    {
        question: "13) He was murdered in cold blood , The terms cold blood mean  ?",
        a: "thoughtlessly",
        b: "deliberately",
        c: "unfeelingly",
        d: "coolly",
        correct: "c",
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
        question: "15) Who is the missile man of india ?",
        a: "Dr Vikram Sarabhai",
        b: "Dr APJ Abdul Kalam",
        c: "Atal Bihari Vajpayee",
        d: "None Of these",
        correct: "b",
    },
    {
        question: "16) The longest river in the world is the ?",
        a: "Ganga",
        b: "Amazon",
        c: "Nile",
        d: "Yamuna",
        correct: "c",
    },
    {
        question: "17) Select Correct Word ?",
        a: " Aceleration",
        b: "Aceeleration",
        c: "Acceleretion",
        d: "Acceleration ",
        correct: "d",
    },
    {
        question: "18) First Satellite of India was ?",
        a: "Chandrayaan-1",
        b: "INSAT",
        c: "Kalpana-1",
        d: "Aryabhata",
        correct: "d",
    },
    {
        question: "19)If number is divided by 169, the remainder is 78. If the same number is divided by 13,what will be the remainder?",
        a: "0",
        b: "1",
        c: "6",
        d: "9",
        correct: "a",
    },
    {
        question: "20) If a sum of money is divided into 4 persons in the ratio of 3 : 4 : 5 : 8, then the second most maximum amount is Rs. 25000. What is the total amount?",
        a: "100000",
        b: "25000",
        c: "400000",
        d: "Cannot be determined",
        correct: "b",
    },
    {
        question: "21) Telescope revolving the Earth is ?",
        a: "Hubble Telescope",
        b: "James Webb Telescope",
        c: "INSAT",
        d: "Kalpana 2 ",
        correct: "a",
    },
    {
        question: "22) When the Principal entered the class, a student………. on the blackboard.?",
        a: "is writing ",
        b: "writes ",
        c: "was writing ",
        d: "Wrote ",
        correct: "c",
    },
    {   question: "23) What is the escape velocity of Earth?",
        a: "11.2 km/sec",
        b: "10.2 km/sec",
        c: "9.8 m/sec",
        d: "10.2 m/sec",
        correct: "a",
    },
    {
        question: "24) The average of three numbers is 135. The greatest number is 180 and the difference of the two other numbers is 25. Then what will be the smallest number?",
        a: "130",
        b: "125",
        c: "20",
        d: "100",
        correct: "d",
    },
    {
        question: "25) I did not mind what he was saying, he was only talking through his hat ?",
        a: "talking irresponsibly",
        b: "talking ignorantly",
        c: "talking nonsense",
        d: "talking insultingly",
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
           let percentage = (score/50)*100 ;

           if(percentage>75){
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
        //    quiz.innerHTML = `
        //    <h2>You have scored ${score} out of 50 marks </h2>
        //    <h2> You have secured ${percentage} %  in the exam </h2> `
       }
    }
})