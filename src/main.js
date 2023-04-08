import './styles/index.css'

const startButton = document.querySelector('.start-button')
const resetButton = document.querySelector('.reset-button')
const [,middleCard] = document.querySelectorAll('.card')
const onStartButtonClick = () => {
  middleCard.classList.add('select-card')
}
const onResetButtonClick = () => {
  middleCard.classList.remove('select-card')
}

startButton.addEventListener('click', onStartButtonClick)
resetButton.addEventListener('click', onResetButtonClick)

