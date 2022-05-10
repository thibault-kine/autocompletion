document.addEventListener('DOMContentLoaded', () => {

let fields = Array.from(document.getElementsByClassName('field'));
fields.forEach(field => {
    
    const input = field.getElementsByClassName('search-bar').item(0);
    const suggestions = field.querySelector('.suggestions ul');

    let allData = [];

    // récupère les noms du fichier 'data.json'
    fetch('../data.json')
    .then((res) => res.json())
    .then(function(data) {
        data.forEach(function(item) {
            item = item.nom;
            allData.push(item);
        });
        
        console.log(allData);
        
            function search(str) {
                let results = [];
                const val = str.toLowerCase();
            
                for (i = 0; i < allData.length; i++) {
                    if(allData[i].toLowerCase().includes(val)) {
                        results.push(allData[i]);
                    }
                }
            
                return results;
            }
            
            function searchHandler(e) {
                const inputVal = e.currentTarget.value;
                let results = [];
                if (inputVal.length > 0) {
                    results = search(inputVal);
                }
                showSuggestions(results, inputVal);
            }
            
            function showSuggestions(results, inputVal) {
                
                suggestions.innerHTML = '';
            
                if (results.length > 0) {
                    for (i = 0; i < results.length; i++) {
                        let item = results[i];
                        // Highlights only the first match
                        // TODO: highlight all matches
                        const match = item.match(new RegExp(inputVal, 'i'));
                        item = item.replace(match[0], `<strong>${match[0]}</strong>`);
                        suggestions.innerHTML += `<li>${item}</li>`;
                    }
                    suggestions.classList.add('has-suggestions');
                } else {
                    results = [];
                    suggestions.innerHTML = '';
                    suggestions.classList.remove('has-suggestions');
                }
            }
            
            function useSuggestion(e) {
                input.value = e.target.innerText;
                input.focus();
                suggestions.innerHTML = '';
                suggestions.classList.remove('has-suggestions');
            }
            
            input.addEventListener('keyup', searchHandler);
            suggestions.addEventListener('click', useSuggestion);
        });
    })
    .catch(function(error) { console.log(error); });


})