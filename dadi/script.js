// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte? NO!
// Se dobbiamo confrontare qualcosa che "cosa" ci serve? le condizioni

// 1 - genero un numero randomico da 1 a 6 per il giocatore
const userNumber = Math.floor(Math.random() * 6) + 1;
// 2 - genero un numero randomico da 1 a 6 per la CPU
const cpuNumber = Math.floor(Math.random() * 6) + 1;
// 3 - SE il numero del giocatore è > del numero CPU
//   - ALTRIMENTI SE il numero della CPU è > del numero del giocatore
//   - ALTRIMENTI i numeri sono uguali
console.log(userNumber, cpuNumber);
if(userNumber > cpuNumber) {
    //     - ha vinto il giocatore
    console.log('Ha vinto il giocatore')
} else if(cpuNumber > userNumber) {
    //     - ha vinto la CPU
    console.log('Ha vinto la CPU')
} else {
    console.log('Pareggio!')
}
