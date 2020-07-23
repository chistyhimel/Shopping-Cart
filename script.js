// add item value

const plusButton = document.getElementById("plusBtn");
plusButton.addEventListener('click',function(){
    const inputNumber = parseFloat(document.getElementById("input-number").value);
    
    const totalInput = inputNumber + 1;
    document.getElementById("input-number").value = totalInput;

    const defaultAmount =parseFloat(document.getElementById("default-amount").innerText);
    const totalAmount = defaultAmount+ 1219;
    document.getElementById("default-amount").innerText = totalAmount;

        // subtotal section
const subTotal = parseFloat(document.getElementById("sub-total").innerText);
const subtotalamount = defaultAmount + subTotal;
document.getElementById("sub-total").innerText=subtotalamount;

document.getElementById("total").innerText=subtotalamount;
})

// remove item value
const minusButton = document.getElementById("minusBtn");
minusButton.addEventListener('click',function(){
    const inputNumber = parseFloat(document.getElementById("input-number").value);
    const totalInput = inputNumber - 1;
    document.getElementById("input-number").value = totalInput;

    const defaultAmount =parseFloat(document.getElementById("default-amount").innerText);
    const totalAmount = defaultAmount- 1219;
    document.getElementById("default-amount").innerText = totalAmount;

    const subTotal = parseFloat(document.getElementById("sub-total").innerText);
const subtotalamount =  subTotal-totalAmount ;
document.getElementById("sub-total").innerText=subtotalamount;
document.getElementById("total").innerText=subtotalamount;
    


})

// 2nd item case

const plusButton2 = document.getElementById("plusBtn2");
plusButton2.addEventListener('click',function(){
    const inputNumber2 = parseFloat(document.getElementById("input-number2").value);
    
    const totalInput2 = inputNumber2 + 1;
    document.getElementById("input-number2").value = totalInput2;

    const defaultAmount2 =parseFloat(document.getElementById("default-amount2").innerText);
    const totalAmount2 = defaultAmount2+ 59;
    document.getElementById("default-amount2").innerText = totalAmount2;
    

    // subtotal section
const subTotal = parseFloat(document.getElementById("sub-total").innerText);
const subtotalamount2 = defaultAmount2 + subTotal;
document.getElementById("sub-total").innerText=subtotalamount2;
document.getElementById("total").innerText=subtotalamount2;
})

// remove item value
const minusButton2 = document.getElementById("minusBtn2");
minusButton2.addEventListener('click',function(){
    const inputNumber2 = parseFloat(document.getElementById("input-number2").value);
    const totalInput2 = inputNumber2 - 1;
    document.getElementById("input-number2").value = totalInput2;

    const defaultAmount2 =parseFloat(document.getElementById("default-amount2").innerText);
    const totalAmount2 = defaultAmount2- 59;
    document.getElementById("default-amount2").innerText = totalAmount2;

    const subTotal = parseFloat(document.getElementById("sub-total").innerText);
const subtotalamount2 =  subTotal-totalAmount2 ;
document.getElementById("sub-total").innerText=subtotalamount2;

document.getElementById("total").innerText=subtotalamount2;

})