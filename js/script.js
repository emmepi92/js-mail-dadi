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

