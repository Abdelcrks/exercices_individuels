const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}


const latinInput = document.querySelector('#latinInput')
const buttonLatinToMorse = document.querySelector("#buttonLatinToMorse")
const resultTranslateToMorse= document.querySelector("#resultTranslateToMorse")
//console.log(latinInput)




const getLatinCharacterList = (/*text*/) => {
    
    const text = latinInput.value
    const characters = text.toUpperCase().split("")
    return characters

    //return text.toUpperCase().split("")  // transforme en tableau de lettre

}
// getLatinCharacterList("Hello, world")


const translateLatinCharacter = (character) => {
   //return latinToMorse[character]  // retourne la lettre en morse
   return latinToMorse[character]
}
// translateLatinCharacter("A")



const encode = (/*text*/) => {
    latinInput.innerText= ""
    let letters = getLatinCharacterList(/*text*/)
    //let result = []
    let morseResult = []

   for(const character of letters){  // boucle sur chaque lettre 
    const morse = translateLatinCharacter(character)
    //result.push(morse) // ajoute le resultat morse ds le tlbx
    morseResult.push(morse)

   }
   resultTranslateToMorse.innerText = morseResult.join(' ')
   
   
    //return result.join(' ')  // transforme le tableau en une phrase séparé d'espace 
}

//console.log(encode("HELLO WORLD"))

//console.log(buttonLatinToMorse)

buttonLatinToMorse.addEventListener('click', () =>{
    encode()
})


const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  }


const inputMorse= document.querySelector("#morseInput")
const buttonMorseToLatin= document.querySelector("#buttonMorseToLatin")
const resultTranslateToLatin= document.querySelector("#resultTranslateToLatin")


  const translateMorseCharacter = (character) => {
    return morseToLatin[character]  // retourne le morse en lettre
 }

  const decode = () => {
    const textMorse= inputMorse.value
    const characterMorse = textMorse.split(' / ') // decoupe les mots
    let latinResult = []

    for(const morseWord of characterMorse){
        const morseCharacter = morseWord.split(' ') // découpe les lettres
        let latinWord = ""

    for(const morseCode of morseCharacter){
        const latinCharacter = translateMorseCharacter(morseCode)
        latinWord += latinCharacter
    }
    latinResult.push(latinWord)
    }
     resultTranslateToLatin.innerText = latinResult.join(' ')
  }
  //console.log(decode('.... . .-.. .-.. --- / .-- --- .-. .-.. -..'))
  

buttonMorseToLatin.addEventListener("click", () =>{
    decode()
})
