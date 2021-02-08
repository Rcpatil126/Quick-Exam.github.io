const quizDB = [
    {
        question: " Q1:Which type of JavaScript language is",

        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        ans:"ans2"

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
        question: "Q4:The function and  var are known as",

        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
        ans:"ans3"
    },

    {
        question: "Q5:What is the HTML tag under which one can write the JavaScript code?",
         a: "<javascript>",
         b: "<scripted>",
         c: "<script>",
         d: "<js>",
         ans:"ans3"
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
        question: "Q8:In the JavaScript, which one of the following is not considered as an error:?",

        a: "Syntax error",
        b: "Missing of semicolons",
        c: "Division by zero",
        d: "Missing of Bracket",
        ans:"ans3"
    },

    {
        question: "Q9:Which of the following number object function returns the value of the number?",

        a: "toString()",
        b: "valueOf()",
        c: "toLocaleString()",
        d: "toPrecision()",
        ans:"ans2"
    },

    {
        question: "Q10:In JavaScript, what will be used for calling the function definition expression?",

        a: "Function prototype",
        b: "Function literal",
        c: "Function calling",
        d: "Function declaration",
        ans:"ans2"
    },

    
    {
        question: "Q11:If we want define style for an unique element, then which css selector will we use ?",

        a: "Id",
        b: "text",
        c: "class",
        d: "name",
        ans:"ans1"
    },

    
    {
        question: "Q12:	If we want to show an Arrow as cursor, then which value we will use ?",

        a: "pointer",
        b: "default",
        c: "arrow",
        d: "arr",
        ans:"ans2"
    },

      
    {
        question: "Q13:From which tag descriptive list starts ?",

        a: "<LL>",
        b: "<DD>",
        c: "<DL>",
        d: "<DS>",
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
        question: "Q15:Web pages starts with which ofthe following tag?",

        a: "<Body>",
        b: "<Title>",
        c: "<HTML>",
        d: "<Form>",
        ans:"ans3"
    },

    {
        question: "Q16:HTML is a subset of ?",

        a: "SGMT",
        b: "SGML",
        c: "SGMD",
        d: "None of these",
        ans:"ans2"
    },

    {
        question: "Q17:Which of the following is a container?",

        a: "<SELECT>",
        b: "<BODY>",
        c: "<INPUT",
        d: "Both (a) and (b)",
        ans:"ans4"
    },

    {
        question: "Q18:<Base> tag is designed to appear only between",

        a: "<HEAD>",
        b: "<TITLE>",
        c: "<BODY>",
        d: "<FORM>",
        ans:"ans1"
    },

    {
        question: "Q19: The map definition file is generally stored in",

        a: "CGI-BIN",
        b: "RECYCLE-BIN",
        c: "BIN",
        d: "All of these",
        ans:"ans1"
    },

    {
        question: "Q20:Main container for <TR>, <TD> and <TH> is",

        a: "<TABLE>",
        b: "<GROUP>",
        c: "<DATA>",
        d: "All of these",
        ans:"ans1"
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

