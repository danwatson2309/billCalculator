
let billTotal = document.querySelector("#bill-total").innerHTML
let noPeople = document.querySelector("#no-people")
let tipPerc = document.querySelector("#tip-percent")
let tipTotalSum = document.querySelector("#tip-total")
let grandTotal = document.querySelector("#grand-total")
let eachOwes = document.querySelector("#each-owes")

function calcTip(){
    let tipTotal = tipPerc/100 * billTotal
    tipTotalSum.innerText = (`${tipTotal}`)
    console.log(tipTotal)

}

/*function calculateBill(){
grandTotal = billTotal + tipTotal

}*/




let button = document.querySelector("#calculate").addEventListener("click", calcTip);
