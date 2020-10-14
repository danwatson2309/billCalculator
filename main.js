
const billTotal = document.querySelector("#bill-total").innerHTML;
const noPeople = document.querySelector("#no-people").innerHTML;
const tipPerc = document.querySelector("#tip-percent").innerHTML;
const tipTotal = tipPerc/100 * billTotal;
const grandTotal = billTotal + tipTotal;
const eachowes = grandTotal / noPeople;

 function calcTip(tipPerc, billTotal){
     let tipTotal = tipPerc/100 * billTotal;
    console.log(tipTotal)
}

let button = document.querySelector("#calculate").addEventListener("click", calcTip)
document.querySelector("#each-owes").innerText = `£${eachowes}`;
document.querySelector("#grand-total").innerText = `£${grandTotal}`;
document.querySelector("#tip-total").innerText = `£${tipTotal}`;