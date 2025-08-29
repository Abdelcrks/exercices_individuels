const secret = ["yellow", "green"]

const allowedColors = ["blue", "red", "yellow", "green"]

const player = ["red","blue"]

// essais maximum 12

// longueur = 2
// les deux couleurs doivent être différentes
// chaque couleur doit être dans allowed
//


const  isValidPlayer = (guess,allowedColors) => {
    // verif la longueur
    // verif chaque element est une string
    // verif que les couleurs sont differentes 
    // retourner true ou false ou true & message d'erreur

    if (!Array.isArray(player)){ // si c'est different d'un tableau
        return false
    } else if (player.length !== 2){
        return false
    }
    // normaliser : string => trim => lowercase
    const guess = player.map(color=>String(color).trim().toLowerCase())
    // chaque couleur autorisée doit etre  dans allowedColors 
    if(!guess.every(color => allowedColors.includes(color))){
        return false
    }
    // les 2 couleurs doivent etre differentes
    if(new Set(guess).size !==2){
        return false
    }
    return true
}
console.log(isValidPlayer(guess, allowedColors))

const isWi = (secret,player)=>{

}

const getFeedback=(secret,player) => {
    
}
