/*
var myQuestions = [
  {
  question: "When faced with a challenging situation, how do you typically respond?",
    choices: [
      { option: "Remain calm and composed, seeking a solution", keyTrait: "serenitySeeker" },
      { option: "Crack jokes to lighten the mood and reduce tension", keyTrait: "timeWarpDancer" },
      { option: "Show empathy and offer support to those involved", keyTrait: "wanderlustVoyager" },
    ],
  },
  {
    question: "Which type of activity do you find most appealing?",
    choices: [
      { option: "Engaging in peaceful and meditative practices", keyTrait: "laughterAlchemist" },
      { option: "Dancing or performing in front of others", keyTrait: "masterStoryweaver" },
      { option: "Embarking on adventures and exploring new places", keyTrait: "whimsicalDreamer" },
    ],
  },

];
*/

var myQuestions = [
  {
    question: "When faced with a challenging situation, how do you typically respond?",
    choices: [
      { option: "Remain calm and composed, seeking a solution", keyTrait: "serenitySeeker" },
      { option: "Crack jokes to lighten the mood and reduce tension", keyTrait: "timeWarpDancer" },
      { option: "Show empathy and offer support to those involved", keyTrait: "wanderlustVoyager" },
    ],
  },
  {
    question: "Which type of activity do you find most appealing?",
    choices: [
      { option: "Engaging in peaceful and meditative practices", keyTrait: "laughterAlchemist" },
      { option: "Dancing or performing in front of others", keyTrait: "masterStoryweaver" },
      { option: "Embarking on adventures and exploring new places", keyTrait: "whimsicalDreamer" },
    ],
  },
  {
    question: "How do you naturally express your joy and happiness?",
    choices: [
      { option: "With a serene and contented smile", keyTrait: "empathyOracle" },
      { option: "Through laughter and contagious excitement", keyTrait: "culinaryFusionist" },
      { option: "By sharing your excitement and enthusiasm with others", keyTrait: "galaxyGazer" },
    ],
  },
  {
    question: "In group settings, what role do you usually take on?",
    choices: [
      { option: "The calming and reassuring presence", keyTrait: "digitalMarvel" },
      { option: "The entertainer, making everyone laugh", keyTrait: "whirlwindMentor" },
      { option: "The one who encourages and motivates others", keyTrait: "artisticAlchemist" },
    ],
  },
  
  {
    question: "Which activity brings you the most satisfaction?",
    choices: [
      { option: "Weaving stories and captivating listeners", keyTrait: "mindfulInnovator" },
      { option: "Creating art or engaging in imaginative play", keyTrait: "nighttimeMaestro" },
      { option: "Blending unique flavors in the kitchen", keyTrait: "curiosityCartographer" },
    ],
  },
  {
    question: "What's your favorite way to unwind and relax?",
    choices: [
      { option: "Spending quiet time in nature or a peaceful place", keyTrait: "serendipityConjurer" },
      { option: "Dancing to your favorite music or attending parties", keyTrait: "euphoricHarmonizer" },
      { option: "Planning your next adventure or travel destination", keyTrait: "ecoWarrior" },
    ],
  },
  
  {
    question: "How do you handle conflicts within a group?",
    choices: [
      { option: "Act as a mediator, seeking compromise", keyTrait: "timelessFashionista" },
      { option: "Lighten the mood with humor and defuse tension", keyTrait: "imaginationArchitect" },
      { option: "Offer emotional support and encourage communication", keyTrait: "peakPerformer" },
    ],
  },
  {
    question: "If you had a superpower, which would you choose?",
    choices: [
      { option: "The ability to bring peace and serenity to any situation", keyTrait: "adrenalineVirtuoso" },
      { option: "The power to entertain and make people laugh", keyTrait: "gracefulDynamo" },
      { option: "The gift of endless curiosity and exploration", keyTrait: "laughterAlchemist" },
    ],
  },
  {
    question: "What type of books or movies do you enjoy the most?",
    choices: [
      { option: "Thought-provoking and philosophical stories", keyTrait: "mindfulInnovator" },
      { option: "Comedies and light-hearted entertainment", keyTrait: "digitalMarvel" },
      { option: "Adventure and exploration-themed tales", keyTrait: "whirlwindMentor" },
    ],
  },
  {
    question: "How do you prefer to show appreciation to others?",
    choices: [
      { option: "Expressing heartfelt gratitude and kindness", keyTrait: "euphoricHarmonizer" },
      { option: "Making them laugh or smile with a gesture", keyTrait: "imaginationArchitect" },
      { option: "Planning surprise adventures or experiences", keyTrait: "timelessFashionista" },
    ],
  },
  
];

var currentQuestionIndex = 0;
var userAnswers = Array(myQuestions.length).fill(null);
var progressPercent = 0;

var quizContainer = document.querySelector(".quiz-container");
var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");
var submitButton = document.getElementById("submit");
var progressElement = document.querySelector(".progress-bar");
var progressText = document.querySelector(".progress-container .progress-text");


