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

- Filtro gli studenti con un totale di voti superiore a 70 utilizzando utilizzando il metodo filter. (Creo una nuova Array)

  - Utilizzo il metodo map per creare una nuova array in cui trasformo il nome degli studenti in maiuscolo e mantengo gli altri dati
  - Stampo in console

- Filtro gli studenti con un totale di voti superiore a 70 e un ID superiore a 120 utilizzando il metodo filter. (Creo una nuova Array) e stampo in console

  - Utilizzo il metodo map per creare una nuova array in cui trasformo il nome degli studenti in maiuscolo e mantengo gli altri dati
  - Stampo in console

- FINE

<br>
<br>

# SNACK 3

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e weight.
Stampare in console la bici con peso minore utilizzando il destructuring

<br>
<br>

- INIZIO
- Recupero l'elemento da DOM
- Creo un array di oggetti (con le info delle bici da corsa)
- Stampo l'array di oggetti in console
- Inizializzo una variabile con il primo oggetto dell'array
- Avvio un ciclo for per iterare atraverso gli oggetti dell'array
  - Utilizzo il destructuring per estrarre il nome e il peso della bici corrente
  - Confronto il peso della bici
    - Se il peso della bici corrente è inferiore, aggiorna la variabile
- Stampo in console
- Stampo in pagina
  - Creo una stringa con il risultato utilizzando template literal
  - Assegmo la stringa all'elemento del DOM recuperato precedentemente
- FINE

<br>
<br>

# SNACK 4

Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

<br>
<br>

- INIZIO
- Recupero gli elementi dal DOM
- Creo una funzione per generare numeri casuali (min - max)
- Creo Array di oggetti contenente le squadre di calcio
- Genero un ciclo forEach per iterare attraverso ogni squadra nell'array. Per ogni squadra, assegno un valore casuale per i punti fatti e i falli subiti. Utilizzando la funzione fata precedentemente.
- Stampo in console
- Creo un ciclo forEach, estraggo le proprietà e inserisco nella stringa
- Aggiorno il contenuto dell'elemento del DOM recuperato precedentemente
- Creo una nuova array utilizzando il metodo map (che contiene solo le proprietà nomi e falli subiti), utilizzando destructuring per estrarre le proprietà da ciascun oggetto squadra.
- Creo un ciclo forEach, estraggo le proprietà e inserisco nella stringa
- Aggiorno il contenuto dell'elemento del DOM recuperato precedentemente
- FINE
