// Je kan hier 2,5 punten van 20 mee halen:

/* 
0,5 punten: 
 - Plaats de tekst "Tech Conference" in een variabele
 - Log deze variabele naar de console
*/

let h1 = document.querySelector("h1")
console.log(h1)

/* 
2 punten
Toon een boodschap 'Bedankt! Check je mailbox' 
als je op de knop reserveer klikt (zie screenshot)
!!!
BELANGRIJK: Geef de verstuur-knop GEEN type 'submit'
maar WEL: type 'button'
anders wordt het formulier automatisch verstuurd 
en dat is niet de bedoeling.
*/

let button = document.getElementById("Knop")

let input = document.querySelector("input")

let form = document.querySelector("form")

button.addEventListener("click", function() {
    let blockquote = document.createElement("blockquote")
    form.appendChild(blockquote)
    let textConfirmation = document.createTextNode("Bedankt! Check je mailbox.")
    blockquote.appendChild(textConfirmation)
})