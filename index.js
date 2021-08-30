var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector(".btn-check");
var numberOfNotes = document.querySelectorAll(".no-of-notes");
var errMsg = document.querySelector(".error");
var notes = [2000, 500, 100, 20, 10, 5, 1];

function calculateExchanges(returnAmt){
    
    notes.forEach((note,index)=>{
        numberOfNotes[index].innerHTML =parseInt(returnAmt/note);
        returnAmt=returnAmt%note;
    })
}

function btnClickHandler() {
  let billAmountNum=Number(billAmount.value)
  let cashGivenNum=Number(cashGiven.value)
  errMsg.style.display = "none";

  function showError(msg) {
    errMsg.style.display = "block";
    errMsg.innerHTML = msg;
  }
  if (billAmountNum > 0) {
      
    if (cashGivenNum>=billAmountNum) {
    
        let returnAmount=cashGivenNum-billAmountNum;
        calculateExchanges(returnAmount);
      
    } else {
      showError("Do you wanna wash plates?");
    }
  } else {
    showError("invalid bill amount");
  }
}

checkButton.addEventListener("click", btnClickHandler);
