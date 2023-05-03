const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What state has the biggest population?',
    answers: [
      { text: 'California', correct: true },
      { text: 'Alabama ', correct: false },
      { text: 'Indiana ', correct: false },
      { text: 'Hawaii', correct: false }
    ]
  },
  {
    question: 'Where is the capital city "Little Rock" located?',
    answers: [
      { text: 'Georgia', correct: false },
      { text: 'Milwaukee', correct: false },
      { text: 'Florida', correct: false },
      { text: 'Arkansas', correct: true }
    ]
  },
  {
    question: 'What is the capital city of Alaska?',
    answers: [
      { text: 'Juneau', correct: true },
      { text: 'Minnesota', correct: false },
      { text: 'Maine', correct: false },
      { text: 'Los Angeles', correct: false }
    ]
  },
  {
    question: 'What is Connecticuts major tourist attraction? ',
    answers: [
      { text: 'Rocky Mountains', correct: false },
      { text: 'Yale University', correct: true },
      { text: 'Disney Land', correct: false },
      { text: 'Lakes', correct: false }
    ]
  },
  {
    question: 'What is Delawares greatest tourist attraction?',
    answers: [
      { text: 'Delaware Art Museum', correct: true },
      { text: 'Rock Climbing', correct: false },
      { text: 'Fountain', correct: false },
      { text: 'Sports stadium', correct: false }
    ]
  },
  {
    question: 'Where is the capital city "Denver" located?',
    answers: [
      { text: 'Washington', correct: false },
      { text: 'New Mexico', correct: false },
      { text: 'Colorado', correct: true },
      { text: 'New York', correct: false }
    ]
  },
  {
    question: 'What is Indiana"s greatest tourist attraction? ',
    answers: [
      { text: 'State Fair', correct: false },
      { text: 'Yellow Stone National Park', correct: false },
      { text: 'Beaches', correct: false },
      { text: 'Indianapolis Motor Speedway', correct: true }
    ]
  },
  {
    question: 'What state has the most land mass? ',
    answers: [
      { text: 'Kansas', correct: false },
      { text: 'Kentucky', correct: false },
      { text: 'Maryland', correct: false },
      { text: 'Texas', correct: true }
    ]
  },
  {
    question: 'What is the capital city of Maryland? ',
    answers: [
      { text: 'Indianapolis', correct: false },
      { text: 'Baton Rouge', correct: false },
      { text: 'Annapolis', correct: true },
      { text: 'Frankfort', correct: false }
    ]
  },
  {
    question: 'What is the capital city of Washington? ',
    answers: [
      { text: 'Richmond', correct: false },
      { text: 'Seattle', correct: false },
      { text: 'Washington DC', correct: false },
      { text: 'Olympia', correct: true }
    ]
  },
  
]