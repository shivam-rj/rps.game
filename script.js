let user_score = 0;
let computer_score = 0;
const choices = document.querySelectorAll('.choise');
const msg = document.querySelector('#msg');
const userScore_para = document.querySelector('#user-score');
const computerScore_para = document.querySelector('#computer-score');

const generateComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const random_idx = Math.floor(Math.random() * 3);
    return options[random_idx];
}


const drawgame = () => {
    console.log("draw");
    msg.innerHTML = "game is draw, try again";
    msg.style.backgroundColor = "purple";

}

const showawinner = (user_win, user_choice, computer_choice) => {
    if (user_win) {
        user_score++;
        userScore_para.innerText = user_score;
        msg.innerHTML = `you win! ${user_choice} beats ${computer_choice}`
        msg.style.backgroundColor = "green";
    }
    else {
        computer_score++;
        computerScore_para.innerText = computer_score;
        msg.innerHTML = `you lost! ${computer_choice} beats ${user_choice}`
        msg.style.backgroundColor = "red";
    }
}

const playGame = (user_choice) => {
    const computer_choice = generateComputerChoice();
    console.log("computer choise" + computer_choice);
    console.log("user choise" + user_choice);
    if (user_choice === computer_choice) {
        drawgame();
    }
    else {
        let user_win = true;
        if (user_choice === "rock") {
            // scissors, paper
            user_win = computer_choice === "paper" ? false : true;
        }
        else if (user_choice === "paper") {
            // s, rock
            user_win = computer_choice === "scissors" ? true : false;
        }
        else {
            // s, paper
            user_win = computer_choice === "rock" ? false : true;
        }
        showawinner(user_win , user_choice, computer_choice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const user_choice = choice.getAttribute('id');
        playGame(user_choice);
    })
});