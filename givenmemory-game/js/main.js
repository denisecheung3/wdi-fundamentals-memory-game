
const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"

	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"

	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"

	},
	{
		rank:"king",
		suit:"diamongs",
		cardImage: "images/king-of-diamonds.png"
	}
];

const cardsInPlay = [ ]; //cards an array with no elements inside. purpose?

function checkForMatch() { //created a function named checkForMatch
	if (cardsInPlay[0] === cardsInPlay[1]) { //if they equal then display this is a match etc. but I have nothing in cardsInPlay array?
	  alert("You found a match!");
	} else {
	  alert("Sorry, try again.");
	}
}


function flipCard() { 
	cardId = this.getAttribute('data-id');  //remember its data-id not card-id (They tell me this)
	cardsInPlay.push(cards[cardId].rank); //this will add whatever argument is given for cardId to the array cardsInPlay
	console.log("User flipped " +cards[cardId].rank); //then it will log users flipped (argument given for cardID)
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute('src', cards[cardId].cardImage) //UNSURE about value


	if (cardsInPlay.length === 2) {
		checkForMatch();

	}

}

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i); 
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);



	}
}

createBoard();

