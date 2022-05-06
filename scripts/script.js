document.addEventListener('DOMContentLoaded', function() {

let searchValue = "";


// GESTION DES INPUTS 
let fields = Array.from(document.getElementsByClassName('field'));
fields.forEach(function(field) {
    
    var input = field.getElementsByTagName('input').item(0);
    var resetBtn = field.getElementsByClassName('reset-btn').item(0);
    var searchBtn = field.getElementsByClassName('search-btn').item(0);

    if(searchValue != "") {
        searchBtn.addEventListener('click', function() {
            input.value = searchValue;
        });

        field.addEventListener('keyup', function(e) {
            if(e.keyCode == 13) {
                searchBtn.click();
            }
        });
    }

    resetBtn.addEventListener('click', function() {
        input.value = "";
    });
});



// GESTION DE LA RECHERCHE
var formData = new FormData();
formData.append('search', searchValue);

const init = {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'text/html' }),
    mode: 'no-cors',
    cache: 'default'
};

fetch('../app/recherche.php', init)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

 
console.log(formData);

});