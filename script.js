//Card variables
let suits = [];
let values = ['Ace','King','Queen','Jack','Ten','Nine','Eight','Seven','Six','Five','Four','Three','Two'];

//DOM variables
let textArea = document.getElementById('text-area');
let newGameBtn = document.getElementById('new-game-button');
let hitBtn = document.getElementById('hit-button');
let stayBtn = document.getElementById('stay-button');

//Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitBtn.style.display = 'none';
stayBtn.style.display = 'none';
showStatus();

newGameBtn.addEventListener('click', function() {
  textArea.innerText = 'Welcome to BlackJack -- button clicked';
  gameStarted = true;
  gameOver = false;
  playerWon = false;
  deck = createDeck();
  //textArea.innerText = "deck returned";
  shuffleDeck(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];
  newGameBtn.style.display = 'none';
  hitBtn.style.display = 'inline';
  stayBtn.style.display = 'inline';
  showStatus();
});

function createDeck() {
  //textArea.innerText = "creating deck now";
  let deck = [];
  for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
    for (let valuesIndex = 0; valuesIndex < values.length; valuesIndex++) {
      let card = {
        suit: suits[suitsIndex],
        value: values[valuesIndex]
      };
      deck.push(card);
    }
  }
  //textArea.innerText = "deck created";
  return deck;
}


function shuffleDeck(deck) {
  //textArea.innerText = "shuffling deck";
  //DOESN'T LIKE PARAMETER being passed in
  for (let i = 0; i < 50; i++) {
    textArea.innerText += "got to iterations" + i;
    let swapIndex = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swapIndex];
    deck[swapIndex] = deck[i];
    deck[i] = tmp;
    //textArea.innerText = "Shuffling" + i;
  }

}

function getCardString(card) {
  return card.value + ' of ' + card.suit;
}

function getNextCard() {
  return deck.shift();
}

function showStatus() {
  if (!gameStarted) {
    textArea.innerText = 'Welcome to BlackJack :)';
    return;
  }
  for (var i = 0; i < deck.length; i++) {
    textArea.innerText += '\n' + getCardString(deck[i]);
  }
}
