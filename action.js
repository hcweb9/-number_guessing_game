
let game = {"min": 1, "max": 5};

document.addEventListener("DOMContentLoaded", function(){
console.log("Ready!");
game.output = document.querySelector(".output");
game.message = document.querySelector(".message");
game.guessInput = document.querySelector("input");
game.btn = document.querySelector("button");
game.btn.addEventListener("click", guessValue);
init();

})

function guessValue(){
    if(game.btn.classList.contains("replay")){
        init();
        game.btn.innerHTML = "Guess";
        game.guessInput.style.display = "block";
        game.btn.classList.remove("replay");

    }else{
    game.guesses++; 
    let tempGuess = game.guessInput.value;
    game.guessInput.value = "";
    tempGuess = parseInt(tempGuess);
    if(isNaN(tempGuess)){

        message(`Please enter only Digits!`, "red");
      

    }else if(tempGuess === game.num){
        message(`Correct! You guessed! ${game.num} in ${game.guesses}  guesses `, "green");
        gameOver();
        

    }else{
        let holder = tempGuess > game.num ? {"color": "darkred", "mes": "Was Lower!"} : 
        {"color": "orange", "mes": "Was Higher!"};
        
        message(holder.mes, holder.color);
       
    }
    console.log(game.num);
}
}

function gameOver(){
    game.btn.innerHTML = "Restart Game";
    game.guessInput.style.display = "none";
    game.btn.classList.add("replay");
    game.max += 5;
}


function init(){
    game.guesses = 0;
    game.num = ranNumber(game.min, game.max);
    let tempMessage = `Guess a number from  ${game.min}  to ${game.max} `  ; 
    message(tempMessage, "blue")
}

function ranNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function message(text, color){
    game.message.innerHTML = text;
    game.message.style.color = color || "black";
    game.guessInput.style.borderColor = color || "black";
    game.btn.style.backgroundColor = color || "black";
    game.btn.style.color = "white";
}

