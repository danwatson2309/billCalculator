let totalCost = document.querySelector("#billTotal");
let noPeople = document.querySelector("#people");
let button = document.querySelector("#calcBill");
let eachPay = eachTotal(totalCost, noPeople);

button = addEventListener("click", giveResult)


function eachTotal(totalCost, noPeople){
    return totalCost/noPeople
}

 function giveResult(eachPay){
    document.querySelector("#eachTotal").innerText = eachPay
 }


    
