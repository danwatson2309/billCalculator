
billTotal = document.querySelector("#bill-total").innerText;
noPeople = document.querySelector("#no-people").innerText;
tipPerc = document.querySelector("#tip-percent").innerText;
const tipTotal = tipPerc/100 * billTotal;
const grandTotal = billTotal + tipTotal;
const eachowes = grandTotal / noPeople;

function calcTip(){
    let tipTotal = (tipPerc/100) * billTotal;

}

let button = document.querySelector("#calculate").addEventListener("click", calcTip)
document.querySelector("#each-owes").innerText = `£${eachowes}`;
document.querySelector("#grand-total").innerText = `£${grandTotal}`;
document.querySelector("#tip-total").innerText = `£${tipTotal}`;