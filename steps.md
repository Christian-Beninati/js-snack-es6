# SNACK 1

Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip. Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.

<br>
<br>

- INIZIO
- Creo una costante con il nome del tavolo
- Creo un array (contenente tutti i nomi degli ospiti)
- Itero attraverso l'array degli ospiti utilizzando il metodo map
- Creo un oggetto per ogni ospite (nome tavolo, nome ospite, numero del posto) e assegno il valore a ciascuno
- Aggiungo alla nuova lista
- Itero attraverso l'array con il metodo foEach e stampo in console
- FINE

<br>
<br>

# SNACK 2

IAbbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni

1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
3. Dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);
   Questo è l'elenco degli studenti:

Id Name Grades <br>
213 Marco della Rovere 78 <br>
110 Paola Cortellessa 96 <br>
250 Andrea Mantegna 48 <br>
145 Gaia Borromini 74 <br>
196 Luigi Grimaldello 68 <br>
102 Piero della Francesca 50 <br>
120 Francesca da Polenta 84 <br>

<br>
<br>

- INIZIO
- Creo un Array di oggetti

- Filtro gli studenti con un totale di voti superiore a 70 utilizzando il metodo filter. (Creo una nuova Array) e stampo in console

- Utilizzo il metodo "forEach" sull'array "studentsAbove70" per iterare attraverso ogni studente e per ciascuno di essi:

  - Utilizzo il metodo "toUpperCase" sulla proprietà "name" per convertire il nome degli studenti in maiuscolo e stampo in console

- Filtro gli studenti con un totale di voti superiore a 70 e un ID superiore a 120 utilizzando il metodo filter. (Creo una nuova Array) e stampo in console

  - Utilizzo il metodo "forEach" sull'array "studentsAbove70IdAbove120" per iterare attraverso ogni studente e per ciascuno di essi:

  - Utilizzo il metodo "toUpperCase" sulla proprietà "name" per convertire il nome degli studenti in maiuscolo e stampo in console

- FINE
