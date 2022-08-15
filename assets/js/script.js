// Runs once the DOM loads
// Checks for submit button or new equation button

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

// Listens for the enter button and checks the submit question is not disabled
document.getElementById('answer').addEventListener('keydown', function(event){
    if((event.key === 'Enter') && (document.getElementById('submit').disabled === false)) {
        checkAnswer();
    }
    })

newEquation();
});

// Declared outside of functions so it can be used in the checkAnswer() function
let num2;
let num1;
let click

/**
 * Creates random numbers to build our equation with
 * Also assigned if the symbol in the equation will be - or +
 */
function newEquation() {

    click = 0;

    document.getElementById('answer').focus();

    let num1 = Math.floor(Math.random()*11)+2;
    num2 = Math.floor(Math.random()*12)+1;
    let num3 = Math.floor(Math.random()*12)+1;
    let symbolNum = Math.floor(Math.random()*2);
    
    // Assigns symbol for the equation 
    if(symbolNum === 0) {
        var symbol = '-';
        
        // Checks that if the symbol is - then number times y is less than number 3
        while (num1*num2 < num3) {
            num2 = Math.floor(Math.random()*12)+1;
        }

        calculateEquationMinus(num1, num2, num3);

    } else {
        var symbol ='+';

        calculateEquationPlus(num1, num2, num3);
    }

    
    document.getElementById('operand2').textContent = num1;
    document.getElementById('operand3').textContent = symbol;
    document.getElementById('operand4').textContent = num3;
    
}

/** 
 * Calculates what's the equation is equal to if the symbol is +
*/
function calculateEquationPlus(num1, num2, num3){
    let num4 = num1*num2 + num3;
    document.getElementById('operand1').textContent = num4;
}

/** 
 * Calculates what's the equation is equal to if the symbol is -
*/
function calculateEquationMinus(num1, num2, num3) {
    let num4 = num1*num2 - num3;
    document.getElementById('operand1').textContent = num4;
}

/** 
 * Checks the users input answer to the generated y value
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
 * Adds one to the score for the correct answer
*/
function incrementCorrectScore() {
    let previousScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++previousScore;

}

/** 
 * Adds one to the score for the incorrect answer
*/
function incrementIncorrectScore() {
    let previousScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++previousScore;

}

/**
 * Inserts HTML code into the index page displaying the steps to solve the equation
 */
function displaySolution() {

    let symbol = document.getElementById('operand3').innerText;
    let multiple = document.getElementById('operand2').innerText * num2;

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
 * Inserts HTML code into the index page declaring the answer is correct
 */
function displayResponseCorrect() {
    document.getElementById('response').innerHTML = '<p class=score_correct>Correct</p>';

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

    let symbol = document.getElementById('operand3').innerText;

    if (symbol==='-') {
        symbol = '+';
    } else {
        symbol = '-';
    }
    let multiple = document.getElementById('operand2').innerText * num2;

    if (click === 0 ) {
        document.getElementById('solution').innerHTML =`
        <p>(${symbol} ${document.getElementById('operand4').innerText})</p>`
    } else if (click === 1) {
        document.getElementById('solution').innerHTML =`
        <p>(${symbol} ${document.getElementById('operand4').innerText})</p>
        <p>${document.getElementById('operand2').innerText} y = ${document.getElementById('operand1').innerText} ${symbol} ${document.getElementById('operand4').innerText}</p>`
    } else if (click === 2) {
        document.getElementById('solution').innerHTML =`
        <p>(${symbol} ${document.getElementById('operand4').innerText})</p>
        <p>${document.getElementById('operand2').innerText} y = ${document.getElementById('operand1').innerText} ${symbol} ${document.getElementById('operand4').innerText}</p>
        <p>${document.getElementById('operand2').innerText} y = ${multiple}</p>`
    } else if (click === 3) {
        document.getElementById('solution').innerHTML =`
        <p>(${symbol} ${document.getElementById('operand4').innerText})</p>
        <p>${document.getElementById('operand2').innerText} y = ${document.getElementById('operand1').innerText} ${symbol} ${document.getElementById('operand4').innerText}</p>
        <p>${document.getElementById('operand2').innerText} y = ${multiple}</p>
        <p>(÷ ${document.getElementById('operand2').innerText})</p>`
    } else if (click === 4) {
        document.getElementById('solution').innerHTML =`
        <p>(${symbol} ${document.getElementById('operand4').innerText})</p>
        <p>${document.getElementById('operand2').innerText} y = ${document.getElementById('operand1').innerText} ${symbol} ${document.getElementById('operand4').innerText}</p>
        <p>${document.getElementById('operand2').innerText} y = ${multiple}</p>
        <p>(÷ ${document.getElementById('operand2').innerText})</p>
        <p>y = ${multiple} ÷ ${document.getElementById('operand2').innerText}</p>`
    }
}

function addClick(){
    click += 1;
}