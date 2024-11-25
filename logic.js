function gethumanchoice() {

    let rockButton = document.getElementById("rock");
    let paperButton = document.getElementById("paper");
    let scissorsButton = document.getElementById("scissors");

    let mychoice; // Declare mychoice outside of the event handlers

    // Event handlers
    rockButton.onclick = function() {
        mychoice = 1; // Choose rock
        console.log("mychoice:", mychoice); // Log after choice is made
    };

    paperButton.onclick = function() {
        mychoice = 2; // Choose paper
        console.log("mychoice:", mychoice); // Log after choice is made
    };

    scissorsButton.onclick = function() {
        mychoice = 3; // Choose scissors
        console.log("mychoice:", mychoice); // Log after choice is made
    };

}
function getcomputerchoice(){
    let botchoice = Math.floor(Math.random() * 3) + 1;
    console.log(botchoice);
    if (botchoice == 1){
        //mejor usarlo para el humanchoice
    }
}



function playRound(humanchoice, computerchoice) {
    // your code here!
  }
  
  const humanselection = gethumanchoice();
  const computerselection = getcomputerchoice();
  
  playRound(humanselection, computerselection);
