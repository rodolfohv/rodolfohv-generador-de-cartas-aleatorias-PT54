function generateCard() {
  const suits = ['♦', '♥', '♠', '♣'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const top = document.getElementById('top-suit');
  const number = document.getElementById('card-value');
  const bottom = document.getElementById('bottom-suit');
  const card = document.getElementById('card');

  top.innerText = randomSuit;
  number.innerText = randomValue;
  bottom.innerText = randomSuit;

  card.classList.remove('heart', 'diamond', 'spade', 'club');
  if (randomSuit === '♥') card.classList.add('heart');
  else if (randomSuit === '♦') card.classList.add('diamond');
  else if (randomSuit === '♣') card.classList.add('club');
  else if (randomSuit === '♠') card.classList.add('spade');
}

window.onload = generateCard;
setInterval(generateCard, 10000); // cada 10000 ms = 10 segundos

document.getElementById('new-card').addEventListener('click', generateCard);


const widthInput = document.getElementById('card-width');
const heightInput = document.getElementById('card-height');

widthInput.addEventListener('input', () => {
  document.getElementById('card').style.width = `${widthInput.value}px`;
});

heightInput.addEventListener('input', () => {
  document.getElementById('card').style.height = `${heightInput.value}px`;
});