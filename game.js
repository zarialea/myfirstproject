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

const gameBoard = boxesArray
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
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



let firstPick =  '';
let secondPick = ''; 
let count = 0;
let previousChoice = null;
let delay = 1100;



const game = document.getElementById('game');
const board = document.createElement('choices');
board.setAttribute('class', 'board');
game.appendChild(board);


// every item in the array
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


const match = () => {
  const chosen = document.querySelectorAll('.chosen');
  chosen.forEach(card => {
    card.classList.add('match');
  });
};

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

board.addEventListener('click', event => {

  const clicked = event.target; 

  if (
    clicked.nodeName === 'choices' ||
    clicked === previousChoice ||
    clicked.parentNode.classList.contains('chosen') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }


  if (count < 2) {
    count++;
    if (count === 1) {
      // the first pick
      firstPick = clicked.parentNode.dataset.name;
      console.log(firstPick);
      clicked.parentNode.classList.add('chosen');
    } else {
      // the second pick
      secondPick = clicked.parentNode.dataset.name;
      console.log(secondPick);
      clicked.parentNode.classList.add('chosen');
    }

    // when the 
    if (firstPick && secondPick) {
      if (firstPick == secondPick) {
        setTimeout(match, delay);
      }
      setTimeout(resetCards, delay);
    }
    previousChoice = clicked;
  }

});

