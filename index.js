//player its name and $$$

let player={
    //name: want to try and make it a kind of prompt. SOmething that enhances interaction
    chips: 50 
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
- new game
- see if the user has blackjack(the sum of the cards is 21)
*/

//to verify if the user has blackjack and is playing. Two boolean variables
let hasBlackjack = false //by default the user does not have it
let isPlaying = false // = without pressing the button it wont happen

//a function that returns random values from 1 to 13 (the blackjack card quantity)
// in balckjack ace has a value of 11 and J Q K a value of 10
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1 //aces have a value of 10 and 11 12 and 13 a value of 11
    if (randomNumber>10){return 10}
    else if (randomNumber===1){return 11}
    else{return randomNumber}
}


// start the game
// in order for the use to see the cards and the sum it needs to be rendered inside startGame()

function startGame(){
    if(document.getElementById("chips").textContent === "Chips: $" + 0){noChips()}
    else if(document.getElementById("chips").textContent !== "Chips: $" + 0){
        isPlaying = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards[firstCard, secondCard] // at the beginning there is an empty cards list
        sum = firstCard + secondCard
        document.getElementById("cards-el").textContent = "Cards: " + firstCard + " " + secondCard + " "
        document.getElementById("sum-el").textContent = "Sum: " + sum + " "
        document.getElementById("chips").textContent = "Chips: $"+ player.chips
        verifyBlackjack()
    }
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
        player.chips = player.chips + 50
        document.getElementById("chips").textContent = "Chips: $"+ player.chips
    }
    else{
        isPlaying = false
        player.chips = player.chips - 50
        document.getElementById("chips").textContent = "Chips: $"+ player.chips
        noChips()
        document.getElementById("message-el").textContent ="Game over, you have surpassed 21"
}
}

// in blackjack 1 or Ace has a value of ten and the cards 11 12 and 13 a value





//new card only if the game is on and if it has no blackjack
function newCard(){
    noChips()
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
function foldGame(){
        document.getElementById("cards-el").textContent = "Cards: "
        document.getElementById("sum-el").textContent = "Sum: "
        document.getElementById("chips").textContent = "Chips: $"+ player.chips
        
}

 
function noChips(){
    if(document.getElementById("chips").textContent === "Chips: $" + 0){
        isPlaying = false
        hasBlackjack = false
        document.getElementById("message-el").textContent ="You have 0 chips left. You can\'t play."
        document.getElementById("cards-el").textContent = "Cards: "
        sum = 0
        document.getElementById("sum-el").textContent = "Sum: "
    }
}
















