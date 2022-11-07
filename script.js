let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');

const game = () => {
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let clickedBtn = e.target.className;
      showIcon.className = clickedBtn;
      let randomNum = Math.floor(Math.random() * randomClasses.length);
      computerShowIcon.className = randomClasses[randomNum];
      if (showIcon.className === computerShowIcon.className) {
        pScore.innerHTML = pScore.innerHTML;
        cScore.innerHTML = cScore.innerHTML;
        text.innerHTML = "Plichta ";
        text.style.color = 'orange';
        text2.innerHTML = text.innerHTML;
        text2.style.color = 'orange';
      }
      else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]) {
        pScore.innerHTML = playerScore;
        playerScore++;
        text.innerHTML = "Vyhrál jsi";
        text.style.color = 'green';
        text2.innerHTML = text.innerHTML;
        text2.style.color = 'green';
      } else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]) {
        cScore.innerHTML = computerScore;
        computerScore++;
        text.innerHTML = "Prohrál jsi";
        text.style.color = 'red';
        text2.innerHTML = text.innerHTML;
        text2.style.color = 'red';
      } else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]) {
        cScore.innerHTML = computerScore;
        computerScore++;
        text.innerHTML = "Prohrál jsi ";
        text.style.color = 'red';
        text2.innerHTML = text.innerHTML;
        text2.style.color = 'red';
      } else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]) {
        pScore.innerHTML = playerScore;
        playerScore++;
        text.innerHTML = "Vyhrál jsi ";
        text.style.color = 'green';
        text2.innerHTML = text.innerHTML;
        text2.style.color = 'green';
      } else if (showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]) {
        cScore.innerHTML = computerScore;
        computerScore++;
        text.innerHTML = "Prohrál jsi ";
        text.style.color = 'red';
        text2.innerHTML = text.innerHTML;
        text2.style.color = 'red';
      } else if (showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]) {
        pScore.innerHTML = playerScore;
        playerScore++;
        text.innerHTML = "Vyhrál jsi";
        text.style.color = 'green';
        text2.innerHTML = text.innerHTML;
        text2.style.color = 'green';
      }
    });
  });
}
game();