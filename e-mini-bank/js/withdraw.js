document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawamountString = withdrawField.value
    const withdrawAmountNum = parseFloat(withdrawamountString)

    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalString = withdrawTotal.innerText
    const withdrawTotalNum = parseFloat(withdrawTotalString)

    const currentWithdraw = withdrawAmountNum + withdrawTotalNum

    withdrawTotal.innerText = currentWithdraw

    const balanceTotalElement = document.getElementById('balance-total')
    const prevbalanceTotalString = balanceTotalElement.innerText
    const newbalanceTotalNum = parseFloat(prevbalanceTotalString)

    const newbalance = newbalanceTotalNum - withdrawAmountNum

    balanceTotalElement.innerText=newbalance

    
    
    withdrawField.value = " ";


    

    
})