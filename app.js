console.dir(document);
//PICTURE OF CARDS
let picOfCards = {
  //HEARTS
  aceOH:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/800px-Playing_card_heart_A.svg.png',
  twoOH:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Playing_card_heart_2.svg/800px-Playing_card_heart_2.svg.png',
  threeOH:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Playing_card_heart_3.svg/800px-Playing_card_heart_3.svg.png',
  fourOH:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Playing_card_heart_4.svg/800px-Playing_card_heart_4.svg.png',
  fiveOH:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_heart_5.svg/800px-Playing_card_heart_5.svg.png',
  sixOH:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Playing_card_heart_6.svg/800px-Playing_card_heart_6.svg.png',
  sevenOH:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_heart_7.svg/800px-Playing_card_heart_7.svg.png',
  eightOH:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_8.svg/800px-Playing_card_heart_8.svg.png',
  nineOH:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_9.svg/800px-Playing_card_heart_9.svg.png',
  tenOH:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Playing_card_heart_10.svg/800px-Playing_card_heart_10.svg.png',
  jackOH:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Playing_card_heart_J.svg/800px-Playing_card_heart_J.svg.png',
  queenOH:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Playing_card_heart_Q.svg/800px-Playing_card_heart_Q.svg.png',
  kingOH:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Playing_card_heart_K.svg/800px-Playing_card_heart_K.svg.png',
  //DIAMONDS
  aceOD:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Playing_card_diamond_A.svg/800px-Playing_card_diamond_A.svg.png',
  twoOD:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Playing_card_diamond_2.svg/800px-Playing_card_diamond_2.svg.png',
  threeOD:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Playing_card_diamond_3.svg/800px-Playing_card_diamond_3.svg.png',
  fourOD:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Playing_card_diamond_4.svg/800px-Playing_card_diamond_4.svg.png',
  fiveOD:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Playing_card_diamond_5.svg/800px-Playing_card_diamond_5.svg.png',
  sixOD:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Playing_card_diamond_6.svg/800px-Playing_card_diamond_6.svg.png',
  sevenOD:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Playing_card_diamond_7.svg/800px-Playing_card_diamond_7.svg.png',
  eightOD:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_8.svg/800px-Playing_card_diamond_8.svg.png',
  nineOD:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Playing_card_diamond_9.svg/800px-Playing_card_diamond_9.svg.png',
  tenOD:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Playing_card_diamond_10.svg/800px-Playing_card_diamond_10.svg.png',
  jackOD:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Playing_card_diamond_J.svg/800px-Playing_card_diamond_J.svg.png',
  queenOD:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Playing_card_diamond_Q.svg/800px-Playing_card_diamond_Q.svg.png',
  kingOD:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_K.svg/800px-Playing_card_diamond_K.svg.png',
  //CLUBS
  aceOC:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Playing_card_club_A.svg/800px-Playing_card_club_A.svg.png',
  twoOC:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Playing_card_club_2.svg/800px-Playing_card_club_2.svg.png',
  threeOC:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Playing_card_club_3.svg/800px-Playing_card_club_3.svg.png',
  fourOC:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Playing_card_club_4.svg/800px-Playing_card_club_4.svg.png',
  fiveOC:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_club_5.svg/800px-Playing_card_club_5.svg.png',
  sixOC:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Playing_card_club_6.svg/800px-Playing_card_club_6.svg.png',
  sevenOC:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Playing_card_club_7.svg/800px-Playing_card_club_7.svg.png',
  eightOC:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/800px-Playing_card_club_8.svg.png',
  nineOC:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Playing_card_club_9.svg/800px-Playing_card_club_9.svg.png',
  tenOC:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Playing_card_club_10.svg/800px-Playing_card_club_10.svg.png',
  jackOC:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Playing_card_club_J.svg/800px-Playing_card_club_J.svg.png',
  queenOC:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_club_Q.svg/800px-Playing_card_club_Q.svg.png',
  kingOC:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Playing_card_club_K.svg/800px-Playing_card_club_K.svg.png',
  //SPADES
  aceOS:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/800px-Playing_card_spade_A.svg.png',
  twoOS:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/800px-Playing_card_spade_2.svg.png',
  threeOS:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/800px-Playing_card_spade_3.svg.png',
  fourOS:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/800px-Playing_card_spade_4.svg.png',
  fiveOS:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/800px-Playing_card_spade_5.svg.png',
  sixOS:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/800px-Playing_card_spade_6.svg.png',
  sevenOS:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/800px-Playing_card_spade_7.svg.png',
  eightOS:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/800px-Playing_card_spade_8.svg.png',
  nineOS:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/800px-Playing_card_spade_9.svg.png',
  tenOS:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/800px-Playing_card_spade_10.svg.png',
  jackOS:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Playing_card_spade_J.svg/800px-Playing_card_spade_J.svg.png',
  queenOS:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Playing_card_spade_Q.svg/800px-Playing_card_spade_Q.svg.png',
  kingOS:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Playing_card_spade_K.svg/800px-Playing_card_spade_K.svg.png',
  //BACK OF CARD
  backOfCard:'https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/red.svg',
}
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
  102222,
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
  103333,
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
  104444,
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

// MAKING CARD APPEAR WHEN DEALT

// function dealt (){

// }