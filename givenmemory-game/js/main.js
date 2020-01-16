
const cards = ["queen", "queen", "king", "king"]; //created an array cards within 4 elements inside

const cardsInPlay = [ ]; //cards an array with no elements inside. purpose?

function checkForMatch() { //created a function named checkForMatch
	if (cardsInPlay[0] === cardsInPlay[1]) { //if they equal then display this is a match etc. but I have nothing in cardsInPlay array?
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
}


function flipCard(cardId) { //created a function named flipCard with the parameter cardId inside
	cardsInPlay.push(cards[cardId]); //this will add whatever argument is given for cardId to the array cardsInPlay
	console.log("User flipped " +cards[cardId]); //then it will log users flipped (argument given for cardID)

	if (cardsInPlay.length === 2) {
		checkForMatch();

	}

}

flipCard(0); //giving the parameter inside flipCard, i.e: cardId the value 0
flipCard(2);// giving the parameter inside flipCard the value 2

