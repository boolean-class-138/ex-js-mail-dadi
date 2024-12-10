// 1 - scegliamo dei simboli per la nostra slot e salviamo all'interno di un array
const slotsEmoji = ['⭐️', '🍒', '🤡', '👑'];
// 1.5- Definisco un array che conterrà i simboli estratti
const slotMachineRow = [];
// 2 - per 3 volte estraggo randomicamente un simbolo dall'array slotsEmoji
//   - Ciclo FOR per 3
for(let i = 1; i <= 3; i++) {
    //   - genero un numero random fra 0 e slotsEmoji.length - 1
    const randomIndex = Math.floor(Math.random() * slotsEmoji.length);
    //   - prendo il simbolo dall'array e lo aggiungo all'array slotMachineRow
    slotMachineRow.push(slotsEmoji[randomIndex]);
}
alert(slotMachineRow);
// 3 - Devo verificare che ci siano 3 simboli uguali nell'array slotMachineRow
//   - SE slotMachineRow[0] === slotMachineRow[1] === slotMachineRow[2]
//     - abbiamo vinto
//   - ALTRIMENTI 
//     - abbiamo perso 😥
if(
    slotMachineRow[0] === slotMachineRow[1] &&
    slotMachineRow[0] === slotMachineRow[2]
) {
    alert('Hai vinto!!!!')
} else {
    location.reload()
}