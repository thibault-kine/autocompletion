document.addEventListener('DOMContentLoaded', function() {

const resultDiv = document.querySelector('#result');

fetch('../results.json')
.then((res) => res.json())
.then(function(data) {

    data.forEach(function(result) {

        let card = document.createElement('div');
        card.className = 'big-card';

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

        let extLink = document.createElement('a');
        extLink.href = result.link;
        extLink.innerText = "Accéder à la page Wikipédia";
        let extLinkImg = document.createElement('img');
        extLinkImg.src = "../style/img/icons/link.png";
        extLinkImg.className = 'icon'
        extLink.prepend(extLinkImg);


        capitale.prepend(capitalImg);
        continent.prepend(continentImg);
        region.prepend(regionImg);
        card.append(flag, nom, capitale, continent, region, extLink);

        resultDiv.append(card);
    });
})
.catch(function(error) { 
    console.log(error);
});

});