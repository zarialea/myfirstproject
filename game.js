// creating an array of objects 

let cardsArray = [
  {
    'box': 'mikey',
    'img': 'https://www.preserveddragons.com/Illustrations/images/characterdb/TheGoonies/mikey_c.jpg',
  },
  {
    'box': 'data',
    'img': 'https://www.preserveddragons.com/Illustrations/images/characterdb/TheGoonies/data_c.jpg',
  },
  {
    'box': 'mouth',
    'img': 'https://www.preserveddragons.com/Illustrations/images/characterdb/TheGoonies/mouth_c.jpg',
  },
  {
    'box': 'chunk',
    'img': 'https://www.preserveddragons.com/Illustrations/images/characterdb/TheGoonies/chunk_c.jpg',
  },
  {
    'box': 'sloth',
    'img': 'https://www.preserveddragons.com/Illustrations/images/characterdb/TheGoonies/sloth_c.jpg',
  },
  {
    'box': 'thegoonies',
    'img': 'https://i.pinimg.com/originals/df/78/05/df7805a8de138d3f3178344f9bba38b5.jpg', 
   },                  
    {
      'box': 'mikey',
      'img': 'https://www.preserveddragons.com/Illustrations/images/characterdb/TheGoonies/mikey_c.jpg',
    },
    {
      'box': 'data',
      'img': 'https://www.preserveddragons.com/Illustrations/images/characterdb/TheGoonies/data_c.jpg',
    },
    {
      'box': 'mouth',
      'img': 'https://www.preserveddragons.com/Illustrations/images/characterdb/TheGoonies/mouth_c.jpg',
    },
    {
      'box': 'chunk',
      'img': 'https://www.preserveddragons.com/Illustrations/images/characterdb/TheGoonies/chunk_c.jpg',
    },
    {
      'box': 'sloth',
      'img': 'https://www.preserveddragons.com/Illustrations/images/characterdb/TheGoonies/sloth_c.jpg',
    },
    {
      'box': 'thegoonies',
      'img': 'https://i.pinimg.com/originals/df/78/05/df7805a8de138d3f3178344f9bba38b5.jpg',  
    },        
];

function Restart() {
  window.location = "index.html"
};

let firstPick =  '';
let secondPick = ''; 
let count = 0;
let previousChoice = null;
let delay = 1100;







// sort method will randomize the board 
cardsArray.sort(() => Math.random() - 0.5);

// acquire the 'game' element id
// create new element of 'choices' to append to the DOM 'game' div
// game = parentNode, board = childNode
const game = document.getElementById("game");
const board = document.createElement("choices");
board.setAttribute("class", "board");
game.appendChild(board);

// shortcut function "=>" 
// every item in the array that will be looped through boxesArray with forEach
cardsArray.forEach(item => {
  const { box, img } = item;  

  // creating a new div with a class list called "card"
  const card = document.createElement("div");
  card.classList.add("card");
  // creating the set attribute into a string with name dataset to refer to "box" key in the array
  card.dataset.name = box;

  // creating a div with a class called "front"
  const front = document.createElement("div");
  front.classList.add("front");

  // creating a div with a class called "back"
  const back = document.createElement("div");
  back.classList.add("back");
  // creating the "back" to refer to the images of the array
  back.style.backgroundImage = `url(${img})`;

  // use appendChild to move one element to another in the board
  board.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);


});

// creating a new class called "match" that will loop through "chosen" element when clicked
const match = () => {
// creating a new 
  const chosen = document.querySelectorAll(".chosen");
  chosen.forEach(card => {
// creating a new class called "match" 
    card.classList.add("match");
  });
};


// resetting the cards to the their original state after selecting two cards
// reset function will invoke whether there is a match or not
const resetCards = () => {
  firstPick = '';
  secondPick = '';
  count = 0;
  previousChoice = null;

  let chosen = document.querySelectorAll(".chosen");
  chosen.forEach(card => {
    card.classList.remove("chosen");
  });
};


// create eventListener for the boardgame 
// when a box is clicked, "chosen" class will be applied
board.addEventListener('click', event => {

// event.target will invoke because it will reference to the clicked card
  const clicked = event.target; 

// choosing 2 cards at once
  if (count < 2) {
    count++;
    if (count === 1) {
      // the first pick with the selected class of 'chosen'
      firstPick = clicked.parentNode.dataset.name;
      console.log(firstPick);
      clicked.parentNode.classList.add("chosen");
    } else {
      // the second pick with the selected class of 'chosen'
      secondPick = clicked.parentNode.dataset.name;
      console.log(secondPick);
      clicked.parentNode.classList.add("chosen");
    }

    // when two boxes are flipped 
    if (firstPick && secondPick) {
      // when the boxes match
      if (firstPick == secondPick) {
        // call the 'match' function
         match(delay) 
      }
      // 
      setTimeout(resetCards, delay);
    }
    // assign previous choice as "clicked"
    previousChoice = clicked;
  }

});
