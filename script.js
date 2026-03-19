// Alumne A - feature-ui-logic
const MAX_INTENTS = 5;
let rondesFetes = 0;


// 1. Generació dels selects
const selects = document.querySelectorAll('.code-input');


selects.forEach(select => {
    for (let i = 0; i <= 9; i++) { // repetim del 0 al 9
        const opcio = document.createElement('option');
        opcio.value = i; // el valor que guardarà quan el seleccionin
        opcio.textContent = i; // el número que veurà l'usuari a la pantalla
        select.appendChild(opcio); // posem l'opció dins del desplegable
    }
});

// Funció logTerminal(missatge, tipus)

const logTerminal = (missatge, tipus = 'normal') => { // aquesta funció escriu una línia nova a la terminal, si no diem el tipus posa normal
    const terminal = document.getElementById('terminal');
    const linia = document.createElement('p'); // creem un paràgraf buit que serà la nova línia
    linia.classList.add('line'); // li posem l'estil del terminal (del css) 


    if (tipus === 'error') { // si ens passen 'error'
        linia.classList.add('error'); // li posem color vermell en el CSS
        linia.textContent = '[ERROR] > ' + missatge; // afegim el missatge d'error
    } else if (tipus === 'success') { // si ens passen success
        linia.classList.add('success'); // li posem fons verd del CSS
        linia.textContent = '[OK] > ' + missatge; // afegim el missatge d'èxit
    } else { // si no és ni error ni èxit
        linia.textContent = '[INPUT] > ' + missatge; // és un missatge normal
    }


    terminal.appendChild(linia); // enganxem la línia al final de la terminal
    terminal.scrollTop = terminal.scrollHeight; // fem que la terminal baixi sol cap avall
};

// Gestor d'Esdeveniments 

const boto = document.getElementById('btn-enviar'); // agafem el botó EXECUTAR CODI del html
const rondesRestantsSpan = document.getElementById('rondes-restants'); // agafem el número de rondes que surt a la pantalla per poder canviar-lo


boto.addEventListener('click', () => { // tot el que hi ha dins d'aquí s'executa quan el jugador prem el botó


    if (rondesFetes >= MAX_INTENTS) { // si el jugador ha gastat tots els intents
        logTerminal('No queden rondes. Refresca la pàgina per tornar a jugar.', 'error'); // retorna aquest missatge
        return;
    }


    const intent = []; // llista buida on posarem els 4 números que ha triat el jugador
    selects.forEach(s => intent.push(parseInt(s.value))); // llegim cada desplegable i afegim el seu número a la llista

    
