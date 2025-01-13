document.querySelector(".sub").addEventListener("click", () => {
    const userChoice = document.querySelector('input[type="radio"]:checked');
    if (!userChoice) {
        alert("Please select an option!");
        return;
    }

    const computerChoices = ["rock", "paper", "scissors"];
    const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    let result;
    if (userChoice.value === computerChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice.value === "rock" && computerChoice === "scissors") ||
        (userChoice.value === "paper" && computerChoice === "rock") ||
        (userChoice.value === "scissors" && computerChoice === "paper")
    ) {
        result = `You win! ${userChoice.value} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${computerChoice} beats ${userChoice.value}.`;
    }

    alert(result);
});

