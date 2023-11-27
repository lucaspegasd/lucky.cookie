const firstMain = document.querySelector(".firstMain")
const secondMain = document.querySelector(".secondMain") 

const cookieOne = document.querySelector("#cookieOne") 


cookieOne.addEventListener('click', function() {
    firstMain.style.setProperty('display', "flex")
    secondMain.style.setProperty('display', "none")
})