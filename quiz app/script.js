const questions = [
  {
    que: "which of the following is markup language ?",
    a: "HTML",
    b: "css",
    c: "javascript",
    d: "php",
    correct: "a",
  },
  {
    que: "which year javscript is lauch ?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of above",
    correct: "b",
  },
  {
    que: "what does css stand for?",
    a: "Hyper text markup language",
    b: "cascading style sheet",
    c: "json object notiation",
    d: "none of above",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.querySelector("#quesBox");
const optionInputs = document.querySelectorAll(".options");

// intial call => when page load this function will call
// return will end the function execution

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });

  return answer;
};

const submitQuiz = () => {
  const ans = getAnswer();
  const data = questions[index];

  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  
  <div style="text-align:center">
  <h3> Thanks for playing the quiz </h3>
  <h2> ${right} / ${total} are correct </h2>
  </div>
  `;
};

const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  quesBox.innerHTML = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerHTML = data.a;
  optionInputs[1].nextElementSibling.innerHTML = data.b;
  optionInputs[2].nextElementSibling.innerHTML = data.c;
  optionInputs[3].nextElementSibling.innerHTML = data.d;
};

loadQuestion();
