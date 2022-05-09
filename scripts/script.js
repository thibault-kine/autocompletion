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

const resultsDiv = document.getElementById('results');

fetch('../results.json')
.then((res) => res.json())
.then(function(data) {

    console.log(data);

    data.forEach(function(result) {

        let card = document.createElement('div');
        card.className = 'card';

        let nomImg = document.createElement('img');
        nomImg.src = "../style/img/icons/pin.png";
        nomImg.className = 'icon';
        let nom = document.createElement('h1');
        nom.className = 'country-name';
        nom.innerHTML = result.nom;

        let capitalImg = document.createElement('img');
        capitalImg.src = "../style/img/icons/city-hall.png";
        capitalImg.className = 'icon'
        let capitale = document.createElement('h3');
        capitale.className = 'country-capital';
        capitale.innerHTML = result.capitale;

        let continentImg = document.createElement('img');
        continentImg.src = "../style/img/icons/globe.png";
        continentImg.className = 'icon'
        let continent = document.createElement('p');
        continent.className = 'country-continent';
        continent.innerHTML = result.continent;

        let regionImg = document.createElement('img');
        regionImg.src = "../style/img/icons/region.png";
        regionImg.className = 'icon'
        let region = document.createElement('p');
        region.className = 'country-region';
        region.innerHTML = result.region;

        nom.prepend(nomImg);
        capitale.prepend(capitalImg);
        continent.prepend(continentImg);
        region.prepend(regionImg);
        card.append(nom, capitale, continent, region);

        results.append(card);
    });
})
.catch((err) => console.log(err));

// resultsData.forEach(function(result) {
    
//     let card = document.createElement('div');
//     card.className = 'card';

//     let nomImg = document.createElement('img');
//     nomImg.src = "../style/img/icons/pin.png";
//     nomImg.className = 'icon';
//     let nom = document.createElement('h1');
//     nom.className = 'country-name';
//     nom.innerHTML = result.nom;

//     let capitalImg = document.createElement('img');
//     capitalImg.src = "../style/img/icons/city-hall.png";
//     capitalImg.className = 'icon'
//     let capitale = document.createElement('h3');
//     capitale.className = 'country-capital';
//     capitale.innerHTML = result.capitale;

//     let continentImg = document.createElement('img');
//     continentImg.src = "../style/img/icons/globe.png";
//     continentImg.className = 'icon'
//     let continent = document.createElement('p');
//     continent.className = 'country-continent';
//     continent.innerHTML = result.continent;

//     let regionImg = document.createElement('img');
//     regionImg.src = "../style/img/icons/region.png";
//     regionImg.className = 'icon'
//     let region = document.createElement('p');
//     region.className = 'country-region';
//     region.innerHTML = result.region;

//     nom.prepend(nomImg);
//     capitale.prepend(capitalImg);
//     continent.prepend(continentImg);
//     region.prepend(regionImg);
//     card.append(nom, capitale, continent, region);

//     results.append(card);
// });


});