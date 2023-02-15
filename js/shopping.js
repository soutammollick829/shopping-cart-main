// iphone 11 black plus button ....
function iphone(isIncrease){
    const phoneInputField = document.getElementById(`phone-input-field`);
    const phoneInputValue = phoneInputField.value;
    const phoneValueString = parseInt(phoneInputValue);
    let previousValue;

    if(isIncrease === true){
        previousValue = phoneValueString + 1;
    }
    else{
        previousValue = phoneValueString -1;
    }
    phoneInputField.value = previousValue;
    return previousValue;
}

function updateTotalPhonePrice(previousValue){
    
    const phoneTotalPrice = previousValue * 1219;
    const totalPriceField = document.getElementById(`total-price-field`);
    totalPriceField.innerText = phoneTotalPrice;
}
document.getElementById(`plus-btn-phone`).addEventListener(`click`, function(){
    const previousValue = iphone(true);
   updateTotalPhonePrice(previousValue);
})
document.getElementById(`minus-btn-phone`).addEventListener(`click`, function(){
    const previousValue = iphone(false);
    updateTotalPhonePrice(previousValue);
})