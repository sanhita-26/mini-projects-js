//Number Guessing Game

const minNum=1;
const maxNum=100;
const answer= Math.floor(Math.random()*(maxNum-minNum+1))+minNum;

let attempts=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`Guess No in ${minNum}-${maxNum}`)
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert(`please enter a valid no`);
    }
    else if (guess<minNum || guess>maxNum){
        window.alert(`please enter a valid no`);
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("The correct number is somewhere above your guess");
        }
        else if (guess>answer){
            window.alert("The correct number is somewhere below your guess")
        }
        else{
            window.alert(`Correct! the answer was ${answer}.It took you ${attempts} attempts...`);
            running=false;
        }
    }
}