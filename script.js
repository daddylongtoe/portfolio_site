
// HTML button click removes styles, shows HTML page details and hides other details
document.getElementById('HTML').onclick = function () {
    document.getElementById('theme').href = 'noStyles.css';
    document.getElementById('css_description').style.display = "none";
    document.getElementById('js_description').style.display = "none";
    document.getElementById('html_description').style.display = "block";
};

// CSS button click adds styles, shows CSS page details and hides other details
document.getElementById('CSS').onclick = function () {
    document.getElementById('theme').href = 'styles.css';
    document.getElementById('html_description').style.display = "none";
    document.getElementById('js_description').style.display = "none";
    document.getElementById('css_description').style.display = "block";
};

// Javascript button click adds simple guessing game, shows Javascript page details and hides other details
document.getElementById('Javascript').onclick = function () {
    document.getElementById('theme').href = 'styles.css';
    document.getElementById('html_description').style.display = "none";
    document.getElementById('css_description').style.display = "none";
    document.getElementById('js_description').style.display = "block";
};

let min;
let max;
let guess;
let lastGuess;
let guessCount;

document.getElementById('startGame').onclick = function(){

    // initialise game settings
    min = document.getElementById('min').textContent;
    max = document.getElementById('max').textContent;

    guess = undefined;
    guessCount = 1;

    // update display
    document.getElementById('match').style.display = "none";
    document.getElementById('guessDisplay').style.display = "block";

    // run CheckGuess function
    CheckGuess(min, max);

};

document.getElementById('yes').onclick = function(){

    // sets lower number of range equal to last guess. If last guess equal to 99 and user states number is higher, then min is set to 100 to account for use of floor function
    if(parseInt(guess) !== 99) {
        min = guess;
    }else{
        min = 100;
    }
    CheckGuess(min, max);

};

document.getElementById('no').onclick = function(){

    // sets upper number of range equal to last guess
    max = guess;

    CheckGuess(min, max);

};

document.getElementById('same').onclick = function () {

    // updates display to show number of counted attempts to find match
    // document.getElementById('guessDisplay').style.display = "none";
    // document.getElementById('match').style.display = "block";
    gameEnd();
};

function CheckGuess(rangeMin, rangeMax) {

    //var guessCount = document.getElementById('guessCount').textContent;
    lastGuess = guess;
    guess = Math.floor((parseInt(rangeMin) + parseInt(rangeMax)) / 2);

    console.log(lastGuess);
    console.log(guess);

    // only increment number of guesses if new guess is different to last
    if(lastGuess !== guess && lastGuess !== undefined) {
        guessCount += 1;
    } else if(guessCount > 1) {
        gameEnd();
    }

    // update display
    document.getElementById('guess').textContent = guess;
    document.getElementById('guessCount').textContent = guessCount;
}

function gameEnd() {
    document.getElementById('finalNum').textContent = guess;
    document.getElementById('guessDisplay').style.display = "none";
    document.getElementById('match').style.display = "block";
}
