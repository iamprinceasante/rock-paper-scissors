// Get human choice
const choices = document.querySelectorAll(".choices");
choices.forEach((e) => {
  e.addEventListener("click", () => {
    // Kick start
    start_game(e.id);

    // Disable all options
    choices.forEach((choice) => {
      choice.style.pointerEvents = "none";
      choice.style.opacity = "0.7"; // Optional: make them look disabled
    });
  });
});

// Get computer choice
const computer_options = ["rock", "paper", "scissors"];

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

const start_game = (user_choice) => {
  // Let computer make a choice
  const computer_choice = computer_options[Math.floor(Math.random() * 3)];

  // Compare choices
  const choices = [user_choice, computer_choice];
  const results = possible_outcomes.filter((outcome) => {
    return JSON.stringify(outcome.option) === JSON.stringify(choices);
  });

  console.log(results);

  // Predict winner
  // Show results
};
