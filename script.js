

// --------------------------------------------
// ALumne B - feature-game-engine - Víctor Gil
//-----------------------------------------------

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