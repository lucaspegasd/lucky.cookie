const firstMain = document.querySelector(".firstMain")
const secondMain = document.querySelector(".secondMain") 
const btn = document.querySelector("button") 
let phrase = document.querySelector("#phrases")

const cookieOne = document.querySelector("#cookieOne") 


function imgClick(e) {

    firstMain.classList.add("hide")
    secondMain.classList.remove("hide")
    phrase.innerText = randomElement
}

let phrases = [
    "voçê não morreu ontem",
    "voçê não é bonito, mas da para melhorar indo para a academia",
    "voçê sabe oque faz",
    "muitas coisas boas vão acontecer",
    "as coisas vão começar a dar certo",
    "voçê vai ser famoso",
]

let randomIndex = Math.round(Math.random() * phrases.length)
let randomElement = phrases[randomIndex]

function reset(e) {
    firstMain.classList.remove("hide")
    secondMain.classList.add("hide")
    randomIndex = Math.round(Math.random() * phrases.length)
    randomElement = phrases[randomIndex]
}

cookieOne.addEventListener('click', imgClick)
btn.addEventListener('click', reset)