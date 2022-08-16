// Runs once the DOM loads
// Checks the data type of the button clicked 

/*jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', function() {
    let buttons=document.getElementsByTagName('button');

    for(let button of buttons) {
        button.addEventListener('click', function(){
        if (this.getAttribute('data-type') === 'submit') {
            checkAnswer();
        } else if (this.getAttribute('data-type') === 'hint') {
            revealHint();
            addClick();
        } else {
            newEquation();
            enableSubmitButton();
            clearDisplaySolution();
            emptyPreviousAnswer();
            clearDisplayResponse ();
        }

    });

} 

// Listens for the enter button when the user is in the answer box and checks the submit question is not disabled
document.getElementById('answer').addEventListener('keydown', function(event){
    if((event.key === 'Enter') && (document.getElementById('submit').disabled === false)) {
        checkAnswer();
    }
    });

newEquation();
});

// Declared outside of functions so they can be used by different functions
let num2;
let num1;
let click;
let symbol;

/**
 * Creates random numbers to build our equation with. 
 * Also, assigned if the symbol in the equation will be - or +
 * and inserts the numbers and symbol into the DOM
 */
function newEquation() {

    click = 0;

    document.getElementById('answer').focus();

    num1 = Math.floor(Math.random()*11)+2;
    num2 = Math.floor(Math.random()*12)+1;
    let num3 = Math.floor(Math.random()*12)+1;
    let symbolNum = Math.floor(Math.random()*2);
    
    // Assigns symbol for the equation 
    if(symbolNum === 0) {
        symbol = '-';
        
        // Checks that when the symbol is - then num1 times y (num2) is less than num3
        while (num1*num2 < num3) {
            num2 = Math.floor(Math.random()*12)+1;
        }

        calculateEquationMinus(num1, num2, num3);

    } else {
        symbol ='+';

        calculateEquationPlus(num1, num2, num3);
    }

    // inserts the numbers and symbol into the DOM
    document.getElementById('operand2').textContent = num1;
    document.getElementById('operand3').textContent = symbol;
    document.getElementById('operand4').textContent = num3;
    
}

/** 
 * Calculates what's the equation is equal to if the symbol is +
 * and inserts the calculated number into the DOM
*/
function calculateEquationPlus(num1, num2, num3){
    let num4 = num1*num2 + num3;
    document.getElementById('operand1').textContent = num4;
}

/** 
 * Calculates what's the equation is equal to if the symbol is -
 * and inserts the calculated number into the DOM
*/
function calculateEquationMinus(num1, num2, num3) {
    let num4 = num1*num2 - num3;
    document.getElementById('operand1').textContent = num4;
}

/** 
 * Compares the users input answer to the generated y value
*/
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === num2) {
        incrementCorrectScore();
        displayResponseCorrect();
    } else {
        incrementIncorrectScore();
        displayResponseIncorrect();
    }

    displaySolution();

    disableSubmitButton();
}

/** 
 * Adds one to the score for the correct answer on the DOM
*/
function incrementCorrectScore() {
    let previousScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++previousScore;

}

/** 
 * Adds one to the score for the incorrect answer on the DOM
*/
function incrementIncorrectScore() {
    let previousScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++previousScore;

}

/**
 * Inserts HTML code into the index page displaying the steps to solve the equation
 */
function displaySolution() {

    // Assigns information from the DOM required to display the solution
    symbol = document.getElementById('operand3').innerText;
    let multiple = document.getElementById('operand2').innerText * num2;

    // Swaps the symbol from + to - and vice versa
    if (symbol==='-') {
        symbol = '+';
    } else {
        symbol = '-';
    }

    document.getElementById('solution').innerHTML =`
    <p>(${symbol} ${document.getElementById('operand4').innerText})</p>
    <p>${document.getElementById('operand2').innerText} y = ${document.getElementById('operand1').innerText} ${symbol} ${document.getElementById('operand4').innerText}</p>
    <p>${document.getElementById('operand2').innerText} y = ${multiple}</p>
    <p>(÷ ${document.getElementById('operand2').innerText})</p>
    <p>y = ${multiple} ÷ ${document.getElementById('operand2').innerText}</p>
    <p>y = ${num2}</p>
    `;
}

