// Add Event Listner To the Withdraw Button
// Get The Withdraw ammount

document.getElementById('btn-withdraw').addEventListener('click', function () {

    const newWithdrawField = document.getElementById('withdraw-input-field');
    const newWithdrawAmountString = newWithdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Clear Input Field Value
    newWithdrawField.value = '';


    if (isNaN(newWithdrawAmount)) {
        alert('Please Provide a Valid Number')
        return;
    }

    // 
    const oldWithdrawamountElement = document.getElementById('total-withdraw');
    const oldWithdrawamountString = oldWithdrawamountElement.innerText;
    const oldWithdrawamount = parseFloat(oldWithdrawamountString);

    
    
    
    
    // Total Balance Section
    
    const oldTotalBalanceElement = document.getElementById('balance-total');
    const oldTotalBalanceString = oldTotalBalanceElement.innerText;
    const oldTotalBalance = parseFloat(oldTotalBalanceString)
    
    if (newWithdrawAmount > oldTotalBalance) { 
        alert('Your Balance insufficient')
        return;
    }
    
    
    const totalWithdrawAmount = oldWithdrawamount + newWithdrawAmount;
    oldWithdrawamountElement.innerText=totalWithdrawAmount



    const totalBalance = oldTotalBalance - newWithdrawAmount;
    oldTotalBalanceElement.innerText = totalBalance;




})
