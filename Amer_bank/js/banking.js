//handle deposit button

document.getElementById("deposit-button").addEventListener('click', function() {
    //get the ammount depositted
    const depositInput = document.getElementById("deposit-input");
    const depositAmount = depositInput.value;
    //console.log(depositAmount);

    const depositCurrent = document.getElementById("depositTotal");
    const currentDepositAmount = depositCurrent.innerText;
    const newdepositCurrent = parseFloat(currentDepositAmount) + parseFloat(depositAmount);
    depositCurrent.innerText = newdepositCurrent;

    //update account balance

    const balanceTotal = document.getElementById("balanceT");
    const currentBalance = balanceTotal.innerText;
    const newBalanceCurrent = parseFloat(currentBalance) + parseFloat(depositAmount);
    balanceTotal.innerText = newBalanceCurrent;
    //clear the input field
    depositInput.value = '';



});
// hande withdraw
document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value);
    console.log(withdrawAmount);
    //set withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdraw = parseFloat(withdrawTotal.innerText);
    const newWithdrawTotal = withdrawAmount + previousWithdraw;
    withdrawTotal.innerText = newWithdrawTotal;

    //set balance
    const balanceTotall = document.getElementById("balanceT");
    const precurrentBalance = parseFloat(balanceTotall.innerText);
    const newBalanceCurrentt = precurrentBalance - withdrawAmount;
    balanceTotall.innerText = newBalanceCurrentt;
    //clear wirhdraw input
    withdrawInput.value = '';



})