// Define the characteristic traits and their initial scores
const characteristics = {
  serenitySeeker: "Serenity Seeker",
  timeWarpDancer: "Time Warp Dancer",
  wanderlustVoyager: "Wanderlust Voyager",
  laughterAlchemist: "Laughter Alchemist",
  masterStoryweaver: "Master Storyweaver",
  whimsicalDreamer: "Whimsical Dreamer",
  empathyOracle: "Empathy Oracle",
  culinaryFusionist: "Culinary Fusionist",
  galaxyGazer: "Galaxy Gazer",
  digitalMarvel: "Digital Marvel",
  whirlwindMentor: "Whirlwind Mentor",
  artisticAlchemist: "Artistic Alchemist",
  mindfulInnovator: "Mindful Innovator",
  nighttimeMaestro: "Nighttime Maestro",
  curiosityCartographer: "Curiosity Cartographer",
  serendipityConjurer: "Serendipity Conjurer",
  euphoricHarmonizer: "Euphoric Harmonizer",
  ecoWarrior: "Eco Warrior",
  timelessFashionista: "Timeless Fashionista",
  imaginationArchitect: "Imagination Architect",
  peakPerformer: "Peak Performer",
  adrenalineVirtuoso: "Adrenaline Virtuoso",
  gracefulDynamo: "Graceful Dynamo",
};


// Function to calculate the total score for each characteristic
// Function to calculate the total score for each characteristic
function calculateCharacteristicsScore(answers) {
  const scores = {
    serenitySeeker: 0,
    timeWarpDancer: 0,
    wanderlustVoyager: 0,
    laughterAlchemist: 0,
    masterStoryweaver: 0,
    whimsicalDreamer: 0,
    empathyOracle: 0,
    culinaryFusionist: 0,
    galaxyGazer: 0,
    digitalMarvel: 0,
    whirlwindMentor: 0,
    artisticAlchemist: 0,
    mindfulInnovator: 0,
    nighttimeMaestro: 0,
    curiosityCartographer: 0,
    serendipityConjurer: 0,
    euphoricHarmonizer: 0,
    ecoWarrior: 0,
    timelessFashionista: 0,
    imaginationArchitect: 0,
    peakPerformer: 0,
    adrenalineVirtuoso: 0,
    gracefulDynamo: 0,
  }; // Copy the characteristics object and initialize scores

  for (let i = 0; i < answers.length; i++) {
    const selectedKeyTrait = answers[i];

    // Increment the score of the corresponding characteristic
    scores[selectedKeyTrait]++;
  }

  // Find the characteristic with the highest score
  let maxScore = 0;
  let dominantCharacteristic = null;

  for (const keyTrait in scores) {
    if (scores[keyTrait] > maxScore) {
      maxScore = scores[keyTrait];
      dominantCharacteristic = keyTrait;
    }
  }

  return characteristics[dominantCharacteristic]; // Return the name of the dominant characteristic
}


// Modify the handleChoiceClick function to directly store the keyTrait
function handleChoiceClick(selectedKeyTrait) {
  userAnswers[currentQuestionIndex] = selectedKeyTrait; // Store the keyTrait instead of the entire choice
  showQuestion();
}

submitButton.addEventListener("click", function () {
  if (userAnswers.every(function (answer) {
    return answer !== null;
  })) {
    var userChoices = {};
    myQuestions.forEach(function (question, index) {
      userChoices["Question " + (index + 1)] = userAnswers[index]; // Store the keyTrait directly
      console.log(userChoices["Question " + (index + 1)])
    });
    console.log(userChoices);
    const dominantCharacteristicName = calculateCharacteristicsScore(userAnswers);
    console.log("Your dominant characteristic is:", dominantCharacteristicName);
    console.log("Your dominant characteristic is:", result);
  } else {
    alert("Please answer all the questions before submitting.");
  }
});

/*functions for the sake of display that we don't really care about*/

function showQuestion() {
  var currentQuestion = myQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  choicesElement.innerHTML = "";

  currentQuestion.choices.forEach(function (choice, index) {
    var choiceElement = document.createElement("div");
    choiceElement.classList.add("choice");
    choiceElement.textContent = choice.option;
    choiceElement.setAttribute("data-index", index);
    choiceElement.addEventListener("click", function() {
      handleChoiceClick(choice.keyTrait);
      console.log(choice.keyTrait); // Store the keyTrait instead of the entire choice
    });
    choicesElement.appendChild(choiceElement);

    if (userAnswers[currentQuestionIndex] === choice.keyTrait) { // Compare with the keyTrait
      choiceElement.classList.add("selected");
    }
  });

  prevButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = currentQuestionIndex === myQuestions.length - 1;
  submitButton.disabled = !userAnswers.every(function (answer) {
    return answer !== null;
  });

  updateProgressBar();
  updateProgressText();
}
/*
function handleChoiceClick(event) {
  var selectedChoiceIndex = event.target.getAttribute("data-index");
  var selectedChoice = myQuestions[currentQuestionIndex].choices[selectedChoiceIndex];

  userAnswers[currentQuestionIndex] = selectedChoice;
  showQuestion();
}
*/
function updateProgressBar() {
  progressPercent = ((currentQuestionIndex + 1) / myQuestions.length) * 100;
  progressElement.style.width = progressPercent + "%";
}
// Update the progress text
function updateProgressText() {
  var progressText = (currentQuestionIndex + 1) + "/" + myQuestions.length;
  progressElement.textContent = progressText;
}

prevButton.addEventListener("click", function () {
  currentQuestionIndex--;
  showQuestion();
});

nextButton.addEventListener("click", function () {
  currentQuestionIndex++;
  showQuestion();
});




function redirectToResultPage() {
  window.location.href = 'result.html';
  console.log("redirecting to result.html");
}


showQuestion();

