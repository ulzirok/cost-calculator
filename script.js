const squareInput = document.querySelector('#square-input')
const squareRange = document.querySelector('#square-range')
const inputs = document.querySelectorAll('input')

const radioTypes = document.querySelectorAll('input[name="type"]')
const radioBuildings = document.querySelectorAll('input[name="building"]')
const radioRooms = document.querySelectorAll('input[name="rooms"]')

const checkboxCeiling = document.querySelector('input[name="ceiling"]')
const checkboxWalls = document.querySelector('input[name="walls"]')
const checkboxFloor = document.querySelector('input[name="floor"]')

const basePrice = 6000
const totalPriceElement = document.querySelector('#total-price')

squareRange.addEventListener('input', () => {
  squareInput.value = squareRange.value
})

squareInput.addEventListener('input', () => {
  squareRange.value = squareInput.value
})

function calculate() {
  let totalPrice = basePrice * parseInt(squareInput.value)
  
  for(const radio of radioTypes) {
    if(radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value)
    }
  }
  
  for(const radio of radioBuildings) {
    if(radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value)
    }
  }
  
  for(const radio of radioRooms) {
    if(radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value)
    }
  }
  
  if (checkboxCeiling.checked) {
    totalPrice = totalPrice + (parseFloat(checkboxCeiling.value) * parseInt(squareInput.value))
  }
  if (checkboxWalls.checked) {
    totalPrice = totalPrice * parseFloat(checkboxWalls.value)
  }
  if (checkboxFloor.checked) {
    totalPrice = totalPrice * parseFloat(checkboxFloor.value)
  }
  
  const formatter = new Intl.NumberFormat('ru')
  totalPriceElement.innerText = formatter.format(totalPrice)
}
calculate()

for (let input of inputs) {
  input.addEventListener('input', () => {
    calculate()
  })
}




