
let billTotal = document.querySelector("#bill-total")
let noPeople = document.querySelector("#no-people")
let tipPerc = document.querySelector("#tip-percent")
let grandTotal = document.querySelector("#grand-total")
let eachOwes = document.querySelector("#each-owes")
let tipTotal = document.querySelector("#tip-total")



function calcBill(){
    let tipTotal = (tipPerc/100) * billTotal;
    let grandTotal = billTotal + tipTotal;
    let eachOwes = grandTotal / noPeople;
tipTotal.innerText = (`£ ${tipTotal}`);
grandTotal.innerText = (`£ ${grandTotal}`) 
eachOwes.innerText = (`£ ${eachOwes}`)


}



let button = document.querySelector("#calculate").addEventListener("click", calcBill);
//let button = document.querySelector("#calculate").addEventListener("click", calcBill);
