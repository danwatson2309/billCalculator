let button = document.querySelector("#calculate");

const total = document.querySelector("#bill-total");
const totalPeople = document.querySelector("#no-people");
const totalTip = document.querySelector("#tip-percent");

let tipTotal = 0;

function calcTip() {
  let billTotal = total.value;
  let tipPerc = totalTip.value;
  tipTotal = (tipPerc / 100) * billTotal;
  tipTotall = tipTotal.toFixed(2);
}

let grandTotal = 0;

function totalCost() {
  let billTotal = total.value;
  grandTotal = +billTotal + tipTotal;
  grandTotall = grandTotal.toFixed(2);
}

let eachOwes = 0;

function totalEach() {
  let noPeople = totalPeople.value;
  eachOwes = grandTotal / noPeople;
  eachOwess = eachOwes.toFixed(2);
}

function displayTip() {
  calcTip();
  let tipDisplay = document.querySelector("#tip-total");
  tipDisplay.innerText = `£${tipTotall}`;
}

function displayTotal() {
  totalCost();
  let grandDisplay = document.querySelector("#grand-total");
  grandDisplay.innerText = `£${grandTotall}`;
}

function displayEachOwes() {
  totalEach();
  let eachDisplay = document.querySelector("#each-owes");
  eachDisplay.innerText = `£${eachOwess}`;
}

button.addEventListener("click", () => displayTip());
button.addEventListener("click", () => displayTotal());
button.addEventListener("click", () => displayEachOwes());

//improvements:

//-add toFixed(2) to the totals

//if no.people === 0 return 1 or return grandTotal
