// Alumne A - feature-ui-logic
const MAX_INTENTS = 5;
let rondesFetes = 0;


// 1. Generació dels selects
const selects = document.querySelectorAll('.code-input');


selects.forEach(select => {
    for (let i = 0; i <= 9; i++) {
        const opcio = document.createElement('option');
        opcio.value = i;
        opcio.textContent = i;
        select.appendChild(opcio);
    }
});
