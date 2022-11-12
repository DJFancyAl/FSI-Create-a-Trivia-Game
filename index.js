// Your Code Here
let userName = window.prompt('Please enter your name:')
let userScore = 0
let playGame = true

const runGame = () => {
    for(let i = 0; i < questions.length; i++){
        let question = questions[i]
        let userAnswer = window.prompt(question.text)
    
        if (userAnswer.toUpperCase() === question.correctAnswer) {
            userScore += 10
        }
    }
    window.alert(`Congratulations ${userName}. Your score is: ${userScore}% `)
}

while (playGame) {
    runGame()
    let playAgain = window.prompt(`Okay ${userName}. Would you like to play again? (Yes or No)`)
    if(playAgain.toUpperCase() == 'YES'){
        userScore = 0
        playGame = true
    } else {
        playGame = false
    }
}

window.alert('Game finished!')