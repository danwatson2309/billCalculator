let button = document.querySelector("#calculate");
let billTotal = document.querySelector("#billTotal");
let noPeople = document.querySelector("#no-people");
let tipPerc = document.querySelector("#tip-percent");


let tipTotal = calcTip(tipPerc, billTotal) 

function calcTip(tipPerc, billTotal){
    return tipPerc/100 * billTotal;
};

let grandTotal = totalCost(billTotal, tipTotal);

function totalCost(billTotal, tipTotal){
    return billTotal + tipTotal
};

let eachowes = totalEach(grandTotal, noPeople);
let eachowess = eachowes.toFixed(2);

function totalEach(grandTotal, noPeople){
    return grandTotal / noPeople
};

button.addEventListener("click", calcTip)
document.querySelector("#each-owes").innerText = `£${eachowess}`;
document.querySelector("#grand-total").innerText = `£${grandTotal}`;
document.querySelector("#tip-total").innerText = `£${tipTotal}`;
 