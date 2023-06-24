let player = {
    name: "SHASHANK",
    chips: 4000
}
let cards=[]//notation for creating arrays
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
//let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard()
{
    if((Math.floor(Math.random()*13)+1)==1)
    return 11
    else if((Math.floor(Math.random()*13)+1)>10)
    return 10
    else
    return  Math.floor(Math.random()*13)+1
    
}


function startGame() //creating it seperatly to make the code look simpler and understandable
{
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    
    renderGame()
}


function renderGame() //initially took it as startgame but was using it even while pressing the newcard button so changed it to rendergame and making a new function as startgame
{
    cardsEl.textContent="cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent+=cards[i]+" "
    }

    //cardsEl.textContent="cards: "+cards[0]+" "+cards[1]
    
    sumEl.textContent="sum: "+ sum
if (sum<=20)
{
    message="Do you want to draw a new card?"
}
else if(sum===21)
{
    message="You have got blackjack!"
    hasBlackJack=true
}
else
{
    message="Your out of the game!"
    isAlive=false
}
messageEl.textContent=message
console.log(message)
}

function newCard()
{
    if(isAlive==true && hasBlackJack==false)
    {
    console.log("Drawing a new card from the deck")
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
    }
    
}

