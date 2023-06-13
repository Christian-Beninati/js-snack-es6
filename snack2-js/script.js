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
console.log('Studenti con un totale di voti superiore a 70:');
// itero su ogni studente per trasformare il name in maiuscolo e stampo in console
studentsAbove70.forEach((student) => {
const upperCaseName = student.name.toUpperCase();
console.log(`ID: ${student.id}, Name: ${upperCaseName}, Grades: ${student.grades}`);
});


// Creo una nuova array Filtrando gli studenti con un totale di voti superiore a 70 e id superiore a 120

const studentsAbove70IdAbove120 = students.filter((student) => student.grades > 70 && student.id > 120);
console.log('Studenti con un totale di voti superiore a 70 e id superiore a 120:');
// itero su ogni studente per trasformare il name in maiuscolo e stampo in console
studentsAbove70IdAbove120.forEach((student) => {
const upperCaseName = student.name.toUpperCase();
console.log(`ID: ${student.id}, Name: ${upperCaseName}, Grades: ${student.grades}`);
});


