// Select DOM Element
const human_choices = document.querySelectorAll(".choices");
const all_images = document.querySelectorAll(".image");
const reset_button = document.querySelector("#reset");
const results_container = document.querySelector(".results-container");

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

// User click function
const userClick = (e) => {
  e.addEventListener("click", () => {
    start_game(e.id);
    human_choices.forEach((choice) => {
      choice.style.pointerEvents = "none";
    });
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
  const results = possible_outcomes.filter((outcome) => {
    return JSON.stringify(outcome.option) === JSON.stringify(choices);
  });

  // Display result message and color
  results_container.innerHTML = results[0].message;
  if (results[0].message === "Draw") {
    document.querySelector(".results-container").style.color = "#d7eb23";
  } else if (results[0].message === "You win") {
    document.querySelector(".results-container").style.color = "#50da19";
  } else {
    document.querySelector(".results-container").style.color = "#f02c2c";
  }

  // Update image styles to reflect choices
  all_images.forEach((e) => {
    e.classList.remove("shadow");
  });
  if (results[0].message !== "Draw") {
    document.querySelector(`.${user_choice}`).classList.add("human");
    document.querySelector(`.${computer_choice}`).classList.add("computer");
  } else {
    document.querySelector(`.${user_choice}`).classList.add("draw");
  }

  // Show reset button
  reset_button.classList.replace("hide", "display");
};

const reset_game = () => {
  // Reset visuals
  all_images.forEach((e) => {
    e.classList.remove("human");
    e.classList.remove("computer");
    e.classList.remove("draw");
    e.classList.add("shadow");
  });

  // Reset result text
  results_container.innerHTML = "";

  // Allow clicks again
  human_choices.forEach((choice) => {
    choice.style.pointerEvents = "auto";
  });

  // Hide reset button again (optional if needed)
  reset_button.classList.replace("display", "hide");
};
