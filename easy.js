const quizData = [
    {
        question: "1)Area of the circle ?",
        a: "2πr",
        b: "πr²",
        c: "πr²/2",
        d: "πrl",
        correct: "b",
    },
    {
        question: "2)In which year our country was independent?",
        a: "15 August 1949",
        b: "26 January 1947",
        c: "15 August 1957",
        d: "None of these",
        correct: "d",
    },
    {
        question: "3)What is the synoym of ALERT ?",
        a: "Energetic",
        b: "Observant",
        c: "Intelligent",
        d: "Watchful",
        correct: "d",
    },
    {
        question: "4)tan 90 =  ? ",
        a: "1",
        b: "0",
        c: "√3",
        d: "∞",
        correct: "d",
    },
    {
        question: "5)Who was the second man to land of moon ? ",
        a: "Buzz Aldrin",
        b: "Neil Armstrong",
        c: "Fred Haise",
        d: "Yury Gagrin",
        correct: "a",
    },
    {
        question: "6) Lavani is a dance form of which state? ? ",
        a: "Maharashtra",
        b: "Bihar",
        c: "Uttar Pradesh",
        d: "Madhya Pradesh",
        correct: "a",
    },
    {
        question: "7) ________ is the famous scientist known for inventing Telephone ? ",
        a: "Thomas Alva Edison",
        b: "Neil Bohr",
        c: "Alfred Nobel",
        d: "Alexander Graham Bell",
        correct: "d",
    },
    {
        question: "8) What is the chemical symbol for the element oxygen? ",
        a: "Na",
        b: "O",
        c: "Be",
        d: "C",
        correct: "b",
    },
    {
        question: "9) Is the compound ‘HCl’ an acid or base? ",
        a: "Acid",
        b: "Base",
        c: "Neutral",
        d: "None of these",
        correct: "a",
    },
    {
        question: "10) What is the biggest planet in our solar system? ",
        a: "Jupiter",
        b: "Sun",
        c: "Uranus",
        d: "Neptune",
        correct: "a",
    },
    {
        question: "11) Round 3.864 to the nearest tenth ? ",
        a: "3.9",
        b: "3.86",
        c: "3.96",
        d: "4",
        correct: "a",
    },
    {
        question: "12) What is the value of pie ? ",
        a: "3.24",
        b: "3.14",
        c: "22/17",
        d: "3.148899555",
        correct: "b",
    },
    {
        question: "13) Which is greater than -4 ? ",
        a: "-5",
        b: "-4",
        c: "-3",
        d: "-10",
        correct: "c",
    },
    {
        question: "14) Simplify: (4 – 5) – (13 – 18 + 2). ? ",
        a: "-1",
        b: "2",
        c: "-2",
        d: "1",
        correct: "b",
    },
    {
        question: "15) Multiply: (x – 4)(x + 5) ? ",
        a: "x2 + 5x - 20",
        b: "x2 - 4x - 20",
        c: "x2 - x - 20",
        d: "x2 + x - 20",
        correct: "d",
    },
    {
        question: "16) Factor: 5x2 – 15x – 20 ? ",
        a: "5(x-4)(x+1)",
        b: "-2(x-4)(x+5)",
        c: "-5(x+4)(x-1)",
        d: "5(x+4)(x+1)",
        correct: "a",
    },
    {
        question: "17) Which of the following is used in pencils ? ",
        a: "Silicon",
        b: "Charcoal",
        c: "Graphite",
        d: "Phosphorous",
        correct: "c",
    },
    {
        question: "18) What is laughing gas ? ",
        a: "Nitrous Oxide",
        b: "Carbon monoxide",
        c: "Hydrogen peroxide",
        d: "Sulphur dioxide",
        correct: "a",
    },
    {
        question: "19) Diamond is an allotropic form of ? ",
        a: "Carbon",
        b: "Sulphur",
        c: "Oxygen",
        d: "Hydrogen",
        correct: "a",
    },
    {
        question: "20) Captain of Indian Womens Cricket Team ? ",
        a: "Smriti Mandhana",
        b: "Mithali Raj",
        c: "Harleen Deol",
        d: "Jhulan Goswami",
        correct: "b",
    },
    {
        question: "21) To Which Sports Neeraj Chopra is from ? ",
        a: "Boxing",
        b: "Wrestling",
        c: "Javelin",
        d: "None of these ",
        correct: "a",
    },
    {
        question: "22) What is the SI unit of electric current ? ",
        a: "Ampere",
        b: "Volt",
        c: "Ohm",
        d: "Joules",
        correct: "a",
    },
    {
        question: "23) Which of these animal is called Ship of desert ? ",
        a: "Dog",
        b: "Deer",
        c: "Camel",
        d: "Lion",
        correct: "a",
    },
    {
        question: "24) __ is the hardest element ? ",
        a: "Diamond",
        b: "Gold",
        c: "Graphite",
        d: "Silver",
        correct: "a",
    },
    {
        question: "25) What is the t shirt number of Ronaldo? ",
        a: "18",
        b: "7",
        c: "27",
        d: "45",
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
           let percentage = (score/50 )*100 ;

           if(percentage>=80){
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
