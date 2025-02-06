const newName = prompt('Entrez votre prénom : ');

// Étape 2 : premier code
let message = 'Bonjour';
let firstName = 'Beyonce';

message = `Bonjour ${firstName} !`;
console.log(message);

// Étape 3 : dans une fonction + // Étape 4 : avec un second paramètre
function sayHello(firstName, hour) {
    let message = `Bonjour ${firstName} !`
    
    if (hour >= 18) {
        message = `Bonsoir ${firstName} !`;
    } else {
        message = `Bonjour ${firstName} !`;
    }
    // console.log(message); // Étape 6 : dans le HTML
    document.querySelector('h1').innerText = message;
}

sayHello(newName, 20);




