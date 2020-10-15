let billTotal = 350 //document.querySelector("#bill-total").innerHTML;
let noPeople = 3 //document.querySelector("#no-people").innerHTML;
let tipPerc = 10 //document.querySelector("#tip-percent").innerHTML;


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

let button = document.querySelector("#calculate").addEventListener("click", calcTip)
document.querySelector("#each-owes").innerText = `£${eachowess}`;
document.querySelector("#grand-total").innerText = `£${grandTotal}`;
document.querySelector("#tip-total").innerText = `£${tipTotal}`;
 