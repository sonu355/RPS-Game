const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start the Game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button')
        const introScreen = document.querySelector('.intro')
        const match = document.querySelector('.match')
        const hands = document.querySelectorAll('.hands img')

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn")
        });
    };

    //Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')

        const computerOptions = ["rock", "paper", "scissor"];


        options.forEach(option =>  {
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoise = computerOptions[computerNumber]

                //here call compare hands
                setTimeout( () => {
                    compareHands(this.textContent, computerChoise)
                //update Images
                playerHand.src = `./img/${this.textContent}.png`
                computerHand.src = `./img/${computerChoise}.png`;                    
                },2000)

                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"
                
            })
        })
       // /home/harshal/Documents/RPS Game/img/scissor.png
    }
    const updateScore = () => {
        const playerscore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerscore.textContent = pScore
        computerScore.textContent = cScore
    }

    const compareHands = (playerChoice, computerChoise) => {
        const winner = document.querySelector('.winner')

        if(playerChoice === computerChoise){
            winner.textContent = 'It is a Tie'
            return;
        }
        if(playerChoice === 'rock'){
            if(computerChoise === 'scissor'){
                winner.textContent = 'Player Wins'
                pScore++;
                updateScore()
                return;
            }else{
                winner.textContent = 'Computer wins'
                cScore++;
                updateScore()
                return;
            }
        }
        if(playerChoice === 'paper'){
            if(computerChoise === 'scissor'){
                winner.textContent = 'Computer Wins'
                cScore++;
                updateScore()
                return;
            }else{
                winner.textContent = 'Player wins'
                pScore++;
                updateScore()
                return;
            }
        }
        if(playerChoice === 'scissor'){
            if(computerChoise === 'rock'){
                winner.textContent = 'Computer Wins'
                cScore++;
                updateScore()
                return;
            }else{
                winner.textContent = 'Player wins'
                pScore++;
                updateScore()
                return;
            }
        }
    }

    
    //call all inner function
    startGame();
    playMatch();
};

//start the game function
game();
