// Alumne A - feature-ui-logic - Dongyi Chen
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


// Control de Rondes 

    rondesFetes++; // comptem 1 intent +
    rondesRestantsSpan.textContent = MAX_INTENTS - rondesFetes; // actualitzem el número que veu el jugador a la pantalla (restem 5 - 1)


    logTerminal('Intent #' + rondesFetes + ': [ ' + intent.join(' | ') + ' ]'); // escrivim a la terminal quins números ha posat


    if (typeof avaluarIntent !== 'undefined') { // mirem si el codi de l'Estudiant B ja està carregat
        const resultat = avaluarIntent(intent); 


        logTerminal('Pistes: [ ' + resultat.pistes.join(' | ') + ' ]'); // mostrem les pistes que ens ha donat l'Estudiant B fent un join


        if (resultat.guanyat) { // si les 4 pistes són '1', ho ha encertat tot
            logTerminal('ACCÉS CONCEDIT — Has endevinat el codi secret!', 'success'); // missatge que ha guanyat
            boto.disabled = true; // bloquejem el botó perquè no es pugui seguir jugant
            boto.style.opacity = '0.4'; // el posem mig transparent el boto (qüestions d'estil que molen)
            selects.forEach(s => s.disabled = true); // bloquejem també els desplegables
        } else if (rondesFetes >= MAX_INTENTS) { // si ha gastat l'últim intent i no ha guanyat llavors
            logTerminal('SISTEMA BLOQUEJAT — Has esgotat els intents.', 'error'); // missatge de derrota
            boto.disabled = true; // mateix bloqueig que quan guanya
            boto.style.opacity = '0.4';
            selects.forEach(s => s.disabled = true);
        }
    } else { // si l'altre encara no ha pujat el seu codi posem el següent:
        logTerminal('[AVÍS] Motor de joc no disponible encara. Falta feature-game-engine', 'error'); 
    }
});


logTerminal('Selects inicialitzats. Introdueix el teu codi i prem executar.'); // primer missatge que apareix quan s'obre el joc


// ALumne B - feature-game-engine - Víctor Gil

// generacion del codigo secreto
let codiSecret = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)
];

console.log('Codi secret (debug):', codiSecret);     // pruebas para ver el console del navegador 


// validar codigo
const avaluarIntent = (intent) => {                  // esta función recibe los 4 números del jugador y devuelve las pistas
    const pistes = ['×', '×', '×', '×'];             // comienza con todos "mal" / sin pistas
    const secretUsat = [false, false, false, false]; // no repetir numeros del codigo secreto
    const intentUsat = [false, false, false, false]; // no repetir numeros del intento


    // prueba 1: busca numeros que estan bien colocados
    for (let i = 0; i < 4; i++) {                   // recorre las 4 posiciones
        if (intent[i] === codiSecret[i]) {          // si el número y la posición coinciden...
            pistes[i] = '1';                        // ponemos '1' en esa posición
            secretUsat[i] = true;                   // marcamos que ese número del secreto ya se ha usado
            intentUsat[i] = true;                   // marcamos que ese número del intento ya se ha usado
        }
    }

    // prueba 2: busca numeros que existen pero estan mal colocados
    for (let i = 0; i < 4; i++) {                       // recorre las 4 posiciones del intento
        if (intentUsat[i] === false) {                  // si esta posicion no se uso en la prueba 1
            for (let j = 0; j < 4; j++) {               // recorre las 4 posiciones del codigo secreto
                if (secretUsat[j] === false) {          // si este numero del secreto no se ha usado
                    if (intent[i] === codiSecret[j]) {  // si el numero existe en otra posicion
                        pistes[i] = 'Ø';                // marca como mal colocado
                        secretUsat[j] = true;           // marca como usado
                        j = 4;                          // salir del bucle interno
                    }
                }
            }
        }
    }

    const guanyat = pistes.every(p => p === '1');   // si todas las pistas son '1', el jugador ha ganado

    return { pistes, guanyat };                     // devuelve las pistas y si ha ganado o no
};
