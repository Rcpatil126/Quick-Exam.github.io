const quizDB = [
    {
        question: " Q1:print( 2**3 + (5+6)** (1+1))",

        a: "129",
        b: "156",
        c: "212",
        d: "176",
        ans:"ans1"

    },
    {

        question: "Q2:Which one of the following also known as Conditional Expression:?",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        ans:"ans4"
    },
    {

        question: "Q3:When interpreter encounters an empty statements, what it will do",

        a: "Shows a warning",
        b: "Prompts to complete ",
        c: "Throws an error",
        d: "Ignores the statements",
        ans:"ans3"
    },
    {
        question: "Q4:Which of the following concept is not part of python",

        a: "Pointers",
        b: "Loops",
        c: "Dynamic Typing",
        d: "None the above",
        ans:"ans1"
    },

    {
        question: "Q5:which of the following statements are used in Exceptin Handling in python",
         a: "Try",
         b: "except",
         c: "finally",
         d: "all of the above",
         ans:"ans4"
    },


    {
        question: "Q6:Which of the following type of a variable is volatile?",

        a: "Mutable variable",
        b: "Dynamic variable",
        c: "Volatile variable",
        d: "Immutable variable",
        ans:"ans1"
    },


    {
        question: "Q7:Which of the following option is used as hexadecimal literal beginning?",

        a: "00",
        b: "0x",
        c: "0X",
        d: "Both 0x and 0X",
        ans:"ans4"
    },

    {
        question: "Q8: what will be the output -- a = [1,2] print(a * 3)",

        a: "[1,2][1.2][1,2]",
        b: "([1,2][1.2][1,2])",
        c: "[1,2,1,2,1,2]",
        d: "([1,2,1,2,1,2])",
        ans:"ans3"
    },

    {
        question: "Q9:Which of the following function convert date to time in python",

        a: "strptime",
        b: "strptime()",
        c: "strftime()",
        d: "datetime()",
        ans:"ans2"
    },

    {
        question: "Q10: As what datatype are the *args stored when passed into a function",

        a: "List",
        b: "Tuple",
        c: "Dictionary",
        d: "Set",
        ans:"ans2"
    },

    
    {
        question: "Q11:As what datatypeare the *kwargs stored when passed into a function ?",

        a: "Lists",
        b: "Tuples",
        c: "Dictionary",
        d: "None of the above",
        ans:"ans3"
    },

    
    {
        question: "Q12:	Which of the following is not a valid set operation in python ?",

        a: "Union",
        b: "Intersection",
        c: "Difference",
        d: "None of the Above",
        ans:"ans4"
    },

      
    {
        question: "Q13:create an empty set in python ?",

        a: "()",
        b: "{}",
        c: "[]",
        d: "set()",
        ans:"ans3"
    },

         
    {
        question: "Q14:www is based on which model?",

        a: "Local-server",
        b: "Client-server",
        c: "3-tier",
        d: "None of these",
        ans:"ans2"
    },
    {
        question: "Q15:Web pages starts with which of the following tag?",

        a: "<Body>",
        b: "<Title>",
        c: "<HTML>",
        d: "<Form>",
        ans:"ans3"
    },

    {
        question: "Q16:What is output of print(math.pow(3,2)) ?",

        a: "0.9",
        b: "9",
        c: "9.0",
        d: "9.00",
        ans:"ans3"
    },

    {
        question: "Q17:What is the method inside the class in python language",

        a: "Object",
        b: "Function",
        c: "Attribute",
        d: "Argumnet",
        ans:"ans2"
    },

    {
        question: "Q18:Which of the followinf data structures finds its use in recursion",

        a: "Stack",
        b: "Array",
        c: "LinkedList",
        d: "Queues",
        ans:"ans1"
    },

    {
        question: "Q19:How is an array initialized in c language ?",

        a: "int a[3] = {1,2,3}",
        b: "int a={1,2,3}",
        c: "int a[] = new int[3]",
        d: "int a(3) = [1,2,3]",
        ans:"ans1"
    },

    {
        question: "Q20:Which of the following is not the type of queue ?",

        a: "Priority queue",
        b: "Single-ended queue",
        c: "Circular queue",
        d: "Ordinary queue",
        ans:"ans2"
    },

    {
        question: "Q21:What is the size of an int data type?",

        a: "4 Bytes",
        b: "8 Bytes",
        c: "Depends on the system",
        d: "Cannot be determined",
        ans:"ans3"
    },

    {
        question: "Q22:What is the default return type if it is not specified in function definition?",

        a: "void",
        b: "int",
        c: "double",
        d: "short int",
        ans:"ans2"
    },

    {
        question: "Q23:Which of the following correctly declares an array?",

        a: "int array[10]",
        b: "int array",
        c: "array{10}",
        d: "array array[10]",
        ans:"ans1"
    },

    {
        question: "Q24:Which of the following is the default return value of functions in C++?",

        a: "int",
        b: "char",
        c: "float",
        d: "void",
        ans:"ans1"
    },

    {
        question: "Q25:An inline function is expanded during ",

        a: "compile-time",
        b: "run-time",
        c: "never expanded",
        d: "end of the program",
        ans:"ans2"
    },



];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');


const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;


    answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }

    });

    return answer;

   
};

const deselectAll = () =>{
    answers.forEach((curAnsElem)=> curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);


    if(checkedAnswer === quizDB[questionCount].ans){
         score++;
    };
    questionCount ++;

    deselectAll();

    if(questionCount < quizDB.length){
    loadQuestion();

    }else{

            showScore.innerHTML =`
            <h3> Your Scored✌ ${score}/${quizDB.length}💥</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
            `;
        
            showScore.classList.remove('scoreArea');
     }



});