/**
 * Inserts HTML code into the index page declaring the answer is correct and depending 
 * on the number of clicks recorded will supply and grade and the required number of hints used
 */
function displayResponseCorrect() {

    if (click === 0) {
        document.getElementById('response').innerHTML = '<p class=score_correct>Correct!<br>Grade: A+<br>No Hint required!</p>';
    } else if (click === 1) {
        document.getElementById('response').innerHTML = '<p class=score_correct>Correct!<br>Grade: A<br>One Hint required</p>';
    } else if (click === 2) {
        document.getElementById('response').innerHTML = '<p class=score_correct>Correct!<br>Grade: B+<br>Two Hints required</p>';
    } else if (click === 3) {
        document.getElementById('response').innerHTML = '<p class=score_correct>Correct!<br>Grade: B<br>Three Hints required</p>';
    } else if (click === 4) {
        document.getElementById('response').innerHTML = '<p class=score_correct>Correct!<br>Grade: C+<br>Four Hints required</p>';
    } else {
        document.getElementById('response').innerHTML = '<p class=score_correct>Correct!<br>Grade: C<br>Five Hints required</p>';
    }

}

/**
 * Inserts HTML code into the index page declaring the answer is incorrect
 */
function displayResponseIncorrect() {
    document.getElementById('response').innerHTML = '<p class=score_incorrect>Incorrect</p>';

}

/**
 * Inserts HTML code into the index page removing the HTML code inserted 
 * by displayResponseCorrect() or displayResponseIncorrect() functions
 */
function clearDisplayResponse () {
    document.getElementById('response').innerHTML = ``;
}

/**
 * Inserts HTML code into the index page removing the HTML code inserted 
 * by displaySolution() function
 */
function clearDisplaySolution(){
    document.getElementById('solution').innerHTML = ``;
}

/**
 * Disables the submit button
 * and the hint button
 */
function disableSubmitButton() {
    document.getElementById('submit').disabled=true;
    document.getElementById('hint').disabled=true;
}

/**
 * Enables the submit button
 * and the hint button
 */
function enableSubmitButton() {
    document.getElementById('submit').disabled=false;
    document.getElementById('hint').disabled=false;
}

/**
 * Removes the answer given by the user
 */
function emptyPreviousAnswer() {
    document.getElementById('answer').value='';
}

/**
 * Reveals the lines of the solution corresponding to the number of times the hint button has been clicked
 */
function revealHint() {

    // Assigns information from the DOM required to display the solution
    symbol = document.getElementById('operand3').innerText;
    let multiple = document.getElementById('operand2').innerText * num2;

    // Swaps the symbol from + to - and vice versa
    if (symbol==='-') {
        symbol = '+';
    } else {
        symbol = '-';
    }

    if (click === 0 ) {
        document.getElementById('solution').innerHTML =`
        <p>
            (${symbol} ${document.getElementById('operand4').innerText})
        </p>`;
    } else if (click === 1) {
        document.getElementById('solution').innerHTML += (`
        <p>
            ${document.getElementById('operand2').innerText} y = ${document.getElementById('operand1').innerText} ${symbol} ${document.getElementById('operand4').innerText}
        </p>`);
    } else if (click === 2) {
        document.getElementById('solution').innerHTML += (`
        <p>
            ${document.getElementById('operand2').innerText} y = ${multiple}
        </p>`);
    } else if (click === 3) {
        document.getElementById('solution').innerHTML +=(`
        <p>
            (÷ ${document.getElementById('operand2').innerText})
        </p>`);
    } else if (click === 4) {
        document.getElementById('solution').innerHTML += (`
        <p>
            y = ${multiple} ÷ ${document.getElementById('operand2').innerText}
        </p>`);
    }
}

/**
 * Adds 1 to the number of clicks
 */
function addClick(){
    click += 1;
}