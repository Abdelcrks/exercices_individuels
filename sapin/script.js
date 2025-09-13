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

// afficherRectangle(5,9)


function afficherTriangleDroite(n) {
    // En s'inspirant de la fonction afficherRectangle(),
    // comment afficher des lignes qui "s'allongent" un peu plus à chaque itération ?

    for(let i=0 ; i<n; i++){
       let ligne = ""
       
       for(let etoile = 0 ; etoile<i ; etoile++){
        ligne+= "*"
       }
       ligne+= "\\ "
       console.log(ligne);
    }
    
  }
  
  afficherTriangleDroite(5)

