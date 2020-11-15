document.addEventListener('DOMContentLoaded' , () => {
    //images 
    let imageArray = [
        {
            name : 'danceImg',
            img : 'images/dance.png'
        },
        {
            name : 'danceImg',
            img : 'images/dance.png'
        },
        {
            name : ' happyImg',
            img : 'images/happy.png'
        } ,
        {
            name : ' happyImg',
            img : 'images/happy.png'
        } ,
        {
            name : 'heartImg',
            img : 'images/heart.png'
        },
        {
            name : 'heartImg',
            img : 'images/heart.png'
        },
        {
            name : 'softyellowImg',
            img : 'images/softyellow.png'
        },
        {
            name : 'softyellowImg',
            img : 'images/softyellow.png'
        },
        {
            name : 'sorryImg',
            img : 'images/sorry.png'
        },
        {
            name : 'sorryImg',
            img : 'images/sorry.png'
        },
        {
            name : ' boxImg',
            img : 'images/box.png'
        },
        {
            name : ' boxImg',
            img : 'images/box.png'
        }
    
    ]
    imageArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < imageArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/lines.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/lines.png')
        cards[optionTwoId].setAttribute('src', 'images/lines.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/lines.png')
        cards[optionTwoId].setAttribute('src', 'images/lines.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === imageArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(imageArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', imageArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
/*
 imageArray.sort(() => 0.2 -  Math.random(imageArray))

 
//create the board
let  grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardChosen= []
let cardChosenId = []
let cardsWon = []

// create the function 
function createBoard(){
    for(let i = 0 ; i < imageArray.length ; i++){
        let card = document.createElement('img')
        card.setAttribute('src', '/images/lines.png')
        card.setAttribute('data-id' , i)
        //add an event listener
        card.addEventListener('click' , flipCard)
        grid.appendChild(card)
    }   
}
//check for match and flip the cards
function checkForMatch(){
    let cards = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    if(optionOneId == optionTwoId){

        cards[optionOneId].setAttribute('src', 'images/lines.png')
        cards[optionTwoId].setAttribute('src', 'images/lines.png')
        alert('Woow you found the same image')
        
      
        cardsWon.push(cardChosen)
    }else if (cardChosen[0] === cardChosen[1]){
        alert('you found the match')
        cards[optionOneId].setAttribute('src' ,'images/white.png')
        cards[optionTwoId].setAttribute('src' ,'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      
    
    }else{
        cards[optionOneId].setAttribute('src', 'images/lines.png')
        cards[optionTwoId].setAttribute('src', 'images/lines.png')

        alert('sorry , try again')
    }

    cardChosen = []
    cardsChosenId = []

    resultDisplay.textContent = cordsWon.length
    if(cardsWon.length === imageArray.length / 2){
        resultDisplay.textContent = ' Thats amazing , you dound them all'
    }    
}
// lets create flipcard 

function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardChosen.push(imageArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', imageArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkForMatch , 500)
    }

}*/
 
createBoard()
})
