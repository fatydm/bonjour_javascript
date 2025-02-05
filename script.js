const newName = prompt('Entrez votre prénom :');

// Étape 1 : premier code
let message = 'Bonjour';
let firstName = 'Aïssata !';

message += ' ' + firstName;


// Étape 3 : dans une fonction + // Étape 4 : avec un second paramètre
function sayHello(firstName, hour) {
    if (hour >= 18) {
        return ('Bonsoir ' + firstName + ' !');
    }
}

document.querySelector('h1').innerText = sayHello(newName, 18);
