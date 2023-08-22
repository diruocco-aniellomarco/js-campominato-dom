const button = document.getElementById('bottone_html');


const grid = document.getElementById('griglia');

let selectBarr = document.getElementById('select').value;
    
let numCel = 0;

const bombe = [];

let punteggio = 0

button.addEventListener ('click' , function(){
     
        grid.innerHTML = '';
        bombe.splice(0, bombe.length);
        punteggio = 0;

        selectBarr = document.getElementById('select').value;
        
        if (selectBarr == 0) {
            numCel = 0;
            alert("Attenzione, inserire livello di difficoltà");            
        } else if (selectBarr == 1) {
            numCel = 100;
        } else if (selectBarr == 2) {
            numCel = 81;
        } else {
            numCel = 49;
        }
        if (selectBarr != 0) {
            generaBombe(numCel);
            console.log('Le bombe sono: ' + bombe);
            console.log(bombe);
            
            generaCell(numCel, selectBarr);
        }
    
})

function generaCell () {
    for (let index= 1; index <= numCel; index++) {
        
        const cell = document.createElement('div');
        cell.innerText = index;
        cell.classList.add('cell');

        if (selectBarr == 1) {
            cell.classList.add('cell10');
        } else if (selectBarr == 2) {
            cell.classList.add('cell9');
        } else {
            cell.classList.add('cell7');
        }
        
            cell.addEventListener ('click', function() {

                if ( (numCel - punteggio) == bombe.length + 1){
                    alert('COMPLIMENTI HAI VINTO CON UN PUNTEGGIO DI: ' + punteggio);
                }
                
                if (bombe.includes(index)) {
                    cell.classList.add('red');
                    console.log('BOMBA! casella numero: ' + index);
                    alert('FINE PARTITA');
                    alert('IL TUO PUNTEGGIO: ' + punteggio);
                    
                } else {

                cell.classList.add('skyblue');
                console.log('cella numero: ' + index);
                punteggio++;
                
                }
                // console.log('punteggio: ' + punteggio);
            })
        
        grid.append(cell);
    }
}


function generaBombe (numCel) {
    let numBombe = 1;
    while (numBombe <= 16) {
        let nRandom = numRandom (1, numCel);
        if ( !bombe.includes(nRandom)) {
            numBombe++;
            bombe.push(nRandom);
        }
    }
    return bombe;
    
}

function numRandom (min, max) {
    let numeroRandom = Math.floor(Math.random() * (max - min)) + min;
    return numeroRandom;
}

