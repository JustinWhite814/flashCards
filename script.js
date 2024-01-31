const pokemonArray = [
  {
    name: 'gengar',
    img: 'pokeImages/gengar.jpg'
  },
  {
    name: 'pikachu',
    img: 'pokeImages/pikachu.jpg'
  },
  {
    name: 'charmander',
    img: 'pokeImages/charmander.jpg'
  },
  {
    name: 'squirtle',
    img: 'pokeImages/squirtle.jpg'
  },
  {
    name: 'bulbasaur',
    img: 'pokeImages/bulbasaur.jpg'
  },
  {
    name: 'blastoise',
    img: 'pokeImages/blastoise.jpg'
  },
  {
    name: 'charizard',
    img: 'pokeImages/charizard.jpg'
  },
  {
    name: 'venasaur',
    img: 'pokeImages/venasaur.jpg'
  },
  {
    name: 'umbreon',
    img: 'pokeImages/umbreon.jpeg'
  },
  {
    name: 'eevee',
    img: 'pokeImages/eevee.png'
  },
  {
    name: 'gengar',
    img: 'pokeImages/gengar.jpg'
  },
  {
    name: 'pikachu',
    img: 'pokeImages/pikachu.jpg'
  },
  {
    name: 'charmander',
    img: 'pokeImages/charmander.jpg'
  },
  {
    name: 'squirtle',
    img: 'pokeImages/squirtle.jpg'
  },
  {
    name: 'bulbasaur',
    img: 'pokeImages/bulbasaur.jpg'
  },
  {
    name: 'blastoise',
    img: 'pokeImages/blastoise.jpg'
  },
  {
    name: 'charizard',
    img: 'pokeImages/charizard.jpg'
  },
  {
    name: 'venasaur',
    img: 'pokeImages/venasaur.jpg'
  },
  {
    name: 'umbreon',
    img: 'pokeImages/umbreon.jpeg'
  },
  {
    name: 'eevee',
    img: 'pokeImages/eevee.png'
  },
]

// console.log(pokemonArray)
pokemonArray.sort(()=> 0.5 - Math.random())
const result = document.querySelector("#result")
const pokeGrid = document.querySelector('#grid')
let cardsPicked = []
let cardsChosenIds = []
const cardsWon = []


const createBoard = () => {
  for(let  i = 0; i < pokemonArray.length; i++){
    const pokeCard = document.createElement('img')
    pokeCard.setAttribute('src', 'pokeImages/pokeBall.png')
    pokeCard.setAttribute('data-id', i)
    pokeCard.addEventListener('click', flipPokeCard)
    pokeGrid.append(pokeCard)
  }
}
// function flipPokeCard() {
//   const cardId = this.getAttribute('data-id')
//   console.log(cardId)
// }
const flipPokeCard = (e) => {

  const cardId = e.target.getAttribute('data-id')
  cardsPicked.push(pokemonArray[cardId].name)
  cardsChosenIds.push(cardId)
  e.target.setAttribute('src', pokemonArray[cardId].img)
  if(cardsPicked.length === 2){
    setTimeout(checkMatch, 500)
  }
}
createBoard()

const checkMatch = () => {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]
  if(optionOneId == optionTwoId){
    cards[optionOneId].setAttribute('src', 'pokeImages/pokeBall.png')
    cards[optionTwoId].setAttribute('src', 'pokeImages/pokeBall.png')
    alert('You have clicked the same Image')
  }
  if(cardsPicked[0] == cardsPicked[1]){
    alert('You have a match')
    cards[optionOneId ].setAttribute('src', 'pokeImages/white.jpg')
    cards[optionTwoId].setAttribute('src', 'pokeImages/white.jpg')
    cards[optionOneId ].removeEventListener('click', flipPokeCard)
    cards[optionTwoId].removeEventListener('click', flipPokeCard)
    cardsWon.push(cardsPicked)
  } else {
    cards[optionOneId].setAttribute('src', 'pokeImages/pokeBall.png')
    cards[optionTwoId].setAttribute('src', 'pokeImages/pokeBall.png')
  }
  result.textContent = cardsWon.length
  if(cardsWon.length === 5){
    result.textContent = 'NICE JOB'
  }
  cardsPicked = []
  cardsChosenIds = []
  if(cardsWon.length == (pokemonArray.length / 2)){
      result.textContent = 'Congratulations!!!! You found them All!'
  }
}
