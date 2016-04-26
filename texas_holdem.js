
// ## Texas Hold 'em Poker.

// Description:

// For those who want to know more about Texas Hold 'Em Poker or just need a refresher. Check Wikipedia Article on Texas Hold 'Em Poker
// For the first challenge we will simulate the dealing part of the game.

// ### Input:

// You will be asked how many players 2 to 8. You will always be one of the players and you are facing 1 to 7 other computer controlled players.
// ### Output:

// Display the 2 cards each player is dealt and the display the 5 community cards.
// Format is left up to you. (The exact method of the output a card. For my examples I am using verbal words but someone might use unicode symbols for the card suit or other. You design this as long as we can tell the cards apart it is all good)

// ### Example:
// ```
// How many players (2-8) ? 3

// Your hand: 2 of Clubs, 5 of Diamonds
// CPU 1 Hand: Ace of Spades, Ace of Hearts
// CPU 2 Hand: King of Clubs, Queen of Clubs

// Flop: 2 of Hearts, 5 of Clubs, Ace of Clubs
// Turn: King of Hearts
// River: Jack of Hearts
// ```

// ### Dealing Cards:

// To keep things close to the game you will be dealing from 1 deck of standard playing cards. Once you deal that card you cannot deal it again. The exact method is part of the challenge and for you to decide, design and implement.
// In Texas Hold em you burn a card (draw and discard without looking at it) before you do the flop, turn and river. It removes these cards from the pool of possible cards that can be dealt. If you wish to show these cards (I did not in my example) then please for science go for it.

// ### Extension
// In the intermediate you will be asked to compare various hands of poker to find which hand is the winning hand.


function makeDeck(n) {
    // N is the number of decks....
    var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9",
        "10", "J", "Q", "K");
    var suits = new Array("Clubs", "Diamonds", "Hearts", "Spades");
    var i, j, k;
    var m;
    m = ranks.length * suits.length;
    var deck = new Array(n * m);

    // Set array of cards.

    // Fill the array with 'n' packs of cards.

    for (i = 0; i < n; i++) {
        for (j = 0; j < suits.length; j++) {
            for (k = 0; k < ranks.length; k++) {
                deck[i * m + j * ranks.length + k] = [ranks[k], suits[j]];
            }
        }
    }
    console.log(deck);
    return deck;
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


//should be passed a shuffled stack
function deal(playerNumber, stack) {
  var players = {};

  players['you'] = stack.splice(0, 2);

  for (var i = 2; i <= playerNumber; i++) {
    players['cpu-' + i] = stack.splice(0, 2);
  }

  var table = {};

  table.flop = stack.splice(0, 3);
  table.turn = stack.splice(0, 1);
  table.river = stack.splice(0, 1);


  console.log(players);
  console.log(table);

}



// make 1 deck
deck = makeDeck(1);

deck = shuffle(deck);

console.log(deal(8, deck));
