let button = document.querySelector("#calculate");

const total = document.querySelector("#bill-total");
const totalPeople = document.querySelector("#no-people");
const totalTip = document.querySelector("#tip-percent");





let tipTotal = 0

function calcTip(){
    let billTotal = total.value;
    let tipPerc = totalTip.value;
      tipTotal = (tipPerc/100) * billTotal;
      
};    
 
let grandTotal = 0

function totalCost(){
  let billTotal = total.value;
  grandTotal= + billTotal+tipTotal;
  
};

let eachOwes = 0

function totalEach(){
     let noPeople = totalPeople.value; 
     eachOwes = grandTotal / noPeople;
     
};



function displayTip(){
  calcTip()
  console.log(tipTotal)
  let tipDisplay = document.querySelector("#tip-total");
  tipDisplay.innerText = `£${tipTotal}`;
    
}


function displayTotal(){
  totalCost()
    let grandDisplay = document.querySelector("#grand-total");
    grandDisplay.innerText = `£${grandTotal}`;
}


function displayEachOwes(){
  totalEach()
    let eachDisplay = document.querySelector("#each-owes");
    eachDisplay.innerText = `£${eachOwes}`;
}



button.addEventListener("click", () => displayTip())
button.addEventListener("click", () => displayTotal());
button.addEventListener("click", () => displayEachOwes());






 
