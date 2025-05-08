// Get human choice
const human_choices = document.querySelectorAll(".choices");
const images = document.querySelectorAll(".image");

human_choices.forEach((e) => {
  e.addEventListener("click", () => {
    // Kick start
    start_game(e.id);

    // Disable all options
    choices.forEach((choice) => {
      choice.style.pointerEvents = "none";
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

  // Compare choices and predict the winner
  const choices = [user_choice, computer_choice];
  const results = possible_outcomes.filter((outcome) => {
    return JSON.stringify(outcome.option) === JSON.stringify(choices);
  });

  // Show results
  document.querySelector(".results-container").innerHTML = results[0].message;

  // Show choices
  images.forEach((e) => {
    e.classList.remove("shadow");
  });
  if (results[0].message !== "Draw") {
    document.querySelector(`.${user_choice}`).classList.add("human");
    document.querySelector(`.${computer_choice}`).classList.add("computer");
  } else {
    document.querySelector(`.${user_choice}`).classList.add("draw");
  }

  // Show reset button
  document.querySelector("#reset").style.display = "block";
};

const reset_game = () => {
  window.location.reload();
};
