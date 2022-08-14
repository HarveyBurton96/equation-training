// Runs once the DOM loads
// Checks for submit button or new equation button

document.addEventListener('DOMContentLoaded', function() {
    let buttons=document.getElementsByTagName('button');

    for(let button of buttons) {
        button.addEventListener('click', function(){
        if (this.getAttribute('data-type') === 'submit') {
            checkAnswer();
        } else {
            newEquation();
        }
    })

} newEquation();
})

let num2;
/**
 * Creates random numbers to build our equation with
 * Also assigned if the symbol in the equation will be - or +
 */
function newEquation() {
    let num1 = Math.floor(Math.random()*11)+2;
    num2 = Math.floor(Math.random()*12)+1;
    let num3 = Math.floor(Math.random()*12)+1;
    let symbolNum = Math.floor(Math.random()*2);
    
    if(symbolNum === 0) {
        var symbol = '-'
        
        while (num1*num2 < num3) {
            num2 = Math.floor(Math.random()*12)+1;
        }

        calculateEquationMinus(num1, num2, num3)

    } else {
        var symbol ='+'

        calculateEquationPlus(num1, num2, num3)
    }

    
    document.getElementById('operand2').textContent = num1;
    document.getElementById('operand3').textContent = symbol;
    document.getElementById('operand4').textContent = num3;
    
}

function calculateEquationPlus(num1, num2, num3){
    let num4 = num1*num2 + num3
    document.getElementById('operand1').textContent = num4;
}

function calculateEquationMinus(num1, num2, num3) {
    let num4 = num1*num2 - num3
    document.getElementById('operand1').textContent = num4;
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === num2) {
        incrementCorrectScore()
    } else {
        incrementIncorrectScore()
    }
}

function incrementCorrectScore() {
    let previousScore = parseInt(document.getElementById('correct').innerText)
    document.getElementById('correct').innerText = ++previousScore

}

function incrementIncorrectScore() {
    let previousScore = parseInt(document.getElementById('incorrect').innerText)
    document.getElementById('incorrect').innerText = ++previousScore

}
