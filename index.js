// Print the input string
import { add } from './functions.js'

const appSeetings = {
  databaseURL: "https://playground-61df3-default-rtdb.firebaseio.com/"
}

const inputField = document.getElementById('input-field')
const addButton = document.getElementById('add-button')

addButton.addEventListener('click', function() {
  let input = inputField.value // Get the value of the input field

  console.log(input) // Print in console the input value
}) 