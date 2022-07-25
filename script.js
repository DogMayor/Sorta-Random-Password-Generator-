// global variables
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var numbers = ["0","1","2","3","4","5","6","7","8","9"]

var symbol = ["!","@","#","$","%","^","&","*","=","-","?","_","+"]


// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomInt(min, max){
  return Math.floor(Math.random()*(max - min) + min) 
}

function generatePassword() {
 // prompt
var textInput = window.prompt("Choose a password length between 8 and 128 characters.")
 //password length
 var passLength = parseInt(textInput)

 

 // confirm Character type
var lowercaseConfirm = window.confirm("Would you like to use lowercase letters?")
var uppercaseConfirm = window.confirm("Would you like to use uppercase letters?")
var numbersConfirm = window.confirm("Would you like to use numbers?")
var symbolConfirm = window.confirm("Would you like to use symbols?")

//validate input
 if (isNaN(passLength)){
  window.alert ("Must choose a number")
  return
 }
 if (passLength < 8 || passLength > 128) {
  window.alert("Password must be between 8 and 128 characters")
  return
  
   }

//  generate based on criteria
var selectedChars = []



if (lowercaseConfirm === true) {
  selectedChars.push(lowerCase)
}
if (uppercaseConfirm === true) {
  selectedChars.push(upperCase)
}
if (numbersConfirm === true) {
  selectedChars.push(numbers)
}
if (symbolConfirm === true) {
  selectedChars.push(symbol)
}
console.log(selectedChars)

// generate random password

var generatePassword = ""

for (var i = 0; i < passLength; i++){
var randomItem = selectedChars[getRandomInt(0, selectedChars.length)]
generatePassword += randomItem
console.log(randomItem)
}


  return generatePassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
