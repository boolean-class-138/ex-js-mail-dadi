// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.

// 1 - creo un array di emails
const emails = [
    'mario@rossi.it',
    'flavia@bianchi.com',
    'samuele@gmail.com'
];
let isEmailInList = false;
// 2 - chiedo all'utente la sua email
const userEmail = prompt("Inserisci la tua email");
// 3 - ciclo sull'array di emails e, per ogni email:
for(let i = 0; i < emails.length && isEmailInList === false; i++) {
    //   - SE l'email su cui sto "ciclando" è === a all'email dell'utente
    //      - interrompo il ciclo
    const currentEmail = emails[i];
    if(currentEmail === userEmail) {
        isEmailInList = true;
    }
}
// 4 - SE l'email è stata trovata
if(isEmailInList) {
    //      - l'utente può entrare
    alert('Benvenuto nel sistema')
} else {
    //   - ALTRIMENTI l'utente non può entrare
    alert('Non puoi entrare')
}