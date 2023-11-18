document.getElementById('btn-deposite').addEventListener('click', function(){
    //deposite field-----------------
    const depositeField = document.getElementById('deposite-field')
    const newdepositeAmountString = depositeField.value
    const newdepositeAmountNum = parseFloat(newdepositeAmountString)
    //deposite Total--------------
    const depositeTotalElement = document.getElementById('deposite-total')
    const prevdepositeTotalString = depositeTotalElement.innerText;
    const prevdepositeTotalNum = parseFloat(prevdepositeTotalString)
    
    const currentdepositeTotal = newdepositeAmountNum + prevdepositeTotalNum

    depositeTotalElement.innerText = currentdepositeTotal ;

    depositeField.value = " ";
    
    // balance 
    const balanceTotalElement = document.getElementById('balance-total')
    const prevbalanceTotalString = balanceTotalElement.innerText
    const newbalanceTotalNum = parseFloat(prevbalanceTotalString)

    const currentbalance = newbalanceTotalNum + newdepositeAmountNum

    balanceTotalElement.innerText = currentbalance
    
})