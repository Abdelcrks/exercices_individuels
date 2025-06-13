let nom = prompt("Entrez votre prénom")
let message = ("Bonjour")
//console.log(message)

let firstname = "Beyonce"
//console.log(firstname)

message = (`Bonjour ${nom}!`)
document.querySelector('h1').innerText = message;

const sayHello=(firstname, hour) =>{
    if(hour <= 18){
        console.log(`Bonjour ${firstname} !`)
    }
        console.log(`Bonsoir ${firstname} !`)
}
//document.querySelector('h1').innerText = message;
sayHello(`Beyonce`, 11);
sayHello(`Beyonce`, 18);
sayHello(`Beyonce`, 17);

