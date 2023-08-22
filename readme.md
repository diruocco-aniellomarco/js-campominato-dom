**Consegna**
- Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
    - Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.

- In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

- La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.

**BONUS:**

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
---
*Consigli del giorno:*

- Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

Ad esempio:

Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

**Svolgimento:**
 - *Creazione bombe* 
    - creo un array vuoto dove inserirò le bombe ( 16 numeri random in un dato range)

    - per farlo genererò un numero casuale da 1 al numero di celle totali che andrò a generare

    - creerò un ciclo che inserirà i numeri random nell'array delle bombe ma solo se NON già presente nell'array.

 - *Si vince e si perde*
    - creerò una variabile per il punteggio e la inizializzerò a 0 (all'inizio l'utente avrà 0 punti)

    - se l'utente clicca su una cella e questa NON è nella lista delle bombe, la cella si colorerà di azzurro e verà aggiunto un +1 nel punteggio

    - se l'utente clicca su una cella e questa è nella lista delle bombe, l'utente avrà perso e verrà visualizzato il punteggio finale dell'utente

    - se il numero delle celle meno il numero delle celle cliccate è uguale alla lunghezza dell'array delle bombe + 1 (in modo tale che il messaggio venga visualizzato nel momento in cui l'ultima cella verrà cliccata), allora comparirà la scritta "hai vinto con un punteggio totale di: TOT ".