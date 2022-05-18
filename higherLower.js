//prompting for a max range and associated things
let prompt = window.prompt('What\'s your max number?');
let rounded = Math.round(prompt);
let respArray = [];
let promptArray = [];
let i = 0; i < 0; i++;
promptArray.push(0);
let promptList = i;


//generating random number
let numRange = Math.floor(Math.random() * prompt) + 1;
let numOrNot = isNaN(prompt);
console.log(numOrNot);
console.log(numRange);


let results = document.getElementById('results');
results.innerHTML = `Guess a number from 1 to ${rounded}`;

//check prompt protocol for positive and to check it's a number
if(prompt < 0 ) {
    alert('Stop! That\'s not a positive number!');
    window.prompt('What\'s your max number?')
    }
    else if(numOrNot != false) {
        alert('Stop! That\'s not a number!');
        window.prompt('What\'s your max number?');
    }
    else {
        console.log(numRange);
    }


//function linked to button. This is retrieving the guess element's value, and converting it into a number from a string.
function guessNum() {
    let guess = Number(document.getElementById('guess').value);
    
    let message = document.getElementById('message');

    //CHECKING IF THE GUESS IS IN THE RESPARRAY ALREADY
    //IF SO, ALERT THAT IT IS NOT OKAY
    let i = respArray.indexOf(guess, 0);
    console.log(i);

    
    if(i === -1) {
        if (guess == numRange) {
            respArray.push(' and ' + guess);
            console.log(respArray);
            message.innerHTML = `Good Job! It only took you ${respArray.length} tries! You guessed ${respArray}.`;
            
        }
        else if (guess > rounded) {
            message.innerHTML = "Hey! That's not within the range!"
        }
        else if (guess > numRange) {
            respArray.push( guess);
            console.log(respArray);
            message.innerHTML = "Nope, go lower...";
       }
        else {
            respArray.push( guess);
            console.log(respArray);
            message.innerHTML = "Nope, go higher...";
        }
    }
    else {
        message.innerHTML = 'Hey, that number was already guessed!'
    }
}


    
    
    