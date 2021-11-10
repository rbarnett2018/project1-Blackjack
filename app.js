// DEALT CARCS
let deckTrash = "";

//CARD DECK OF 52 CARDS NOT INCLUDING JOKERS INTEGAR 0-51
let deck = [
  11,
  21,
  31,
  41,
  51,
  61,
  71,
  81,
  91,
  101,
  1011,
  10111,
  101111,
  111,
  12,
  22,
  32,
  42,
  52,
  62,
  72,
  82,
  92,
  102,
  1022,
  10222,
  112,
  13,
  23,
  33,
  43,
  53,
  63,
  73,
  83,
  93,
  103,
  1033,
  10333,
  113,
  14,
  24,
  34,
  44,
  54,
  64,
  74,
  84,
  94,
  104,
  1044,
  10444,
  114
];
// CURRENT DEALT HAND OF CARDS

let cardsInHand = {
    dealerCard1: '',
    dealerCard2: '',
    dealerCard3: '',
    dealerCard4: '',
    dealerCard5: '',
    dealerCard6: '',
    dealerCard7: '',
    dealerCard8: '',

    playerCard1: '',
    playerCard2: '',
    playerCard3: '',
    playerCard4: '',
    playerCard5: '',
    playerCard6: '',
    playerCard7: '',
    playerCard8: '',
};

function play() {
    cardsInHand.dealerCard1 = deck[Math.floor(Math.random() * deck.length )]
    console.log(cardsInHand.dealerCard1);
}
