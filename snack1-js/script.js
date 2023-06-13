console.log('JS SNACK 1')

// Nome tavolo
const tableName = 'Table Vip'

// Array Ospiti
const guestsList = [
    'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'
];


// Creo Lista Ospiti (Array di oggetti)
const guestPlaceholders = guestsList.map((guest, seatIndex) => {
    return {
      tableName: tableName,
      guestName: guest,
      seatNumber: seatIndex + 1,
    };
  });
  
 // Stampo Lista Ospiti (in console)
  guestPlaceholders.forEach((guest) => {
    console.log(guest);
  });