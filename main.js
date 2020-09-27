let total = document.querySelector("billTotal");
    let service = document.querySelector("servQual");
    let noPeople = document.querySelector("people");

function calcSplit (total,service,people){
    return total*service/people
    
}

function tipTotal (total, service){
    return total*service
}
        
let calculate = document.querySelector("calcBill");


  