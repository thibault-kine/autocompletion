document.addEventListener('DOMContentLoaded', function() {
    
    // function search(str) {
        
    //     let results = [];
    //     const val = str.toLowerCase();
        
    //     fetch('../results.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         allData = data.nom;
    
    //         for(i = 0; i < allData.length; i++) {
        
    //             if(allData[i].toLowerCase().includes(val)) {
    //                 results.push(allData[i]);
    //             }
    //         }
    //     })
    //     .catch(error => console.error(error));
    
    //     console.log(results);
    //     return results;
    // }
    
    // function searchHandler(e) {
    
    //     const inputVal = e.target.value;
    //     let results = [];
    
    //     if(inputVal.length > 0) { results = search(inputVal); }
    
    //     showSuggestions(results, inputVal);
    // }
    
    // function showSuggestions(results, inputVal) {
    
    //     suggestions.innerHTML = '';
    
    //     if (results.length > 0) {
    //         for (i = 0; i < results.length; i++) {
    //             let item = results[i];
    //             // Highlights only the first match
    //             // TODO: highlight all matches
    //             const match = item.match(new RegExp(inputVal, 'i'));
    //             item = item.replace(match[0], `<strong>${match[0]}</strong>`);
    //             suggestions.innerHTML += `<li>${item}</li>`;
    //         }
    //         suggestions.classList.add('has-suggestions');
    //     } else {
    //         results = [];
    //         suggestions.innerHTML = '';
    //         suggestions.classList.remove('has-suggestions');
    //     }
    // }
    
    // function useSuggestion(e) {
    //     input.value = e.target.innerText;
    //     input.focus();
    //     suggestions.innerHTML = '';
    //     suggestions.classList.remove('has-suggestions');
    // }

let searchValue = "";
let allData = [];



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
    }

    resetBtn.addEventListener('click', function() {
        input.value = "";
    });
});



// GESTION DE LA RECHERCHE

let resultsDiv = document.querySelector('#results');

fetch('../results.json')
.then((res) => res.json())
.then(function(data) {
    
    data.forEach(function(result) {
        
        let card = document.createElement('div');
        card.className = 'card';
        
        let flag = document.createElement('img');
        flag.src = "../style/img/flags/" + result.imgDir + ".png";
        flag.className = 'flag';
        
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


        capitale.prepend(capitalImg);
        continent.prepend(continentImg);
        region.prepend(regionImg);
        card.append(flag, nom, capitale, continent, region);

        resultsDiv.append(card);
    });
})
.catch((err) => console.log(err));


});