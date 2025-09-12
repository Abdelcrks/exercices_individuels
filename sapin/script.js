function afficherEtoiles(n){

    let etoiles = ""
    for (let i = 0; i <n; i++){
        etoiles+= "*"
    }

    console.log(etoiles)

}

// afficherEtoiles(2)
// afficherEtoiles(5)

  

function afficherRectangle(hauteur,largeur){

    for(let i=0; i <hauteur; i++){
        afficherEtoiles(largeur)
    }
}

afficherRectangle(5,9)