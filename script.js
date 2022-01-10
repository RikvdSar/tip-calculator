const bill = document.querySelector('.calculator__bill--input');
const nrPeople = document.querySelector('.calculator__people--input');
const tipCustom = document.querySelector('.calculator__tip--input');
const tipButtons = document.querySelectorAll('.calculator__tip--btn');

const totalTipOutput = document.querySelector('.total--number');
const perPersonTipOutput = document.querySelector('.tip-amount--number');

let amountOfPeople = 1;

function calcTotalTip(tipPercentage, amountOfPeople) {
    console.log(amountOfPeople);
    totalTipOutput.textContent = `$${bill.value * (tipPercentage / 100)}`;
    perPersonTipOutput.textContent = `$${(bill.value * (tipPercentage / 100))/amountOfPeople}`;
}

function tipHandler(e) {
    const selectedTip = parseInt(e.currentTarget.textContent);   
    calcTotalTip(selectedTip, amountOfPeople);
}

tipButtons.forEach(button => {
    button.addEventListener('click', tipHandler);
});

tipCustom.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        const manualTip = parseInt(e.currentTarget.value);
        calcTotalTip(manualTip);
    }
});

nrPeople.addEventListener('keyup', function(e){
    amountOfPeople = e.currentTarget.value;
});
