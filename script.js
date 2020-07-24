// Adding function
function addItems(id1, id2, id3) {
  const inputNumber = parseFloat(document.getElementById(id1).value) + 1;
  document.getElementById(id1).value = inputNumber;
  const defautAmount = parseFloat(document.getElementById(id2).innerText);
  const totalAmount = defautAmount + id3;
  document.getElementById(id2).innerText = totalAmount;
  const subTotal = parseFloat(document.getElementById("sub-total").innerText);
  const subTotalAmount = subTotal + id3;
  document.getElementById("sub-total").innerText = subTotalAmount;
  document.getElementById("total").innerText = subTotalAmount;
}
// Removing function
function removeItems(id1, id2, id3) {
  const inputNumber = parseFloat(document.getElementById(id1).value) - 1;
  document.getElementById(id1).value = inputNumber;
  const defautAmount = parseFloat(document.getElementById(id2).innerText);
  const totalAmount = defautAmount - id3;
  document.getElementById(id2).innerText = totalAmount;
  const subTotal = parseFloat(document.getElementById("sub-total").innerText);
  const subTotalAmount = subTotal - id3;
  document.getElementById("sub-total").innerText = subTotalAmount;
  document.getElementById("total").innerText = subTotalAmount;
}
// Item 1
// Add Items from Cart
const plusButton = document.getElementById("plus");
plusButton.addEventListener("click", function () {
  addItems("input-number", "default-amount", 1219);
});
// Removing items
const minusButton = document.getElementById("minus");
minusButton.addEventListener("click", function () {
  removeItems("input-number", "default-amount", 1219);
});
// Item 2
// Adding items
const plusBtn2 = document.getElementById("plus2");
plusBtn2.addEventListener("click", function () {
  addItems("input-number2", "default-amount2", 59);
});
// Removing items
const minusBtn2 = document.getElementById("minusBtn2");
minusBtn2.addEventListener("click", function () {
  removeItems("input-number2", "default-amount2", 59);
});

const crossItem = document.getElementById('cross');
crossItem.addEventListener('click',function(){
    document.getElementById('cart1').style.display='none';
    const subTotal = parseFloat(document.getElementById('sub-total').innerText);
    const defaultAmount = parseFloat(document.getElementById('default-amount').innerText);
    totalAfterRemove = subTotal-defaultAmount;
    document.getElementById('sub-total').innerText =totalAfterRemove;
    document.getElementById("total").innerText = totalAfterRemove;
})

const crossItem2 = document.getElementById('cross2');
crossItem2.addEventListener('click',function(){
    document.getElementById('cart2').style.display='none';
    const subTotal = parseFloat(document.getElementById('sub-total').innerText);
    const defaultAmount = parseFloat(document.getElementById('default-amount2').innerText);
    totalAfterRemove = subTotal-defaultAmount;
    document.getElementById('sub-total').innerText =totalAfterRemove;
    document.getElementById("total").innerText = totalAfterRemove;
})

const checkoutButton = document.getElementById('checkout-btn');
checkoutButton.addEventListener('click',function(){
    document.getElementById('section1').style.display="none";
    document.getElementById('order-placed').style.display="block"
})
