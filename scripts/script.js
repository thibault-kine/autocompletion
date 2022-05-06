document.addEventListener('DOMContentLoaded', function() {


// GESTION DES INPUTS 
let fields = Array.from(document.getElementsByClassName('field'));
fields.forEach(function(field) {
    
    var input = field.getElementsByTagName('input').item(0);
    var resetBtn = field.getElementsByClassName('reset-btn').item(0);
    
    input.addEventListener('focus', function() {
        
        input.addEventListener('keyup', function() {
            // récupération de la valeur de la barre de recherche
            console.log(input.value);
        });
    });

    resetBtn.addEventListener('click', function() {
        input.value = "";
    });
});


// GESTION DE LA RECHERCHE
const init = {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    mode: 'no-cors',
    cache: 'default'
};

fetch('../server.php', init)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

 
});