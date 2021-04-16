// creating an array of objects 

const boxesArray = [
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
}


const gameBoard = boxesArray
// using the "sort" method will sort the elements of the array and will return a sorted array
// math.random -0.5 will give a number less than 0.5 which will be negative and if it's over 0.5 there will be a positive
// thus creating a "shuffled" sequence
boxesArray.sort(() => Math.random() - 0.5);


let timer = null;
let firstPick =  '';
let secondPick = ''; 
let count = 0;
let previousChoice = null;
let delay = 1100;



// acquire the 'game' element id
// create new element of 'choices' to append to the DOM 'game' div
// game = parentNode, board = childNode
const game = document.getElementById('game');
const board = document.createElement('choices');
board.setAttribute('class', 'board');
game.appendChild(board);


// every item in the array that will be looped through boxesArray with forEach
boxesArray.forEach(item => {
  const { box, img } = item;  

  // new div, add 'card' class to div
  const card = document.createElement('div');
  card.classList.add('card');
  // creating the set attribute into a string with name dataset
  card.dataset.name = box;

  // new div, add 'front' class to div
  const front = document.createElement('div');
  front.classList.add('front');

  // new div, add 'back' class to div
  const back = document.createElement('div');
  back.classList.add('back');
  // adding the back image to boxesArray string
  back.style.backgroundImage = `url(${img})`;

  // use appendChild to move one element to another in the board
  board.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);


});

// creating a new class called "match" that will loop through "chosen" element when clicked
const match = () => {
  const chosen = document.querySelectorAll('.chosen');
  chosen.forEach(card => {
    card.classList.add('match');
  });
};


// resetting the cards to the their original state after selecting two cards
// reset function will invoke whether there is a match or not
const resetCards = () => {
  firstPick = '';
  secondPick = '';
  count = 0;
  previousChoice = null;

  var chosen = document.querySelectorAll('.chosen');
  chosen.forEach(card => {
    card.classList.remove('chosen');
  });
};


// create eventListener for the boardgame 
// when a box is clicked, "chosen" class will be applied
board.addEventListener('click', event => {

  const clicked = event.target; 

  // isolating only the inside divs to be chosen and not the entire board
  if (
    clicked.nodeName === 'choices' ||
    clicked === previousChoice ||
    clicked.parentNode.classList.contains('chosen') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

// choosing 2 cards at once
  if (count < 2) {
    count++;
    if (count === 1) {
      // the first pick with the selected class of 'chosen'
      firstPick = clicked.parentNode.dataset.name;
      console.log(firstPick);
      clicked.parentNode.classList.add('chosen');
    } else {
      // the second pick with the selected class of 'chosen'
      secondPick = clicked.parentNode.dataset.name;
      console.log(secondPick);
      clicked.parentNode.classList.add('chosen');
    }

    // when two boxes are flipped 
    if (firstPick && secondPick) {
      // when the boxes match
      if (firstPick == secondPick) {
        // call the 'match' function}
         match(delay) 
      }
      // 
      setTimeout(resetCards, delay);
    }
    // assign previous choice as "clicked"
    previousChoice = clicked;
  }

});

