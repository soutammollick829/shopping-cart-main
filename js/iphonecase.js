function iphoneCase(isIncrease){
const caseInputField = document.getElementById(`case-input-field`);
const caseInputFieldString = caseInputField.value;
const caseInputFieldValue = parseInt(caseInputFieldString);
let newCaseNumber;
if(isIncrease){
    newCaseNumber = caseInputFieldValue + 1;
}
else{
    newCaseNumber = caseInputFieldValue - 1;
}
caseInputField.value = newCaseNumber;
return newCaseNumber;
}

function updatePhoneCasePrice(newCaseNumber){
    const caseTotalPice = newCaseNumber * 59;
    const caseInputFieldValue = document.getElementById(`total-price-case`);
    caseInputFieldValue.innerText = caseTotalPice;
}

document.getElementById(`phn-case-btn`).addEventListener(`click`, function(){
  const newCaseNumber = iphoneCase(true);
  updatePhoneCasePrice(newCaseNumber);
})
document.getElementById(`case-btn-minus`).addEventListener(`click`, function(){
    const newCaseNumber = iphoneCase(false);
    updatePhoneCasePrice(newCaseNumber);
})

