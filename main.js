// Select DOM Element
const human_choices = document.querySelectorAll(".option");
const human_score_div = document.querySelector(".player-score");
const computer_score_div = document.querySelector(".computer-score");
const results_div = document.querySelector(".results-container");

// Computer choice
const computer_options = ["rock", "paper", "scissors"];

// Possible outcomes
const possible_outcomes = [
  {
    option: ["rock", "scissors"],
    message: "You win",
  },
  {
    option: ["rock", "rock"],
    message: "Draw",
  },
  {
    option: ["rock", "paper"],
    message: "You lose",
  },

  {
    option: ["paper", "rock"],
    message: "You win",
  },
  {
    option: ["paper", "paper"],
    message: "Draw",
  },
  {
    option: ["paper", "scissors"],
    message: "You lose",
  },
  {
    option: ["scissors", "rock"],
    message: "You lose",
  },
  {
    option: ["scissors", "paper"],
    message: "You win",
  },
  {
    option: ["scissors", "scissors"],
    message: "Draw",
  },
];

// Scores
let human_score = 0;
let computer_score = 0;

// User click function
const userClick = (e) => {
  e.addEventListener("click", () => {
    start_game(e.id);
  });
};

// Attach event listener to each choice button
human_choices.forEach((e) => {
  userClick(e);
});

// Game Start
const start_game = (user_choice) => {
  // Let computer make a choice
  const computer_choice = computer_options[Math.floor(Math.random() * 3)];

  // Determine outcome based on human and computer choice
  const choices = [user_choice, computer_choice];
  const results = possible_outcomes.find((outcome) => {
    return JSON.stringify(outcome.option) === JSON.stringify(choices);
  });

  // Update Score
  if (results.message === "You win") {
    human_score++;
    human_score_div.innerHTML = human_score;
  } else if (results.message === "You lose") {
    computer_score++;
    computer_score_div.innerHTML = computer_score;
  }

  // Show results
  results_div.innerHTML = results.message;
};
