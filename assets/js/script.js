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


function checkAnswer() {
    console.log('answer');
}

function newEquation() {
    console.log('equation');
}

