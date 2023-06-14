console.log('JS SNACK 4')

// Funzione per generare un numero casuale compreso tra min e max
function generateNumberCasual(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Recupero l'elemento dal DOM
const resultTeams = document.getElementById('result-teams');
const teamsFoulSuffered = document.getElementById('team-foul-suffered');

  
// Array di squadre di calcio
const teams = [
    {
      name: 'Atalanta',
      pointsMade: 0,
      foulSuffered: 0,
    },
    {
      name: 'Inter',
      pointsMade: 0,
      foulSuffered: 0,
    },
    {
      name: 'Juventus',
      pointsMade: 0,
      foulSuffered: 0,
    },
    {
      name: 'Fiorentina',
      pointsMade: 0,
      foulSuffered: 0,
    },
    {
      name: 'Napoli',
      pointsMade: 0,
      foulSuffered: 0,
    }
];

// Genero numeri casuali per i punti fatti e i falli subiti. Utilizzando la funzione fata precedentemente.

// for (let i = 0; i < teams.length; i++) {
//     const team = teams[i];
//     team.pointsMade = generateNumberCasual(0, 80);
//     team.foulSuffered = generateNumberCasual(0, 30);
// }
teams.forEach(team => {
  team.pointsMade = generateNumberCasual(0, 80);
  team.foulSuffered = generateNumberCasual(0, 30);
});
  

console.log(`Lista delle squadre con i punti fatti e i falli subiti `, teams);




// Creo un ciclo forEach, estraggo le proprietà e  inserisco nella stringa
let resultTeamsHTML = '';
teams.forEach(({ name, pointsMade, foulSuffered }) => {
  resultTeamsHTML += `<li class= "py-1"; >${name} - Punti fatti: ${pointsMade}, Falli subiti: ${foulSuffered}</li>`;
});



// Creo un nuovo array con il destructuring che contiene solo nomi e falli subiti
const nameAndFoulSuffered = teams.map(({ name, foulSuffered }) => ({ name, foulSuffered }));
  
// Stampo in console
console.log(`Lista delle squadre con falli subiti` , nameAndFoulSuffered);
  


// Creo un ciclo forEach, estraggo le proprietà e  inserisco nella stringa
let teamsFoulSufferedHTML = '';
nameAndFoulSuffered.forEach(({ name, foulSuffered }) => {
  teamsFoulSufferedHTML += `<li class= "py-1">${name} - Falli subiti: ${foulSuffered}</li>`;
});

// Aggiorno i contenuti degli elementi del DOM recuperati precedentemente
resultTeams.innerHTML = resultTeamsHTML;
teamsFoulSuffered.innerHTML = teamsFoulSufferedHTML;
  
  
  
  