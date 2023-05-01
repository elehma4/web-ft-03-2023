let cardDeck = [];

let suitMap = {
    D: 'diamonds',
    C: 'clubs',
    H: 'hearts',
    S: 'spades'
} 

const multipleDecks = () => {
    for (let numOfDecks = 0; numOfDecks < 3; numOfDecks++){
        cardDeck.push(...buildDeck())
    }

    shuffleArray(cardDeck)

    console.log(cardDeck);
    console.log(cardDeck.length);
}

const buildDeck = () => {
    // find suit
    let deck = [];
    for (let suit in suitMap){

        for(let points = 1; points <= 13; points++){

            deck.push(createCardObj(points, suit))
        }
    }
    return shuffleArray(deck)
}

const createCardObj = (points, suit) =>{

    let card = {
        points: points,
        suit: suit,
    }

    let imageURL = ""

    if(points > 1 && points <= 10){
        imageURL = `images/${points}_of_${suitMap[suit]}.png`
    }

    switch(points){
        case 1: 
            imageURL = `images/ace_of_${suitMap[suit]}.png`
            break;
        case 11:
            card.points = 10;
            imageURL = `images/jack_of_${suitMap[suit]}.png`
            break;
        case 12:
            card.points = 10;
            imageURL = `images/queen_of_${suitMap[suit]}.png`
            break;
        case 13:
            card.points = 10;
            imageURL = `images/king_of_${suitMap[suit]}.png`
            break;
        
    }
    card.imageURL = imageURL

    return card; //return object we just created & push into cardDeck array
}

function shuffleArray(array){
    for (var i = array.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp;
    }
    return array
}

multipleDecks()