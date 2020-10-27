let button = document.querySelector("#calculate");
let billTotal = 300 //document.querySelector("#billTotal").value;
let noPeople = 3 //document.querySelector("#no-people").value;
let tipPerc = 10 //document.querySelector("#tip-percent").value;

function calcTip(){
      return (tipPerc/100) * billTotal;
};
let tipTotal = calcTip();

function displayTip(tiptotal){
  let tipDisplay = document.querySelector("#tip-total");
  tipDisplay.innerText = `£${tipTotal}`;  
}


function totalCost(){
     return billTotal += tipTotal
};
let grandTotal = totalCost();

function displayTotal(totalCost){
    let grandDisplay = document.querySelector("#grand-total");
    grandDisplay.innerText = `£${grandTotal}`;
}



function totalEach(){
     return grandTotal / noPeople
};
let eachowes = totalEach();

function displayEachOwes(totalEach){
    let eachDisplay = document.querySelector("#each-owes");
    eachDisplay.innerText = `£${eachowes}`;
}

button.addEventListener("click", displayTip)
button.addEventListener("click", displayTotal);
button.addEventListener("click", displayEachOwes);






 
