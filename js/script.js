var emailsList = ['lucarossi@gmail.com', 'annalisaluca@gmial.com ', 'giovannirana@live.it', 'giuseppetrova@outlook.com', 'casanova@live.it'];

var userEmail = prompt("Inserisci la tua email");

var check = false;

for ( i=0; i < emailsList.length; i++) {
    if ( emailsList[i] === userEmail) {
       check = true;
    };
};

if (check) {
    document.getElementById("result").innerHTML = "La sua email è registrata sulla nostra piattaforma"
} else {
    document.getElementById("result").innerHTML = "La sua email non risulta registrata sulla nostra piattaforma"
}

// ---------------------------------------------

var computerNumber = Math.floor(Math.random()*6 + 1);
var userNumber = Math.floor(Math.random()*6 + 1);

var outputHtml = document.getElementById("result-2");
var result;

if (computerNumber === userNumber) {
   result = "I due numeri generati sono uguali";
} else if (computerNumber > userNumber) {
   result = "Ha vinto il computer!";
} else {  // = (computerNumber < userNumber)
   result = "Ha vinto il giocatore!";
}

outputHtml.innerHTML = result;

// for easy debug 
console.log('computer ' + computerNumber);
console.log('giocatore ' + userNumber);