const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", 
"5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePasswords() {
    let passOne = ""
    let passTwo = ""

    for (let i = 0; i < 14; i++){
        passOne += characters[Math.floor(Math.random() * characters.length)]
        passTwo += characters[Math.floor(Math.random() * characters.length)]
    }
    document.getElementById("pass1").textContent = passOne
    document.getElementById("pass2").textContent = passTwo
}








// let firstPassword = document.getElementById("pass1")
// let secondPassword = document.getElementById("pass2")
// let generateBtn = document.getElementById("generate-btn")

// let passwordLength = 12;

// function getRandomCharacter() {
//     let randomChar = Math.floor(Math.random() * characters.length)
//     return characters[randomChar]
// }

// function generateRandomPassword() {
//     let randomPassword = ""
//     for (let i = 0; i < passwordLength; i++) {
//         randomPassword += getRandomCharacter()
//     }
//     return randomPassword
// }

// const generatedPasswordOne = generateRandomPassword()

// console.log("Here is a random password: ", generatedPasswordOne)

// generateBtn.addEventListener("click", function(){
//     let pass1 = " "
//     let pass2 = " "

//     for(let i = 0; i < passwordLength; i++){
//         pass1 += characters[Math.floor[Math.random] * characters.passwordLength]
//         pass2 += characters[Math.floor[Math.random] * characters.passwordLength]
//     }
//     firstPassword.textContent = pass1
//     secondPassword.textContent = pass2
// })