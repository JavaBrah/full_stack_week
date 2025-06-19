const btn1 = document.getElementById("check_answer");
const par = document.getElementById("par");
const userGuess = document.getElementById("userGuess");

const randomNumberGenerator = () => {
    randomNumber = Math.floor(Math.random() * (100 + 1));
    return randomNumber
}
answer = randomNumberGenerator();

const checkAnswer = () => {
    let userAnswer = parseInt(userGuess.value);
    if (userAnswer === answer){
        par.textContent = "You Win!";
    }else if (userAnswer > answer) {
        par.textContent = "Nope, Guess Lower";
    }else if (userAnswer < answer){
        par.textContent = "Nope, Guess Higher";
    }
}

btn1.addEventListener("click", checkAnswer);


const imgOne = document.getElementById("imgOne");
const imgTwo = document.getElementById("imgTwo");
const imgThree = document.getElementById("imgThree");
const swapPicBtn = document.getElementById("swapPicBtn")



const changeImage = () => {
    if (imgOne.hasAttribute(hidden)){
        imgOne.remove(hidden);
    }else if (imgTwo.hasAttribute(hidden)){
        imgTwo.remove(hidden);
    }else if (imgThree.hasAttribute(hidden)){
        imgThree.remove(hidden);
    }
}

const showImgOne = () => {
    imgOne.remove(hidden);
    imgThree.add(hidden);
}
const showImgTwo = () => {
    imgOne.add(hidden);
    imgTwo.remove(hidden);

}
const showImgThree = () => {
    imgTwo.add(hidden);
    imgThree.remove(hidden);
}

swapPicBtn.addEventListener("click", (event) =>{
    showImgOne
})






