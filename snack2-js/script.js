console.log('JS SNACK 2')

// Creo una Array di oggetti
const students = [
{
    id: 213,
    name: 'Marco della Rovere',
    grades: 78,
},
{
    id: 110,
    name: 'Paola Cortellessa',
    grades: 96,
},
{
    id: 250,
    name: 'Andrea Mantegna',
    grades: 48,
 },
{
    id: 145,
    name: 'Gaia Borromini',
    grades: 74,
 },
{
    id: 196,
    name: 'Luigi Grimaldello',
    grades: 68,
 },
 {
    id: 102,
    name: 'Piero della Francesca',
    grades: 50,
 },
 {
    id: 120,
    name: 'Francesca da Polenta',
    grades: 84,
},
];

// Creo una nuova array Filtrando gli studenti con un totale di voti superiore a 70
const studentsAbove70 = students.filter((student) => student.grades > 70);

// Trasformo il nome degli studenti in maiuscolo e mantengo gli altri dati
const studentsAbove70UpperCase = studentsAbove70.map((student) => {
  return {
    id: student.id,
    name: student.name.toUpperCase(),
    grades: student.grades,
  };
});
// Stampo in console
console.log( 'Studenti con un totale di voti superiore a 70:', studentsAbove70UpperCase);

// Creo una nuova array Filtrando gli studenti con un totale di voti superiore a 70 e ID superiore a 120
const studentsAbove70IdAbove120 = students.filter((student) => student.grades > 70 && student.id > 120);

// Trasformo il nome degli studenti in maiuscolo e mantengo gli altri dati
const studentsAbove70IdAbove120UpperCase = studentsAbove70IdAbove120.map((student) => {
  return {
    id: student.id,
    name: student.name.toUpperCase(),
    grades: student.grades,
  };
});
// Stampo in console
console.log('Studenti con un totale di voti superiore a 70 e ID superiore a 120:' ,studentsAbove70IdAbove120UpperCase);




