console.dir(document);
//PICTURE OF CARDS
let picOfCards = [
  //HEARTS
  (aceOH =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/800px-Playing_card_heart_A.svg.png"),
  (twoOH =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Playing_card_heart_2.svg/800px-Playing_card_heart_2.svg.png"),
  (threeOH =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Playing_card_heart_3.svg/800px-Playing_card_heart_3.svg.png"),
  (fourOH =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Playing_card_heart_4.svg/800px-Playing_card_heart_4.svg.png"),
  (fiveOH =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_heart_5.svg/800px-Playing_card_heart_5.svg.png"),
  (sixOH =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Playing_card_heart_6.svg/800px-Playing_card_heart_6.svg.png"),
  (sevenOH =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_heart_7.svg/800px-Playing_card_heart_7.svg.png"),
  (eightOH =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_8.svg/800px-Playing_card_heart_8.svg.png"),
  (nineOH =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_9.svg/800px-Playing_card_heart_9.svg.png"),
  (tenOH =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Playing_card_heart_10.svg/800px-Playing_card_heart_10.svg.png"),
  (jackOH =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Playing_card_heart_J.svg/800px-Playing_card_heart_J.svg.png"),
  (queenOH =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Playing_card_heart_Q.svg/800px-Playing_card_heart_Q.svg.png"),
  (kingOH =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Playing_card_heart_K.svg/800px-Playing_card_heart_K.svg.png"),
  //DIAMONDS
  (aceOD =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Playing_card_diamond_A.svg/800px-Playing_card_diamond_A.svg.png"),
  (twoOD =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Playing_card_diamond_2.svg/800px-Playing_card_diamond_2.svg.png"),
  (threeOD =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Playing_card_diamond_3.svg/800px-Playing_card_diamond_3.svg.png"),
  (fourOD =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Playing_card_diamond_4.svg/800px-Playing_card_diamond_4.svg.png"),
  (fiveOD =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Playing_card_diamond_5.svg/800px-Playing_card_diamond_5.svg.png"),
  (sixOD =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Playing_card_diamond_6.svg/800px-Playing_card_diamond_6.svg.png"),
  (sevenOD =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Playing_card_diamond_7.svg/800px-Playing_card_diamond_7.svg.png"),
  (eightOD =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_8.svg/800px-Playing_card_diamond_8.svg.png"),
  (nineOD =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Playing_card_diamond_9.svg/800px-Playing_card_diamond_9.svg.png"),
  (tenOD =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Playing_card_diamond_10.svg/800px-Playing_card_diamond_10.svg.png"),
  (jackOD =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Playing_card_diamond_J.svg/800px-Playing_card_diamond_J.svg.png"),
  (queenOD =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Playing_card_diamond_Q.svg/800px-Playing_card_diamond_Q.svg.png"),
  (kingOD =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_K.svg/800px-Playing_card_diamond_K.svg.png"),
  //CLUBS
  (aceOC =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Playing_card_club_A.svg/800px-Playing_card_club_A.svg.png"),
  (twoOC =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Playing_card_club_2.svg/800px-Playing_card_club_2.svg.png"),
  (threeOC =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Playing_card_club_3.svg/800px-Playing_card_club_3.svg.png"),
  (fourOC =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Playing_card_club_4.svg/800px-Playing_card_club_4.svg.png"),
  (fiveOC =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_club_5.svg/800px-Playing_card_club_5.svg.png"),
  (sixOC =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Playing_card_club_6.svg/800px-Playing_card_club_6.svg.png"),
  (sevenOC =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Playing_card_club_7.svg/800px-Playing_card_club_7.svg.png"),
  (eightOC =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/800px-Playing_card_club_8.svg.png"),
  (nineOC =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Playing_card_club_9.svg/800px-Playing_card_club_9.svg.png"),
  (tenOC =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Playing_card_club_10.svg/800px-Playing_card_club_10.svg.png"),
  (jackOC =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Playing_card_club_J.svg/800px-Playing_card_club_J.svg.png"),
  (queenOC =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_club_Q.svg/800px-Playing_card_club_Q.svg.png"),
  (kingOC =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Playing_card_club_K.svg/800px-Playing_card_club_K.svg.png"),
  //SPADES
  (aceOS =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/800px-Playing_card_spade_A.svg.png"),
  (twoOS =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/800px-Playing_card_spade_2.svg.png"),
  (threeOS =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/800px-Playing_card_spade_3.svg.png"),
  (fourOS =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/800px-Playing_card_spade_4.svg.png"),
  (fiveOS =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/800px-Playing_card_spade_5.svg.png"),
  (sixOS =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/800px-Playing_card_spade_6.svg.png"),
  (sevenOS =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/800px-Playing_card_spade_7.svg.png"),
  (eightOS =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/800px-Playing_card_spade_8.svg.png"),
  (nineOS =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/800px-Playing_card_spade_9.svg.png"),
  (tenOS =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/800px-Playing_card_spade_10.svg.png"),
  (jackOS =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Playing_card_spade_J.svg/800px-Playing_card_spade_J.svg.png"),
  (queenOS =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Playing_card_spade_Q.svg/800px-Playing_card_spade_Q.svg.png"),
  (kingOS =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Playing_card_spade_K.svg/800px-Playing_card_spade_K.svg.png")
];
//BACK OF CARD
let backOfCard =
  "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/red.svg";

//CARD DECK OF 52 CARDS NOT INCLUDING JOKERS INTEGAR 0-51
//CHANGE THIS ARRAY INTO THE VARIABLES ABOVE SO WHEN THE VARIABLE IS CHOSEN IT IS ACCOCIATED WITH THE LINK, THEN MAKE A FUNCTION WHICH REPLACES THE CSS BACKGROUND IMAGE WITH THE VALUE OF THE VARIABLE CHOSEN
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
  dealerCard1: "",
  dealerCard2: "",
  dealerCard3: "",
  dealerCard4: "",
  dealerCard5: "",
  dealerCard6: "",
  dealerCard7: "",
  dealerCard8: "",

  playerCard1: "",
  playerCard2: "",
  playerCard3: "",
  playerCard4: "",
  playerCard5: "",
  playerCard6: "",
  playerCard7: "",
  playerCard8: ""
};

// MAKING CARD APPEAR WHEN DEALT

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
  return array;
}

//CARD IMAGES INPUT
//DEALER
let dC1 = (document.getElementById("dCard1").style.backgroundImage = "");
let dC2 = (document.getElementById("dCard2").style.backgroundImage = "");
let dC3 = (document.getElementById("dCard3").style.backgroundImage = "");
let dC4 = (document.getElementById("dCard4").style.backgroundImage = "");
let dC5 = (document.getElementById("dCard5").style.backgroundImage = "");
let dC6 = (document.getElementById("dCard6").style.backgroundImage = "");
let dC7 = (document.getElementById("dCard7").style.backgroundImage = "");
let dC8 = (document.getElementById("dCard8").style.backgroundImage = "");
//PLAYER
let pC1 = (document.getElementById("pCard1").style.backgroundImage = "");
let pC2 = (document.getElementById("pCard2").style.backgroundImage = "");
let pC3 = (document.getElementById("pCard3").style.backgroundImage = "");
let pC4 = (document.getElementById("pCard4").style.backgroundImage = "");
let pC5 = (document.getElementById("pCard5").style.backgroundImage = "");
let pC6 = (document.getElementById("pCard6").style.backgroundImage = "");
let pC7 = (document.getElementById("pCard7").style.backgroundImage = "");
let pC8 = (document.getElementById("pCard8").style.backgroundImage = "");

//WEBSITES
let websites = [
  //HEARTS
  (aceOH1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/800px-Playing_card_heart_A.svg.png')"),
  (twoOH1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Playing_card_heart_2.svg/800px-Playing_card_heart_2.svg.png')"),
  (threeOH1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Playing_card_heart_3.svg/800px-Playing_card_heart_3.svg.png')"),
  (fourOH1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Playing_card_heart_4.svg/800px-Playing_card_heart_4.svg.png')"),
  (fiveOH1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_heart_5.svg/800px-Playing_card_heart_5.svg.png')"),
  (sixOH1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Playing_card_heart_6.svg/800px-Playing_card_heart_6.svg.png')"),
  (sevenOH1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_heart_7.svg/800px-Playing_card_heart_7.svg.png')"),
  (eightOH1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_8.svg/800px-Playing_card_heart_8.svg.png')"),
  (nineOH1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_9.svg/800px-Playing_card_heart_9.svg.png')"),
  (tenOH1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Playing_card_heart_10.svg/800px-Playing_card_heart_10.svg.png')"),
  (jackOH1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Playing_card_heart_J.svg/800px-Playing_card_heart_J.svg.png')"),
  (queenOH1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Playing_card_heart_Q.svg/800px-Playing_card_heart_Q.svg.png')"),
  (kingOH1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Playing_card_heart_K.svg/800px-Playing_card_heart_K.svg.png')"),
  (aceOH111 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/800px-Playing_card_heart_A.svg.png')"),
  //DIAMONDS
  (aceOD1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Playing_card_diamond_A.svg/800px-Playing_card_diamond_A.svg.png')"),
  (twoOD1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Playing_card_diamond_2.svg/800px-Playing_card_diamond_2.svg.png')"),
  (threeOD1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Playing_card_diamond_3.svg/800px-Playing_card_diamond_3.svg.png')"),
  (fourOD1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Playing_card_diamond_4.svg/800px-Playing_card_diamond_4.svg.png')"),
  (fiveOD1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Playing_card_diamond_5.svg/800px-Playing_card_diamond_5.svg.png')"),
  (sixOD1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Playing_card_diamond_6.svg/800px-Playing_card_diamond_6.svg.png')"),
  (sevenOD1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Playing_card_diamond_7.svg/800px-Playing_card_diamond_7.svg.png')"),
  (eightOD1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_8.svg/800px-Playing_card_diamond_8.svg.png')"),
  (nineOD1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Playing_card_diamond_9.svg/800px-Playing_card_diamond_9.svg.png')"),
  (tenOD1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Playing_card_diamond_10.svg/800px-Playing_card_diamond_10.svg.png')"),
  (jackOD1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Playing_card_diamond_J.svg/800px-Playing_card_diamond_J.svg.png')"),
  (queenOD1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Playing_card_diamond_Q.svg/800px-Playing_card_diamond_Q.svg.png')"),
  (kingOD1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_K.svg/800px-Playing_card_diamond_K.svg.png')"),
  (aceOD111 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Playing_card_diamond_A.svg/800px-Playing_card_diamond_A.svg.png')"),
  //CLUBS
  (aceOC1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Playing_card_club_A.svg/800px-Playing_card_club_A.svg.png')"),
  (twoOC1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Playing_card_club_2.svg/800px-Playing_card_club_2.svg.png')"),
  (threeOC1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Playing_card_club_3.svg/800px-Playing_card_club_3.svg.png')"),
  (fourOC1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Playing_card_club_4.svg/800px-Playing_card_club_4.svg.png')"),
  (fiveOC1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_club_5.svg/800px-Playing_card_club_5.svg.png')"),
  (sixOC1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Playing_card_club_6.svg/800px-Playing_card_club_6.svg.png')"),
  (sevenOC1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Playing_card_club_7.svg/800px-Playing_card_club_7.svg.png')"),
  (eightOC1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/800px-Playing_card_club_8.svg.png')"),
  (nineOC1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Playing_card_club_9.svg/800px-Playing_card_club_9.svg.png')"),
  (tenOC1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Playing_card_club_10.svg/800px-Playing_card_club_10.svg.png')"),
  (jackOC1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Playing_card_club_J.svg/800px-Playing_card_club_J.svg.png')"),
  (queenOC1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_club_Q.svg/800px-Playing_card_club_Q.svg.png')"),
  (kingOC1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Playing_card_club_K.svg/800px-Playing_card_club_K.svg.png')"),
  (aceOC111 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Playing_card_club_A.svg/800px-Playing_card_club_A.svg.png')"),
  //SPADES
  (aceOS1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/800px-Playing_card_spade_A.svg.png')"),
  (twoOS1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/800px-Playing_card_spade_2.svg.png')"),
  (threeOS1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/800px-Playing_card_spade_3.svg.png')"),
  (fourOS1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/800px-Playing_card_spade_4.svg.png')"),
  (fiveOS1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/800px-Playing_card_spade_5.svg.png')"),
  (sixOS1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/800px-Playing_card_spade_6.svg.png')"),
  (sevenOS1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/800px-Playing_card_spade_7.svg.png')"),
  (eightOS1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/800px-Playing_card_spade_8.svg.png')"),
  (nineOS1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/800px-Playing_card_spade_9.svg.png')"),
  (tenOS1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/800px-Playing_card_spade_10.svg.png')"),
  (jackOS1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Playing_card_spade_J.svg/800px-Playing_card_spade_J.svg.png')"),
  (queenOS1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Playing_card_spade_Q.svg/800px-Playing_card_spade_Q.svg.png')"),
  (kingOS1 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Playing_card_spade_K.svg/800px-Playing_card_spade_K.svg.png')"),
  (aceOS111 =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/800px-Playing_card_spade_A.svg.png')")
];
// DEALT CARCS
let deckTrash = "";

//RANDOM CARD GENERATOR
function shuffle(array) {
  for (let currentIndex = array.length - 1; currentIndex >= 0; currentIndex--) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
  return array;
}
let sum = (previousValue, currentValue) => previousValue + currentValue;
let clicksOnHit = 0;
let negative = 10;

//PLAYERS VALUES
let dealerCardValues = [0];
let playerCardValues = [0];
let playerCardValues1 = [0];
let valueD = [0];
let valueP = [0];

function refreshPage() {
  window.location.href = window.location.href;
}
function ifP() {
  if (cardsInHand.playerCard3 === aceOH) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = aceOH1;
    playerCardValues.push(11);
    document.getElementById("onep3").style.display = "initial";
  } else if (cardsInHand.playerCard3 == twoOH) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = twoOH1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard3 == threeOH) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = threeOH1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard3 == fourOH) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = fourOH1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard3 == fiveOH) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = fiveOH1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard3 == sixOH) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = sixOH1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard3 == sevenOH) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = sevenOH1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard3 == eightOH) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = eightOH1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard3 == nineOH) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = nineOH1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard3 == tenOH) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = tenOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard3 == jackOH) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = jackOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard3 == queenOH) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = queenOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard3 == kingOH) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = kingOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard3 == aceOH111) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = aceOH1;
    playerCardValues.push(11);
    document.getElementById("onep3").style.display = "initial";
  } else if (cardsInHand.playerCard3 == aceOD) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = aceOD1;
    playerCardValues.push(11);
    document.getElementById("onep3").style.display = "initial";
  } else if (cardsInHand.playerCard3 == twoOD) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = twoOD1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard3 == threeOD) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = threeOD1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard3 == fourOD) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = fourOD1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard3 == fiveOD) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = fiveOD1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard3 == sixOD) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = sixOD1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard3 == sevenOD) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = sevenOD1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard3 == eightOD) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = eightOD1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard3 == nineOD) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = nineOD1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard3 == tenOD) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = tenOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard3 == jackOD) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = jackOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard3 == queenOD) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = queenOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard3 == kingOD) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = kingOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard3 == aceOD111) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = aceOD1;
    playerCardValues.push(11);
    document.getElementById("onep3").style.display = "initial";
  } else if (cardsInHand.playerCard3 == aceOC) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = aceOC1;
    playerCardValues.push(11);
    document.getElementById("onep3").style.display = "initial";
  } else if (cardsInHand.playerCard3 == twoOC) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = twoOC1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard3 == threeOC) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = threeOC1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard3 == fourOC) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = fourOC1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard3 == fiveOC) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = fiveOC1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard3 == sixOC) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = sixOC1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard3 == sevenOC) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = sevenOC1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard3 == eightOC) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = eightOC1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard3 == nineOC) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = nineOC1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard3 == tenOC) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = tenOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard3 == jackOC) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = jackOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard3 == queenOC) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = queenOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard3 == kingOC) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = kingOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard3 == aceOC111) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = aceOC1;
    playerCardValues.push(11);
    document.getElementById("onep3").style.display = "initial";
  } else if (cardsInHand.playerCard3 == aceOS) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = aceOS1;
    playerCardValues.push(11);
    document.getElementById("onep3").style.display = "initial";
  } else if (cardsInHand.playerCard3 == twoOS) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = twoOS1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard3 == threeOS) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = threeOS1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard3 == fourOS) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = fourOS1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard3 == fiveOS) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = fiveOS1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard3 == sixOS) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = sixOS1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard3 == sevenOS) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = sevenOS1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard3 == eightOS) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = eightOS1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard3 == nineOS) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = nineOS1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard3 == tenOS) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = tenOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard3 == jackOS) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = jackOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard3 == queenOS) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = queenOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard3 == kingOS) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = kingOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard3 == aceOS111) {
    pC3 = document.getElementById("pCard3").style.backgroundImage = aceOS1;
    playerCardValues.push(11);
    document.getElementById("onep3").style.display = "initial";
  }

  //PLAYERS FOURTH CARD
  if (cardsInHand.playerCard4 === aceOH) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = aceOH1;
    playerCardValues.push(11);
    document.getElementById("onep4").style.display = "initial";
  } else if (cardsInHand.playerCard4 == twoOH) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = twoOH1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard4 == threeOH) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = threeOH1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard4 == fourOH) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = fourOH1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard4 == fiveOH) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = fiveOH1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard4 == sixOH) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = sixOH1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard4 == sevenOH) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = sevenOH1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard4 == eightOH) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = eightOH1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard4 == nineOH) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = nineOH1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard4 == tenOH) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = tenOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard4 == jackOH) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = jackOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard4 == queenOH) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = queenOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard4 == kingOH) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = kingOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard4 == aceOH111) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = aceOH1;
    playerCardValues.push(11);
    document.getElementById("onep4").style.display = "initial";
  } else if (cardsInHand.playerCard4 == aceOD) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = aceOD1;
    playerCardValues.push(11);
    document.getElementById("onep4").style.display = "initial";
  } else if (cardsInHand.playerCard4 == twoOD) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = twoOD1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard4 == threeOD) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = threeOD1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard4 == fourOD) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = fourOD1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard4 == fiveOD) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = fiveOD1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard4 == sixOD) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = sixOD1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard4 == sevenOD) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = sevenOD1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard4 == eightOD) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = eightOD1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard4 == nineOD) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = nineOD1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard4 == tenOD) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = tenOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard4 == jackOD) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = jackOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard4 == queenOD) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = queenOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard4 == kingOD) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = kingOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard4 == aceOD111) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = aceOD1;
    playerCardValues.push(11);
    document.getElementById("onep4").style.display = "initial";
  } else if (cardsInHand.playerCard4 == aceOC) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = aceOC1;
    playerCardValues.push(11);
    document.getElementById("onep4").style.display = "initial";
  } else if (cardsInHand.playerCard4 == twoOC) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = twoOC1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard4 == threeOC) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = threeOC1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard4 == fourOC) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = fourOC1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard4 == fiveOC) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = fiveOC1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard4 == sixOC) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = sixOC1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard4 == sevenOC) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = sevenOC1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard4 == eightOC) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = eightOC1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard4 == nineOC) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = nineOC1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard4 == tenOC) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = tenOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard4 == jackOC) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = jackOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard4 == queenOC) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = queenOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard4 == kingOC) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = kingOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard4 == aceOC111) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = aceOC1;
    playerCardValues.push(11);
    document.getElementById("onep4").style.display = "initial";
  } else if (cardsInHand.playerCard4 == aceOS) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = aceOS1;
    playerCardValues.push(11);
    document.getElementById("onep4").style.display = "initial";
  } else if (cardsInHand.playerCard4 == twoOS) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = twoOS1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard4 == threeOS) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = threeOS1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard4 == fourOS) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = fourOS1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard4 == fiveOS) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = fiveOS1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard4 == sixOS) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = sixOS1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard4 == sevenOS) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = sevenOS1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard4 == eightOS) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = eightOS1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard4 == nineOS) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = nineOS1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard4 == tenOS) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = tenOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard4 == jackOS) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = jackOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard4 == queenOS) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = queenOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard4 == kingOS) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = kingOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard4 == aceOS111) {
    pC4 = document.getElementById("pCard4").style.backgroundImage = aceOS1;
    playerCardValues.push(11);
    document.getElementById("onep4").style.display = "initial";
  }

  //PLAYERS FIFTH CARD
  if (cardsInHand.playerCard5 === aceOH) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = aceOH1;
    playerCardValues.push(11);
    document.getElementById("onep5").style.display = "initial";
  } else if (cardsInHand.playerCard5 == twoOH) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = twoOH1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard5 == threeOH) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = threeOH1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard5 == fourOH) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = fourOH1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard5 == fiveOH) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = fiveOH1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard5 == sixOH) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = sixOH1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard5 == sevenOH) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = sevenOH1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard5 == eightOH) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = eightOH1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard5 == nineOH) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = nineOH1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard5 == tenOH) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = tenOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard5 == jackOH) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = jackOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard5 == queenOH) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = queenOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard5 == kingOH) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = kingOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard5 == aceOH111) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = aceOH1;
    playerCardValues.push(11);
    document.getElementById("onep5").style.display = "initial";
  } else if (cardsInHand.playerCard5 == aceOD) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = aceOD1;
    playerCardValues.push(11);
    document.getElementById("onep5").style.display = "initial";
  } else if (cardsInHand.playerCard5 == twoOD) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = twoOD1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard5 == threeOD) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = threeOD1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard5 == fourOD) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = fourOD1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard5 == fiveOD) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = fiveOD1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard5 == sixOD) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = sixOD1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard5 == sevenOD) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = sevenOD1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard5 == eightOD) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = eightOD1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard5 == nineOD) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = nineOD1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard5 == tenOD) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = tenOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard5 == jackOD) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = jackOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard5 == queenOD) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = queenOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard5 == kingOD) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = kingOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard5 == aceOD111) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = aceOD1;
    playerCardValues.push(11);
    document.getElementById("onep5").style.display = "initial";
  } else if (cardsInHand.playerCard5 == aceOC) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = aceOC1;
    playerCardValues.push(11);
    document.getElementById("onep5").style.display = "initial";
  } else if (cardsInHand.playerCard5 == twoOC) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = twoOC1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard5 == threeOC) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = threeOC1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard5 == fourOC) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = fourOC1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard5 == fiveOC) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = fiveOC1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard5 == sixOC) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = sixOC1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard5 == sevenOC) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = sevenOC1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard5 == eightOC) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = eightOC1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard5 == nineOC) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = nineOC1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard5 == tenOC) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = tenOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard5 == jackOC) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = jackOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard5 == queenOC) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = queenOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard5 == kingOC) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = kingOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard5 == aceOC111) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = aceOC1;
    playerCardValues.push(11);
    document.getElementById("onep5").style.display = "initial";
  } else if (cardsInHand.playerCard5 == aceOS) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = aceOS1;
    playerCardValues.push(11);
    document.getElementById("onep5").style.display = "initial";
  } else if (cardsInHand.playerCard5 == twoOS) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = twoOS1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard5 == threeOS) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = threeOS1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard5 == fourOS) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = fourOS1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard5 == fiveOS) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = fiveOS1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard5 == sixOS) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = sixOS1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard5 == sevenOS) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = sevenOS1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard5 == eightOS) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = eightOS1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard5 == nineOS) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = nineOS1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard5 == tenOS) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = tenOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard5 == jackOS) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = jackOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard5 == queenOS) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = queenOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard5 == kingOS) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = kingOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard5 == aceOS111) {
    pc5 = document.getElementById("pCard5").style.backgroundImage = aceOS1;
    playerCardValues.push(11);
    document.getElementById("onep5").style.display = "initial";
  }

  //PLAYERS SIXTH CARD
  if (cardsInHand.playerCard6 === aceOH) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = aceOH1;
    playerCardValues.push(11);
    document.getElementById("onep6").style.display = "initial";
  } else if (cardsInHand.playerCard6 == twoOH) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = twoOH1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard6 == threeOH) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = threeOH1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard6 == fourOH) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = fourOH1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard6 == fiveOH) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = fiveOH1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard6 == sixOH) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = sixOH1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard6 == sevenOH) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = sevenOH1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard6 == eightOH) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = eightOH1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard6 == nineOH) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = nineOH1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard6 == tenOH) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = tenOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard6 == jackOH) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = jackOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard6 == queenOH) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = queenOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard6 == kingOH) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = kingOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard6 == aceOH111) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = aceOH1;
    playerCardValues.push(11);
    document.getElementById("onep6").style.display = "initial";
  } else if (cardsInHand.playerCard6 == aceOD) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = aceOD1;
    playerCardValues.push(11);
    document.getElementById("onep6").style.display = "initial";
  } else if (cardsInHand.playerCard6 == twoOD) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = twoOD1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard6 == threeOD) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = threeOD1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard6 == fourOD) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = fourOD1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard6 == fiveOD) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = fiveOD1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard6 == sixOD) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = sixOD1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard6 == sevenOD) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = sevenOD1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard6 == eightOD) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = eightOD1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard6 == nineOD) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = nineOD1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard6 == tenOD) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = tenOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard6 == jackOD) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = jackOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard6 == queenOD) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = queenOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard6 == kingOD) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = kingOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard6 == aceOD111) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = aceOD1;
    playerCardValues.push(11);
    document.getElementById("onep6").style.display = "initial";
  } else if (cardsInHand.playerCard6 == aceOC) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = aceOC1;
    playerCardValues.push(11);
    document.getElementById("onep6").style.display = "initial";
  } else if (cardsInHand.playerCard6 == twoOC) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = twoOC1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard6 == threeOC) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = threeOC1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard6 == fourOC) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = fourOC1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard6 == fiveOC) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = fiveOC1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard6 == sixOC) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = sixOC1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard6 == sevenOC) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = sevenOC1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard6 == eightOC) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = eightOC1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard6 == nineOC) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = nineOC1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard6 == tenOC) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = tenOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard6 == jackOC) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = jackOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard6 == queenOC) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = queenOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard6 == kingOC) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = kingOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard6 == aceOC111) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = aceOC1;
    playerCardValues.push(11);
    document.getElementById("onep6").style.display = "initial";
  } else if (cardsInHand.playerCard6 == aceOS) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = aceOS1;
    playerCardValues.push(11);
    document.getElementById("onep6").style.display = "initial";
  } else if (cardsInHand.playerCard6 == twoOS) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = twoOS1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard6 == threeOS) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = threeOS1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard6 == fourOS) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = fourOS1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard6 == fiveOS) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = fiveOS1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard6 == sixOS) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = sixOS1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard6 == sevenOS) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = sevenOS1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard6 == eightOS) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = eightOS1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard6 == nineOS) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = nineOS1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard6 == tenOS) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = tenOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard6 == jackOS) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = jackOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard6 == queenOS) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = queenOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard6 == kingOS) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = kingOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard6 == aceOS111) {
    pc6 = document.getElementById("pCard6").style.backgroundImage = aceOS1;
    playerCardValues.push(11);
    document.getElementById("onep6").style.display = "initial";
  }

  //PLAYERS SEVENTH CARD
  if (cardsInHand.playerCard7 === aceOH) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = aceOH1;
    playerCardValues.push(11);
    document.getElementById("onep7").style.display = "initial";
  } else if (cardsInHand.playerCard7 == twoOH) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = twoOH1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard7 == threeOH) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = threeOH1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard7 == fourOH) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = fourOH1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard7 == fiveOH) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = fiveOH1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard7 == sixOH) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = sixOH1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard7 == sevenOH) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = sevenOH1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard7 == eightOH) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = eightOH1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard7 == nineOH) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = nineOH1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard7 == tenOH) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = tenOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard7 == jackOH) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = jackOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard7 == queenOH) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = queenOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard7 == kingOH) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = kingOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard7 == aceOH111) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = aceOH1;
    playerCardValues.push(11);
    document.getElementById("onep7").style.display = "initial";
  } else if (cardsInHand.playerCard7 == aceOD) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = aceOD1;
    playerCardValues.push(11);
    document.getElementById("onep7").style.display = "initial";
  } else if (cardsInHand.playerCard7 == twoOD) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = twoOD1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard7 == threeOD) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = threeOD1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard7 == fourOD) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = fourOD1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard7 == fiveOD) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = fiveOD1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard7 == sixOD) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = sixOD1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard7 == sevenOD) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = sevenOD1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard7 == eightOD) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = eightOD1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard7 == nineOD) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = nineOD1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard7 == tenOD) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = tenOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard7 == jackOD) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = jackOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard7 == queenOD) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = queenOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard7 == kingOD) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = kingOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard7 == aceOD111) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = aceOD1;
    playerCardValues.push(11);
    document.getElementById("onep7").style.display = "initial";
  } else if (cardsInHand.playerCard7 == aceOC) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = aceOC1;
    playerCardValues.push(11);
    document.getElementById("onep7").style.display = "initial";
  } else if (cardsInHand.playerCard7 == twoOC) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = twoOC1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard7 == threeOC) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = threeOC1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard7 == fourOC) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = fourOC1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard7 == fiveOC) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = fiveOC1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard7 == sixOC) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = sixOC1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard7 == sevenOC) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = sevenOC1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard7 == eightOC) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = eightOC1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard7 == nineOC) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = nineOC1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard7 == tenOC) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = tenOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard7 == jackOC) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = jackOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard7 == queenOC) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = queenOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard7 == kingOC) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = kingOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard7 == aceOC111) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = aceOC1;
    playerCardValues.push(11);
    document.getElementById("onep7").style.display = "initial";
  } else if (cardsInHand.playerCard7 == aceOS) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = aceOS1;
    playerCardValues.push(11);
    document.getElementById("onep7").style.display = "initial";
  } else if (cardsInHand.playerCard7 == twoOS) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = twoOS1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard7 == threeOS) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = threeOS1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard7 == fourOS) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = fourOS1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard7 == fiveOS) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = fiveOS1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard7 == sixOS) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = sixOS1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard7 == sevenOS) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = sevenOS1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard7 == eightOS) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = eightOS1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard7 == nineOS) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = nineOS1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard7 == tenOS) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = tenOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard7 == jackOS) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = jackOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard7 == queenOS) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = queenOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard7 == kingOS) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = kingOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard7 == aceOS111) {
    pC7 = document.getElementById("pCard7").style.backgroundImage = aceOS1;
    playerCardValues.push(11);
    document.getElementById("onep7").style.display = "initial";
  }

  //PLAYERS EIGHTH CARD
  if (cardsInHand.playerCard8 === aceOH) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = aceOH1;
    playerCardValues.push(11);
    document.getElementById("onep8").style.display = "initial";
  } else if (cardsInHand.playerCard8 == twoOH) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = twoOH1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard8 == threeOH) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = threeOH1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard8 == fourOH) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = fourOH1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard8 == fiveOH) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = fiveOH1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard8 == sixOH) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = sixOH1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard8 == sevenOH) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = sevenOH1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard8 == eightOH) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = eightOH1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard8 == nineOH) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = nineOH1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard8 == tenOH) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = tenOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard8 == jackOH) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = jackOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard8 == queenOH) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = queenOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard8 == kingOH) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = kingOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard8 == aceOH111) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = aceOH1;
    playerCardValues.push(11);
    document.getElementById("onep8").style.display = "initial";
  } else if (cardsInHand.playerCard8 == aceOD) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = aceOD1;
    playerCardValues.push(11);
    document.getElementById("onep8").style.display = "initial";
  } else if (cardsInHand.playerCard8 == twoOD) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = twoOD1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard8 == threeOD) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = threeOD1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard8 == fourOD) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = fourOD1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard8 == fiveOD) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = fiveOD1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard8 == sixOD) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = sixOD1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard8 == sevenOD) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = sevenOD1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard8 == eightOD) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = eightOD1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard8 == nineOD) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = nineOD1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard8 == tenOD) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = tenOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard8 == jackOD) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = jackOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard8 == queenOD) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = queenOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard8 == kingOD) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = kingOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard8 == aceOD111) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = aceOD1;
    playerCardValues.push(11);
    document.getElementById("onep8").style.display = "initial";
  } else if (cardsInHand.playerCard8 == aceOC) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = aceOC1;
    playerCardValues.push(11);
    document.getElementById("onep8").style.display = "initial";
  } else if (cardsInHand.playerCard8 == twoOC) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = twoOC1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard8 == threeOC) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = threeOC1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard8 == fourOC) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = fourOC1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard8 == fiveOC) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = fiveOC1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard8 == sixOC) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = sixOC1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard8 == sevenOC) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = sevenOC1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard8 == eightOC) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = eightOC1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard8 == nineOC) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = nineOC1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard8 == tenOC) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = tenOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard8 == jackOC) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = jackOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard8 == queenOC) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = queenOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard8 == kingOC) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = kingOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard8 == aceOC111) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = aceOC1;
    playerCardValues.push(11);
    document.getElementById("onep8").style.display = "initial";
  } else if (cardsInHand.playerCard8 == aceOS) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = aceOS1;
    playerCardValues.push(11);
    document.getElementById("onep8").style.display = "initial";
  } else if (cardsInHand.playerCard8 == twoOS) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = twoOS1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard8 == threeOS) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = threeOS1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard8 == fourOS) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = fourOS1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard8 == fiveOS) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = fiveOS1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard8 == sixOS) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = sixOS1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard8 == sevenOS) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = sevenOS1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard8 == eightOS) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = eightOS1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard8 == nineOS) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = nineOS1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard8 == tenOS) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = tenOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard8 == jackOS) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = jackOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard8 == queenOS) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = queenOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard8 == kingOS) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = kingOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard8 == aceOS111) {
    pC8 = document.getElementById("pCard8").style.backgroundImage = aceOS1;
    playerCardValues.push(11);
    document.getElementById("onep8").style.display = "initial";
  }
}
function ifS() {
  if (cardsInHand.dealerCard1 === aceOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard1 == twoOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = twoOH1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard1 == threeOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = threeOH1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard1 == fourOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = fourOH1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard1 == fiveOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = fiveOH1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard1 == sixOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = sixOH1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard1 == sevenOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = sevenOH1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard1 == eightOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = eightOH1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard1 == nineOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = nineOH1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard1 == tenOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = tenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == jackOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = jackOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == queenOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = queenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == kingOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = kingOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == aceOH111) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard1 == aceOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard1 == twoOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = twoOD1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard1 == threeOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = threeOD1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard1 == fourOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = fourOD1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard1 == fiveOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = fiveOD1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard1 == sixOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = sixOD1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard1 == sevenOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = sevenOD1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard1 == eightOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = eightOD1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard1 == nineOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = nineOD1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard1 == tenOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = tenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == jackOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = jackOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == queenOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = queenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == kingOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = kingOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == aceOD111) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard1 == aceOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard1 == twoOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = twoOC1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard1 == threeOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = threeOC1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard1 == fourOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = fourOC1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard1 == fiveOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = fiveOC1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard1 == sixOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = sixOC1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard1 == sevenOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = sevenOC1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard1 == eightOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = eightOC1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard1 == nineOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = nineOC1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard1 == tenOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = tenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == jackOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = jackOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == queenOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = queenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == kingOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = kingOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == aceOC111) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard1 == aceOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard1 == twoOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = twoOS1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard1 == threeOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = threeOS1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard1 == fourOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = fourOS1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard1 == fiveOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = fiveOS1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard1 == sixOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = sixOS1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard1 == sevenOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = sevenOS1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard1 == eightOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = eightOS1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard1 == nineOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = nineOS1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard1 == tenOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = tenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == jackOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = jackOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == queenOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = queenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == kingOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = kingOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == aceOS111) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  }

  //DEALER'S SECOND CARD
  if (cardsInHand.dealerCard2 === aceOH) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard2 == twoOH) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = twoOH1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard2 == threeOH) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = threeOH1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard2 == fourOH) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = fourOH1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard2 == fiveOH) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = fiveOH1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard2 == sixOH) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = sixOH1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard2 == sevenOH) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = sevenOH1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard2 == eightOH) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = eightOH1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard2 == nineOH) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = nineOH1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard2 == tenOH) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = tenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard2 == jackOH) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = jackOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard2 == queenOH) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = queenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard2 == kingOH) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = kingOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard2 == aceOH111) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard2 == aceOD) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard2 == twoOD) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = twoOD1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard2 == threeOD) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = threeOD1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard2 == fourOD) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = fourOD1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard2 == fiveOD) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = fiveOD1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard2 == sixOD) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = sixOD1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard2 == sevenOD) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = sevenOD1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard2 == eightOD) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = eightOD1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard2 == nineOD) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = nineOD1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard2 == tenOD) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = tenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard2 == jackOD) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = jackOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard2 == queenOD) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = queenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard2 == kingOD) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = kingOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard2 == aceOD111) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard2 == aceOC) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard2 == twoOC) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = twoOC1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard2 == threeOC) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = threeOC1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard2 == fourOC) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = fourOC1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard2 == fiveOC) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = fiveOC1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard2 == sixOC) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = sixOC1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard2 == sevenOC) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = sevenOC1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard2 == eightOC) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = eightOC1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard2 == nineOC) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = nineOC1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard2 == tenOC) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = tenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard2 == jackOC) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = jackOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard2 == queenOC) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = queenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard2 == kingOC) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = kingOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard2 == aceOC111) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard2 == aceOS) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard2 == twoOS) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = twoOS1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard2 == threeOS) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = threeOS1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard2 == fourOS) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = fourOS1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard2 == fiveOS) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = fiveOS1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard2 == sixOS) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = sixOS1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard2 == sevenOS) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = sevenOS1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard2 == eightOS) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = eightOS1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard2 == nineOS) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = nineOS1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard2 == tenOS) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = tenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard2 == jackOS) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = jackOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard2 == queenOS) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = queenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard2 == kingOS) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = kingOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard2 == aceOS111) {
    dC2 = document.getElementById("dCard2").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  }

  //PLAYER
  //PLAYERS FIRST CARD
  if (cardsInHand.playerCard1 === aceOH) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = aceOH1;
    playerCardValues.push(11);
    document.getElementById("onep1").style.display = "initial";
  } else if (cardsInHand.playerCard1 == twoOH) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = twoOH1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard1 == threeOH) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = threeOH1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard1 == fourOH) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = fourOH1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard1 == fiveOH) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = fiveOH1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard1 == sixOH) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = sixOH1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard1 == sevenOH) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = sevenOH1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard1 == eightOH) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = eightOH1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard1 == nineOH) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = nineOH1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard1 == tenOH) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = tenOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard1 == jackOH) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = jackOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard1 == queenOH) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = queenOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard1 == kingOH) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = kingOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard1 == aceOH111) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = aceOH1;
    playerCardValues.push(11);
    document.getElementById("onep1").style.display = "initial";
  } else if (cardsInHand.playerCard1 == aceOD) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = aceOD1;
    playerCardValues.push(11);
    document.getElementById("onep1").style.display = "initial";
  } else if (cardsInHand.playerCard1 == twoOD) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = twoOD1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard1 == threeOD) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = threeOD1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard1 == fourOD) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = fourOD1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard1 == fiveOD) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = fiveOD1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard1 == sixOD) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = sixOD1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard1 == sevenOD) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = sevenOD1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard1 == eightOD) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = eightOD1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard1 == nineOD) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = nineOD1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard1 == tenOD) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = tenOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard1 == jackOD) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = jackOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard1 == queenOD) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = queenOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard1 == kingOD) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = kingOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard1 == aceOD111) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = aceOD1;
    playerCardValues.push(11);
    document.getElementById("onep1").style.display = "initial";
  } else if (cardsInHand.playerCard1 == aceOC) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = aceOC1;
    playerCardValues.push(11);
    document.getElementById("onep1").style.display = "initial";
  } else if (cardsInHand.playerCard1 == twoOC) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = twoOC1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard1 == threeOC) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = threeOC1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard1 == fourOC) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = fourOC1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard1 == fiveOC) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = fiveOC1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard1 == sixOC) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = sixOC1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard1 == sevenOC) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = sevenOC1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard1 == eightOC) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = eightOC1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard1 == nineOC) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = nineOC1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard1 == tenOC) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = tenOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard1 == jackOC) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = jackOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard1 == queenOC) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = queenOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard1 == kingOC) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = kingOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard1 == aceOC111) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = aceOC1;
    playerCardValues.push(11);
    document.getElementById("onep1").style.display = "initial";
  } else if (cardsInHand.playerCard1 == aceOS) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = aceOS1;
    playerCardValues.push(11);
    document.getElementById("onep1").style.display = "initial";
  } else if (cardsInHand.playerCard1 == twoOS) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = twoOS1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard1 == threeOS) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = threeOS1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard1 == fourOS) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = fourOS1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard1 == fiveOS) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = fiveOS1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard1 == sixOS) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = sixOS1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard1 == sevenOS) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = sevenOS1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard1 == eightOS) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = eightOS1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard1 == nineOS) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = nineOS1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard1 == tenOS) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = tenOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard1 == jackOS) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = jackOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard1 == queenOS) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = queenOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard1 == kingOS) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = kingOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard1 == aceOS111) {
    pC1 = document.getElementById("pCard1").style.backgroundImage = aceOS1;
    playerCardValues.push(11);
    document.getElementById("onep1").style.display = "initial";
  }

  //PLAYERS SECOND CARD
  if (cardsInHand.playerCard2 === aceOH) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = aceOH1;
    playerCardValues.push(11);
    document.getElementById("onep2").style.display = "initial";
  } else if (cardsInHand.playerCard2 == twoOH) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = twoOH1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard2 == threeOH) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = threeOH1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard2 == fourOH) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = fourOH1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard2 == fiveOH) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = fiveOH1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard2 == sixOH) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = sixOH1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard2 == sevenOH) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = sevenOH1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard2 == eightOH) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = eightOH1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard2 == nineOH) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = nineOH1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard2 == tenOH) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = tenOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard2 == jackOH) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = jackOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard2 == queenOH) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = queenOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard2 == kingOH) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = kingOH1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard2 == aceOH111) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = aceOH1;
    playerCardValues.push(11);
    document.getElementById("onep2").style.display = "initial";
  } else if (cardsInHand.playerCard2 == aceOD) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = aceOD1;
    playerCardValues.push(11);
    document.getElementById("onep2").style.display = "initial";
  } else if (cardsInHand.playerCard2 == twoOD) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = twoOD1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard2 == threeOD) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = threeOD1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard2 == fourOD) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = fourOD1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard2 == fiveOD) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = fiveOD1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard2 == sixOD) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = sixOD1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard2 == sevenOD) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = sevenOD1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard2 == eightOD) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = eightOD1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard2 == nineOD) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = nineOD1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard2 == tenOD) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = tenOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard2 == jackOD) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = jackOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard2 == queenOD) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = queenOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard2 == kingOD) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = kingOD1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard2 == aceOD111) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = aceOD1;
    playerCardValues.push(11);
    document.getElementById("onep2").style.display = "initial";
  } else if (cardsInHand.playerCard2 == aceOC) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = aceOC1;
    playerCardValues.push(11);
    document.getElementById("onep2").style.display = "initial";
  } else if (cardsInHand.playerCard2 == twoOC) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = twoOC1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard2 == threeOC) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = threeOC1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard2 == fourOC) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = fourOC1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard2 == fiveOC) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = fiveOC1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard2 == sixOC) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = sixOC1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard2 == sevenOC) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = sevenOC1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard2 == eightOC) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = eightOC1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard2 == nineOC) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = nineOC1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard2 == tenOC) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = tenOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard2 == jackOC) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = jackOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard2 == queenOC) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = queenOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard2 == kingOC) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = kingOC1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard2 == aceOC111) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = aceOC1;
    playerCardValues.push(11);
    document.getElementById("onep2").style.display = "initial";
  } else if (cardsInHand.playerCard2 == aceOS) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = aceOS1;
    playerCardValues.push(11);
    document.getElementById("onep2").style.display = "initial";
  } else if (cardsInHand.playerCard2 == twoOS) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = twoOS1;
    playerCardValues.push(2);
  } else if (cardsInHand.playerCard2 == threeOS) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = threeOS1;
    playerCardValues.push(3);
  } else if (cardsInHand.playerCard2 == fourOS) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = fourOS1;
    playerCardValues.push(4);
  } else if (cardsInHand.playerCard2 == fiveOS) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = fiveOS1;
    playerCardValues.push(5);
  } else if (cardsInHand.playerCard2 == sixOS) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = sixOS1;
    playerCardValues.push(6);
  } else if (cardsInHand.playerCard2 == sevenOS) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = sevenOS1;
    playerCardValues.push(7);
  } else if (cardsInHand.playerCard2 == eightOS) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = eightOS1;
    playerCardValues.push(8);
  } else if (cardsInHand.playerCard2 == nineOS) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = nineOS1;
    playerCardValues.push(9);
  } else if (cardsInHand.playerCard2 == tenOS) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = tenOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard2 == jackOS) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = jackOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard2 == queenOS) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = queenOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard2 == kingOS) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = kingOS1;
    playerCardValues.push(10);
  } else if (cardsInHand.playerCard2 == aceOS111) {
    pC2 = document.getElementById("pCard2").style.backgroundImage = aceOS1;
    playerCardValues.push(11);
    document.getElementById("onep2").style.display = "initial";
  }
  if (valueP == 21) {
    alert("21! You Win!");
  }
}
function ifSD2() {
  //DEALER'S SECOND CARD
  if (cardsInHand.dealerCard1 === aceOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard1 == twoOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = twoOH1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard1 == threeOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = threeOH1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard1 == fourOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = fourOH1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard1 == fiveOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = fiveOH1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard1 == sixOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = sixOH1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard1 == sevenOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = sevenOH1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard1 == eightOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = eightOH1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard1 == nineOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = nineOH1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard1 == tenOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = tenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == jackOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = jackOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == queenOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = queenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == kingOH) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = kingOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == aceOH111) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard1 == aceOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard1 == twoOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = twoOD1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard1 == threeOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = threeOD1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard1 == fourOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = fourOD1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard1 == fiveOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = fiveOD1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard1 == sixOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = sixOD1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard1 == sevenOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = sevenOD1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard1 == eightOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = eightOD1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard1 == nineOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = nineOD1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard1 == tenOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = tenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == jackOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = jackOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == queenOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = queenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == kingOD) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = kingOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == aceOD111) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard1 == aceOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard1 == twoOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = twoOC1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard1 == threeOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = threeOC1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard1 == fourOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = fourOC1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard1 == fiveOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = fiveOC1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard1 == sixOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = sixOC1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard1 == sevenOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = sevenOC1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard1 == eightOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = eightOC1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard1 == nineOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = nineOC1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard1 == tenOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = tenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == jackOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = jackOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == queenOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = queenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == kingOC) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = kingOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == aceOC111) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard1 == aceOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard1 == twoOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = twoOS1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard1 == threeOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = threeOS1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard1 == fourOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = fourOS1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard1 == fiveOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = fiveOS1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard1 == sixOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = sixOS1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard1 == sevenOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = sevenOS1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard1 == eightOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = eightOS1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard1 == nineOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = nineOS1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard1 == tenOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = tenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == jackOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = jackOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == queenOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = queenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == kingOS) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = kingOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard1 == aceOS111) {
    dC2 = document.getElementById("dCard1").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  }
}
function ifSD3() {
  if (cardsInHand.dealerCard3 === aceOH) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard3 == twoOH) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = twoOH1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard3 == threeOH) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = threeOH1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard3 == fourOH) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = fourOH1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard3 == fiveOH) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = fiveOH1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard3 == sixOH) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = sixOH1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard3 == sevenOH) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = sevenOH1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard3 == eightOH) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = eightOH1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard3 == nineOH) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = nineOH1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard3 == tenOH) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = tenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard3 == jackOH) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = jackOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard3 == queenOH) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = queenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard3 == kingOH) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = kingOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard3 == aceOH111) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard3 == aceOD) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard3 == twoOD) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = twoOD1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard3 == threeOD) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = threeOD1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard3 == fourOD) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = fourOD1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard3 == fiveOD) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = fiveOD1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard3 == sixOD) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = sixOD1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard3 == sevenOD) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = sevenOD1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard3 == eightOD) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = eightOD1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard3 == nineOD) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = nineOD1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard3 == tenOD) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = tenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard3 == jackOD) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = jackOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard3 == queenOD) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = queenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard3 == kingOD) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = kingOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard3 == aceOD111) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard3 == aceOC) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard3 == twoOC) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = twoOC1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard3 == threeOC) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = threeOC1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard3 == fourOC) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = fourOC1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard3 == fiveOC) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = fiveOC1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard3 == sixOC) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = sixOC1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard3 == sevenOC) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = sevenOC1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard3 == eightOC) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = eightOC1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard3 == nineOC) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = nineOC1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard3 == tenOC) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = tenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard3 == jackOC) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = jackOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard3 == queenOC) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = queenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard3 == kingOC) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = kingOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard3 == aceOC111) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard3 == aceOS) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard3 == twoOS) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = twoOS1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard3 == threeOS) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = threeOS1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard3 == fourOS) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = fourOS1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard3 == fiveOS) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = fiveOS1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard3 == sixOS) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = sixOS1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard3 == sevenOS) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = sevenOS1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard3 == eightOS) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = eightOS1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard3 == nineOS) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = nineOS1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard3 == tenOS) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = tenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard3 == jackOS) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = jackOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard3 == queenOS) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = queenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard3 == kingOS) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = kingOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard3 == aceOS111) {
    dC3 = document.getElementById("dCard3").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  }
}
function ifSD4() {
  if (cardsInHand.dealerCard4 === aceOH) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard4 == twoOH) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = twoOH1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard4 == threeOH) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = threeOH1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard4 == fourOH) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = fourOH1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard4 == fiveOH) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = fiveOH1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard4 == sixOH) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = sixOH1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard4 == sevenOH) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = sevenOH1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard4 == eightOH) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = eightOH1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard4 == nineOH) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = nineOH1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard4 == tenOH) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = tenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard4 == jackOH) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = jackOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard4 == queenOH) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = queenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard4 == kingOH) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = kingOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard4 == aceOH111) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard4 == aceOD) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard4 == twoOD) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = twoOD1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard4 == threeOD) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = threeOD1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard4 == fourOD) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = fourOD1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard4 == fiveOD) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = fiveOD1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard4 == sixOD) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = sixOD1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard4 == sevenOD) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = sevenOD1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard4 == eightOD) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = eightOD1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard4 == nineOD) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = nineOD1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard4 == tenOD) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = tenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard4 == jackOD) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = jackOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard4 == queenOD) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = queenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard4 == kingOD) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = kingOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard4 == aceOD111) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard4 == aceOC) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard4 == twoOC) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = twoOC1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard4 == threeOC) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = threeOC1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard4 == fourOC) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = fourOC1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard4 == fiveOC) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = fiveOC1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard4 == sixOC) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = sixOC1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard4 == sevenOC) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = sevenOC1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard4 == eightOC) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = eightOC1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard4 == nineOC) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = nineOC1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard4 == tenOC) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = tenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard4 == jackOC) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = jackOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard4 == queenOC) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = queenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard4 == kingOC) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = kingOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard4 == aceOC111) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard4 == aceOS) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard4 == twoOS) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = twoOS1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard4 == threeOS) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = threeOS1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard4 == fourOS) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = fourOS1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard4 == fiveOS) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = fiveOS1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard4 == sixOS) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = sixOS1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard4 == sevenOS) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = sevenOS1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard4 == eightOS) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = eightOS1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard4 == nineOS) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = nineOS1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard4 == tenOS) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = tenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard4 == jackOS) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = jackOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard4 == queenOS) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = queenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard4 == kingOS) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = kingOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard4 == aceOS111) {
    dC4 = document.getElementById("dCard4").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  }
}
function ifSD5() {
  //DEALERS FIFTH CARD
  if (cardsInHand.dealerCard5 === aceOH) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard5 == twoOH) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = twoOH1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard5 == threeOH) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = threeOH1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard5 == fourOH) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = fourOH1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard5 == fiveOH) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = fiveOH1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard5 == sixOH) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = sixOH1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard5 == sevenOH) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = sevenOH1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard5 == eightOH) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = eightOH1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard5 == nineOH) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = nineOH1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard5 == tenOH) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = tenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard5 == jackOH) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = jackOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard5 == queenOH) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = queenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard5 == kingOH) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = kingOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard5 == aceOH111) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard5 == aceOD) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard5 == twoOD) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = twoOD1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard5 == threeOD) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = threeOD1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard5 == fourOD) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = fourOD1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard5 == fiveOD) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = fiveOD1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard5 == sixOD) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = sixOD1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard5 == sevenOD) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = sevenOD1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard5 == eightOD) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = eightOD1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard5 == nineOD) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = nineOD1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard5 == tenOD) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = tenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard5 == jackOD) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = jackOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard5 == queenOD) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = queenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard5 == kingOD) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = kingOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard5 == aceOD111) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard5 == aceOC) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard5 == twoOC) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = twoOC1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard5 == threeOC) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = threeOC1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard5 == fourOC) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = fourOC1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard5 == fiveOC) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = fiveOC1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard5 == sixOC) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = sixOC1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard5 == sevenOC) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = sevenOC1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard5 == eightOC) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = eightOC1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard5 == nineOC) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = nineOC1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard5 == tenOC) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = tenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard5 == jackOC) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = jackOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard5 == queenOC) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = queenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard5 == kingOC) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = kingOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard5 == aceOC111) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard5 == aceOS) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard5 == twoOS) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = twoOS1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard5 == threeOS) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = threeOS1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard5 == fourOS) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = fourOS1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard5 == fiveOS) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = fiveOS1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard5 == sixOS) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = sixOS1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard5 == sevenOS) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = sevenOS1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard5 == eightOS) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = eightOS1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard5 == nineOS) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = nineOS1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard5 == tenOS) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = tenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard5 == jackOS) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = jackOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard5 == queenOS) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = queenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard5 == kingOS) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = kingOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard5 == aceOS111) {
    dC5 = document.getElementById("dCard5").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  }
}
function ifSD6() {
  //DEALERS SIXTH CARD
  if (cardsInHand.dealerCard6 === aceOH) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard6 == twoOH) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = twoOH1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard6 == threeOH) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = threeOH1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard6 == fourOH) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = fourOH1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard6 == fiveOH) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = fiveOH1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard6 == sixOH) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = sixOH1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard6 == sevenOH) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = sevenOH1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard6 == eightOH) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = eightOH1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard6 == nineOH) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = nineOH1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard6 == tenOH) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = tenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard6 == jackOH) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = jackOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard6 == queenOH) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = queenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard6 == kingOH) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = kingOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard6 == aceOH111) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard6 == aceOD) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard6 == twoOD) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = twoOD1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard6 == threeOD) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = threeOD1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard6 == fourOD) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = fourOD1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard6 == fiveOD) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = fiveOD1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard6 == sixOD) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = sixOD1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard6 == sevenOD) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = sevenOD1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard6 == eightOD) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = eightOD1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard6 == nineOD) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = nineOD1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard6 == tenOD) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = tenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard6 == jackOD) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = jackOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard6 == queenOD) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = queenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard6 == kingOD) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = kingOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard6 == aceOD111) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard6 == aceOC) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard6 == twoOC) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = twoOC1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard6 == threeOC) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = threeOC1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard6 == fourOC) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = fourOC1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard6 == fiveOC) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = fiveOC1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard6 == sixOC) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = sixOC1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard6 == sevenOC) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = sevenOC1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard6 == eightOC) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = eightOC1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard6 == nineOC) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = nineOC1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard6 == tenOC) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = tenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard6 == jackOC) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = jackOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard6 == queenOC) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = queenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard6 == kingOC) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = kingOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard6 == aceOC111) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard6 == aceOS) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard6 == twoOS) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = twoOS1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard6 == threeOS) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = threeOS1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard6 == fourOS) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = fourOS1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard6 == fiveOS) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = fiveOS1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard6 == sixOS) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = sixOS1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard6 == sevenOS) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = sevenOS1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard6 == eightOS) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = eightOS1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard6 == nineOS) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = nineOS1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard6 == tenOS) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = tenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard6 == jackOS) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = jackOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard6 == queenOS) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = queenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard6 == kingOS) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = kingOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard6 == aceOS111) {
    dC6 = document.getElementById("dCard6").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  }
}
function ifSD7() {
  //DEALERS SEVENTH CARD
  if (cardsInHand.dealerCard7 === aceOH) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard7 == twoOH) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = twoOH1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard7 == threeOH) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = threeOH1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard7 == fourOH) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = fourOH1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard7 == fiveOH) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = fiveOH1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard7 == sixOH) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = sixOH1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard7 == sevenOH) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = sevenOH1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard7 == eightOH) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = eightOH1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard7 == nineOH) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = nineOH1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard7 == tenOH) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = tenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard7 == jackOH) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = jackOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard7 == queenOH) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = queenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard7 == kingOH) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = kingOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard7 == aceOH111) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard7 == aceOD) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard7 == twoOD) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = twoOD1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard7 == threeOD) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = threeOD1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard7 == fourOD) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = fourOD1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard7 == fiveOD) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = fiveOD1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard7 == sixOD) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = sixOD1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard7 == sevenOD) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = sevenOD1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard7 == eightOD) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = eightOD1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard7 == nineOD) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = nineOD1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard7 == tenOD) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = tenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard7 == jackOD) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = jackOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard7 == queenOD) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = queenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard7 == kingOD) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = kingOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard7 == aceOD111) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard7 == aceOC) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard7 == twoOC) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = twoOC1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard7 == threeOC) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = threeOC1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard7 == fourOC) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = fourOC1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard7 == fiveOC) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = fiveOC1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard7 == sixOC) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = sixOC1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard7 == sevenOC) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = sevenOC1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard7 == eightOC) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = eightOC1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard7 == nineOC) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = nineOC1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard7 == tenOC) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = tenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard7 == jackOC) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = jackOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard7 == queenOC) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = queenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard7 == kingOC) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = kingOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard7 == aceOC111) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard7 == aceOS) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard7 == twoOS) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = twoOS1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard7 == threeOS) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = threeOS1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard7 == fourOS) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = fourOS1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard7 == fiveOS) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = fiveOS1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard7 == sixOS) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = sixOS1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard7 == sevenOS) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = sevenOS1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard7 == eightOS) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = eightOS1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard7 == nineOS) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = nineOS1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard7 == tenOS) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = tenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard7 == jackOS) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = jackOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard7 == queenOS) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = queenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard7 == kingOS) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = kingOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard7 == aceOS111) {
    dC7 = document.getElementById("dCard7").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  }
}
function ifSD8() {
  //DEALERS EIGHTH CARD
  if (cardsInHand.dealerCard8 === aceOH) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard8 == twoOH) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = twoOH1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard8 == threeOH) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = threeOH1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard8 == fourOH) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = fourOH1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard8 == fiveOH) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = fiveOH1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard8 == sixOH) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = sixOH1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard8 == sevenOH) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = sevenOH1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard8 == eightOH) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = eightOH1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard8 == nineOH) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = nineOH1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard8 == tenOH) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = tenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard8 == jackOH) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = jackOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard8 == queenOH) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = queenOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard8 == kingOH) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = kingOH1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard8 == aceOH111) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = aceOH1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard8 == aceOD) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard8 == twoOD) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = twoOD1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard8 == threeOD) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = threeOD1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard8 == fourOD) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = fourOD1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard8 == fiveOD) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = fiveOD1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard8 == sixOD) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = sixOD1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard8 == sevenOD) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = sevenOD1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard8 == eightOD) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = eightOD1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard8 == nineOD) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = nineOD1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard8 == tenOD) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = tenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard8 == jackOD) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = jackOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard8 == queenOD) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = queenOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard8 == kingOD) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = kingOD1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard8 == aceOD111) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = aceOD1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard8 == aceOC) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard8 == twoOC) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = twoOC1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard8 == threeOC) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = threeOC1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard8 == fourOC) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = fourOC1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard8 == fiveOC) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = fiveOC1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard8 == sixOC) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = sixOC1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard8 == sevenOC) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = sevenOC1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard8 == eightOC) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = eightOC1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard8 == nineOC) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = nineOC1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard8 == tenOC) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = tenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard8 == jackOC) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = jackOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard8 == queenOC) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = queenOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard8 == kingOC) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = kingOC1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard8 == aceOC111) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = aceOC1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard8 == aceOS) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  } else if (cardsInHand.dealerCard8 == twoOS) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = twoOS1;
    dealerCardValues.push(2);
  } else if (cardsInHand.dealerCard8 == threeOS) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = threeOS1;
    dealerCardValues.push(3);
  } else if (cardsInHand.dealerCard8 == fourOS) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = fourOS1;
    dealerCardValues.push(4);
  } else if (cardsInHand.dealerCard8 == fiveOS) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = fiveOS1;
    dealerCardValues.push(5);
  } else if (cardsInHand.dealerCard8 == sixOS) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = sixOS1;
    dealerCardValues.push(6);
  } else if (cardsInHand.dealerCard8 == sevenOS) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = sevenOS1;
    dealerCardValues.push(7);
  } else if (cardsInHand.dealerCard8 == eightOS) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = eightOS1;
    dealerCardValues.push(8);
  } else if (cardsInHand.dealerCard8 == nineOS) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = nineOS1;
    dealerCardValues.push(9);
  } else if (cardsInHand.dealerCard8 == tenOS) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = tenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard8 == jackOS) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = jackOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard8 == queenOS) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = queenOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard8 == kingOS) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = kingOS1;
    dealerCardValues.push(10);
  } else if (cardsInHand.dealerCard8 == aceOS111) {
    dC8 = document.getElementById("dCard8").style.backgroundImage = aceOS1;
    dealerCardValues.push(11);
  }
}
function hitIf() {
  if (clicksOnHit == 1) {
    cardsInHand.playerCard3 = picOfCards.pop();
  } else if (clicksOnHit == 2) {
    cardsInHand.playerCard4 = picOfCards.pop();
  } else if (clicksOnHit == 3) {
    cardsInHand.playerCard5 = picOfCards.pop();
  } else if (clicksOnHit == 4) {
    cardsInHand.playerCard6 = picOfCards.pop();
  } else if (clicksOnHit == 5) {
    cardsInHand.playerCard7 = picOfCards.pop();
  } else if (clicksOnHit == 6) {
    cardsInHand.playerCard8 = picOfCards.pop();
  }
}
function play() {
  shuffle(picOfCards);
  cardsInHand.dealerCard1 = document.getElementById(
    "dCard1"
  ).style.backgroundImage =
    'url("https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/red.svg")';
  cardsInHand.dealerCard2 = picOfCards.pop();
  cardsInHand.playerCard1 = picOfCards.pop();
  cardsInHand.playerCard2 = picOfCards.pop();
  document.getElementById("play").style.display = "none";

  ifS();
  let valueD = dealerCardValues.reduce(sum);
  let valueP = playerCardValues.reduce(sum);

  document.getElementById("player-score").innerHTML = valueP;
  if (valueP == 21) {
    alert("21! You Win!");
    
  }
  document.getElementById("player-score").style.display='inherit';
}
function hit() {
  clicksOnHit += 1;
  hitIf();
  ifP();
  let valueP = playerCardValues.reduce(sum);
  document.getElementById("player-score").innerHTML = valueP;
  if (valueP == 21) {
    alert("21! You Win!"); 
    
  } else if (valueP > 21) alert("BUST! Better Luck Next Time!"); 
}
function valueDSum() {
  document.getElementById("dealer-score").style.display = "inherit";
  let valueD = dealerCardValues.reduce(sum);
  document.getElementById("dealer-score").innerHTML = valueD;
}
function dealerLogic() {
  cardsInHand.dealerCard1 = picOfCards.pop();
  ifSD2();
  valueDSum();
}
function dealerLogic1() {
  cardsInHand.dealerCard3 = picOfCards.pop();
  ifSD3();
  valueDSum();
}
function dealerLogic2() {
  cardsInHand.dealerCard4 = picOfCards.pop();
  ifSD4();
  valueDSum();
}
function dealerLogic3() {
  cardsInHand.dealerCard5 = picOfCards.pop();
  ifSD5();
  valueDSum();
}
function dealerLogic4() {
  cardsInHand.dealerCard6 = picOfCards.pop();
  ifSD6();
  valueDSum();
}
function dealerLogic5() {
  cardsInHand.dealerCard7 = picOfCards.pop();
  ifSD7();
  valueDSum();
}
function dealerLogic6() {
  cardsInHand.dealerCard8 = picOfCards.pop();
  ifSD8();
  valueDSum();
}
function dealerWins1(){
  alert("Dealer has " + dealerCardValues.reduce(sum) + " ...try again!");
}
function playerWins1(){
  alert("You win! Congrats!");
}
function compare(){
  if (dealerCardValues.reduce(sum) >= playerCardValues.reduce(sum)){
    setTimeout(dealerWins1(), 88000);
  }else if (playerCardValues.reduce(sum) > dealerCardValues.reduce(sum)){
    setTimeout(playerWins1(), 88000);
  }
}
function playerWins2(){
  alert("The dealer has " + dealerCardValues.reduce(sum) +  ". The dealer loses!")
}
function dealerWins2(){
  alert('Dealer has 21, you lose.')
}
function stayCall () {
  if (dealerCardValues.reduce(sum) < 17){
     dealerLogic1()
     
  }else if (dealerCardValues.reduce(sum) <= 17){
    dealerLogic2()
  }if (dealerCardValues.reduce(sum) <= 17){
    dealerLogic3()
  }if (dealerCardValues.reduce(sum) <= 17){
    dealerLogic4()
  }if (dealerCardValues.reduce(sum) <= 17){
    dealerLogic5()
  }if (dealerCardValues.reduce(sum) <= 17){
    dealerLogic6()
  }if (dealerCardValues.reduce(sum) > 21){
    setTimeout(playerWins2(),88000);
  }
  if (dealerCardValues.reduce(sum) >= 17 && dealerCardValues.reduce(sum) <= 20){
    compare(dealerCardValues.reduce(sum));
  }
  if (dealerCardValues.reduce(sum) == 21){
setTimeout(dealerWins2(), 88000)
  }
}
function stay() {
  dealerLogic();
  
  stayCall();
  

}

let domForValueP = document.getElementById("player-score").innerHTML;
let domForValueD = document.getElementById("dealer-score").innerHTML;

function one() {
  let valueP = playerCardValues.reduce(sum) - 10;
  document.getElementById("player-score").innerHTML = valueP;
  console.log(valueP);
}