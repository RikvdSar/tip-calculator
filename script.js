const bill = document.querySelector('.calculator__bill--input');
const nrPeople = document.querySelector('.calculator__people--input');
const tipCustom = document.querySelector('.calculator__tip--input');
const tipButtons = document.querySelectorAll('.calculator__tip--btn');
const errorMessagePeople = document.querySelector('.errorMessage__nrOfPeople');
const resetBtn = document.querySelector('.reset-btn');

const totalTipOutput = document.querySelector('.total--number');
const perPersonTipOutput = document.querySelector('.tip-amount--number');

function calcTotalTip(tipPercentage = 0, amountOfPeople = 1) {
    amountOfPeople = nrPeople.value;
    tipPercentage = tipPercentage / 100;
    totalTipOutput.textContent = `$${(bill.value * tipPercentage).toFixed(2)}`;
    perPersonTipOutput.textContent = `$${((bill.value * tipPercentage) / amountOfPeople).toFixed(2)}`;
}

function tipHandler(e) {
    const selectedTip = parseInt(e.currentTarget.textContent);  
    calcTotalTip(selectedTip);
}





tipButtons.forEach(button => {
    button.addEventListener('click', tipHandler);
});

tipCustom.addEventListener('keydown', function(e) {
    const manualTip = parseFloat(e.currentTarget.value);
    calcTotalTip(manualTip);
});

nrPeople.addEventListener('keyup', function(e){
    const nrPeopleEntered = e.currentTarget.value;
    console.log(nrPeopleEntered.isInteger());
    if((e.currentTarget.value <= 0) || (e.currentTarget.value === Number.isInteger(e.currentTarget.value))) {
        errorMessagePeople.textContent = 'Must be a whole number higher then 0';
        calcTotalTip(0, 0);
    } else {
        errorMessagePeople.textContent = '';
    }
});

resetBtn.addEventListener('click', function(e) {
    totalTipOutput.textContent = '$0.00'
    perPersonTipOutput.textContent = '$0.00'
    bill.value = 0;
    nrPeople.value = 1;
    tipCustom.value = '';
});