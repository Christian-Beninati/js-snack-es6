console.log('JS SNACK 3')

// Recupero l'elemento dal DOM
const weightBikeResult = document.getElementById('result-bike');

// Array di oggetti (bikes)
const  bikes = [
    {
        name: 'Atala',
        weight: 4
    },
    {
        name: 'Bianchi',
        weight: 7
    },
    {
        name: 'Pinarello',
        weight: 6
    },
    {
        name: 'Carrera',
        weight: 8
    },
    {
        name: 'Olympia',
        weight: 3
    },
]

// Stampo in console
console.log(bikes);

// Inizializzo la variabile minWeightBike con il primo oggetto dell'array bikes
let minWeightBike = bikes[0];

// Avvio un ciclo for per iterare attraverso gli oggetti dell'array bikes
for (let i = 0; i < bikes.length; i++) {
  const { name, weight } = bikes[i]; // Utilizzo il destructuring per estrarre il nome e il peso della bici corrente
  
  // Confronto il peso della bici 
  if (weight < minWeightBike.weight) { 
    minWeightBike = { name, weight }; // Se il peso della bici corrente è inferiore, aggiorno la variabile minWeightBike
  }
}

// Stampo in console 
console.log( `La bici con peso minore è:`, minWeightBike);

//Creo una stringa
const resultString = `La bici con peso minore è: ${minWeightBike.name} (${minWeightBike.weight} kg)`;

// Assegmo la stringa all'elemento del DOM recuperato precedentemente 
weightBikeResult.innerText = resultString;
