const questions = [
	{
	  question: "who is shalini's mother?",
	  options: ["prof. jayanthi", "sunnyleon", "karatha muth", "Deepthi IPS"],
	  answer: 0
	},
	{
	  question: "If 'Angela White' was born in 1990. What is her age in 2023?",
	  options: ["33", "18", "90", "29"],
	  answer: 0
	},
	{
	  question: "who killed varun in drishyam movie?",
	  options: ["Aiyyappan kutty", "George kutty", "Raman kutty", "Mary kutty"],
	  answer: 1
	},
	{
		question: "Guess the movie from the dialogue 'Purushu enne anugrahikanam'",
		options: ["1983", "Meesa Madhavan", "CHURALI", "CID MOOSA"],
		answer: 1
	  },
	  {
	  question: "Who was the first woman to win a Nobel Prize?",
	  options: ["Marie Curie" , "Ada Lovelace" ,"Rosalind Franklin" , "Jane Goodall"],
	  answer: 0
	},
	{
	  question: "What is the tallest mammal in the world?",
	  options: [" Hippopotamus" , "Giraffe" , "Elephant" ,  "Gorilla"],
	  answer: 1
	},
	{
	  question: " Who is credited with the invention of the telephone?",
	  options: ["Thomas Edison" , "Alexander Graham Bell" , "Nikola Tesla" , "Guglielmo Marconi"],
	  answer: 1
	},
	{
		question: "Which country is the largest producer of vanilla in the world?",
		options: ["Madagascar" , "Mexico" , "Tahiti" , "Indonesia"],
		answer: 0
	  },
	  {
		  question: "Who was the first person to reach the South Pole?",
		  options:["Roald Amundsen", "Robert Falcon Scott", "Ernest Shackleton", "Edmund Hillary"],
		  answer: 0
		},
		{
			question: "What is the name of the largest reef system in the world?",
			options: ["The Great Barrier Reef", "The Coral Triangle", "The Red Sea Coral Reef", "The Belize Barrier Reef"],
			answer: 0
		  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEls = document.querySelectorAll("input[name='option']");
const option1El = optionsEls[0];
const option2El = optionsEls[1];
const option3El = optionsEls[2];
const option4El = optionsEls[3];
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
	const question = questions[currentQuestion];
	questionEl.textContent = `${question.question}`;
	option1El.nextElementSibling.textContent = `${question.options[0]}`;
	option2El.nextElementSibling.textContent = `${question.options[1]}`;
	option3El.nextElementSibling.textContent = `${question.options[2]}`;
	option4El.nextElementSibling.textContent = `${question.options[3]}`;
}

loadQuestion();

function checkAnswer() {
	const question = questions[currentQuestion];
	const selectedOption = document.querySelector('input[name="option"]:checked');
	if (!selectedOption) {
		return;
	}
	const answer = parseInt(selectedOption.value);
	if (answer === question.answer) {
		score++;
	} else {
		const correctOption = document.getElementById(`option${question.answer + 1}`);
		
	}
}

nextBtn.addEventListener("click", () => {
	checkAnswer();
	currentQuestion++;
	if (currentQuestion >= questions.length) {
		questionEl.textContent = "Quiz completed!.... poyi irunn padik malare";
		option1El.parentElement.style.display = "none";
		option2El.parentElement.style.display = "none";
		option3El.parentElement.style.display = "none";
		option4El.parentElement.style.display = "none";
		nextBtn.style.display = "none";
		scoreEl.textContent = `Your score is: ${score}`;

		const correctAnswers = document.createElement("div");
		correctAnswers.innerHTML = "<h3>Correct Answers:</h3>";
		for (let i = 0; i < questions.length; i++) {
			correctAnswers.innerHTML += `<p>${i + 1}. ${questions[i].options[questions[i].answer]}</p>`;
		}
		scoreEl.parentNode.insertBefore(correctAnswers, scoreEl.nextSibling);
		
		return;
	}
	loadQuestion();
});
