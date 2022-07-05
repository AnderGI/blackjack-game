//player its name and $$$

let player={
    name: prompt("What\'s your name?", ),
    chips: " $" + 250 
}

// cards, array. new cards will be pushe every time the user presses the button
// new cards. they wiil be added after the first two random cards
let cards = []
// by default the sum is going to be zero if he game hasn't started
let sum = 0

/**
Some functions
- startthe game
- new card 
- resset (start from scratch)
- see if the user has blackjack(the sum of the cards is 21)
*/

//to verify if the user has blackjack and is playing. Two boolean variables
let hasBlackjack = false //by default the user does not have it
let isPlaying = false // = without pressing the button it wont happen

//a function that returns random values from 1 to 13 (the blackjack card quantity)
function getRandomCard(){
    return Math.floor(Math.random()*13)+1
}


// start the game
// in order for the use to see the cards and the sum it needs to be rendered inside startGame()

function startGame(){
    isPlaying = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards[firstCard, secondCard] // at the beginning there is an empty cards list
    sum = firstCard + secondCard
    document.getElementById("cards-el").textContent = "Cards: " + firstCard + " " + secondCard + " "
    document.getElementById("sum-el").textContent = "Sum: " + sum + " "
    let usernameEl= document.getElementById("username")
    usernameEl.textContent += player.name
    let chipsEl =  document.getElementById("chips") 
    chipsEl.textContent += player.chips
    verifyBlackjack()
}

//with the first two letters the game has to verify that the user has blackjack,
//it does not have it or if it has surpass its limit (game over)
function verifyBlackjack(){
 document.getElementById("message-el").textContent = "Do you want to play?"
    if(sum < 21){
        document.getElementById("message-el").textContent ="Do you want another card?"
    }
    else if(sum === 21){ 
        document.getElementById("message-el").textContent ="You have Blackjack"
        hasBlackjack = true
    }
    else{
        document.getElementById("message-el").textContent ="Game over, you have surpassed 21"
        isPlaying = false
}
}

//new card only if the game is on and if it has no blackjack
function newCard(){
    if(isPlaying=== true && hasBlackjack===false){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        document.getElementById("cards-el").textContent += card + " "
        document.getElementById("sum-el").textContent = "Sum: " + sum
        verifyBlackjack()  
    }  
}

//when the game is over everything can be reset to zero if the user wants it 
function resetGame(){
    if (isPlaying=== false){
        document.getElementById("cards-el").textContent = "Cards: "
        document.getElementById("sum-el").textContent = "Sum: "
    }
    
}















