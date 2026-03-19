// ALumne B - feature-game-engine - Víctor Gil

// generacion de codigo secreto
let codiSecret = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)
];


// si ya existia un código guardado del navegador, lo usamos en lugar del nuevo
if (sessionStorage.getItem('codiSecret')) {
    codiSecret = sessionStorage.getItem('codiSecret').split(',').map(Number); // convierte el texto por ejemplo: "3,7,1,9" en array [3,7,1,9]
} else {
    sessionStorage.setItem('codiSecret', codiSecret.join(',')); // guarda el nuevo como texto "3,7,1,9" para que no cambie entre intentos
}


console.log('Codi secret (debug):', codiSecret); // pruebas para ver el console del navegador 