function getValue(Input) {
    const amount = document.getElementById(Input);
    const totalAmount = amount.value;
    amount.value = '';
    return totalAmount;
}
function amount(balance, totalAmount) {
    const addBalance = document.getElementById(balance);
    const previousAmont = addBalance.innerText;
    const newAmont = parseFloat(previousAmont) + parseFloat(totalAmount);
    addBalance.innerText = newAmont;
}

function updateBalance(balanceTotal, isAdd, totalAmount) {
    const balaceTo = document.getElementById(balanceTotal);
    const preTotalbalace = balaceTo.innerText;
    if (isAdd == true) {
        const total = parseFloat(preTotalbalace) + parseFloat(totalAmount);
        balaceTo.innerText = total;
    } else {
        const total = parseFloat(preTotalbalace) - parseFloat(totalAmount);
        balaceTo.innerText = total;
    }
}

// handle diposit amont

document.getElementById('submit-dipo').addEventListener('click', function () {
    const totalAmount = getValue('user-diposit');
    if (totalAmount > 0) {
        const finalAmonut = amount('dipo-add', totalAmount);
        updateBalance('balace-total', true, totalAmount);
    }
});


// handle withdraw Amont

document.getElementById('submit-draw').addEventListener('click', function () {
    const totalAmount = getValue('user-withdraw');
    if (totalAmount > 0 && totalAmount < 1360) {
        const finalDraw = amount('withdraw-amount', totalAmount);
        updateBalance('balace-total', false, totalAmount);
    }
});

