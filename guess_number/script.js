
function chooseSecretNumber(){
    let player1GivenNumber = Number(prompt("Entre un nombre entre 0 et 50"))
     while(player1GivenNumber<0 || player1GivenNumber >50 || !isNaN(player1GivenNumber) ){
        
        alert("Rentre un numéro entre 0 et 50")
        player1GivenNumber = Number(prompt("Entre un nombre entre 0 et 50"))
     } 
     return player1GivenNumber
}

let numberToGuess = chooseSecretNumber() // Résultat du chiffre secret

function askNumber(){
    let givenNumberPlayer2 = Number(prompt("Entre un nombre"))
    return givenNumberPlayer2
  }

//chooseSecretNumber()



console.log(numberToGuess)



  function didIWin (givenNumberPlayer2,numberToGuess){
    if(givenNumberPlayer2 < numberToGuess){
      return false
    }
    else if (givenNumberPlayer2>numberToGuess){
      return false
    } 
      return true
  }


function gamePlay() {
    let player2
    let result;
    do {
        player2 = askNumber();         // On demande un nombre
        result = didIWin(player2,numberToGuess);     // On vérifie s’il est bon
    

        if (result === false) {         // Affiche "false" si ce n’est pas bon
            alert("Raté looser");       
        }else{
            alert("Ta gagné")
        }

    } while (result !== true);   // On recommence tant qu’on n’a pas gagné
}

gamePlay()


