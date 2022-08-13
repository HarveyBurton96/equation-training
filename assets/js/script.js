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

/**
 * Creates random numbers to build our equation with
 */
function newEquation() {
    let num1 = Math.floor(Math.random()*11)+2;
    let num2 = Math.floor(Math.random()*12)+1;
    let num3 = Math.floor(Math.random()*12)+1;
    let symbolNum = Math.floor(Math.random()*2);
    console.log(num2)
    if(symbolNum === 0) {
        var symbol = '-'
        
        while (num1*num2 < num3) {
            num2 = Math.floor(Math.random()*12)+1;
        }

        console.log(num2)

    } else {
        var symbol ='+'
    }

    
    document.getElementById('operand2').textContent = num1;
    document.getElementById('operand3').textContent = symbol;
    document.getElementById('operand4').textContent = num3;
    
}

function calculateEquation(){

}

function checkAnswer() {
    console.log('answer');
}

function incrementCorrectScore() {

}

function incrementIncorrectScore() {

}
