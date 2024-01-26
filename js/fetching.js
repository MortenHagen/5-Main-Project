let countryName = "";
let resultArray = [];
let category = "";

const apiButtons = document.querySelectorAll('.api-button');

apiButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        category = e.target.textContent.trim();
        console.log(category);
        getData();
    });
});

function getData() {
    const url = `https://swapi.dev/api/${category.toLowerCase()}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => renderDatas(data))
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function renderDatas(data) {
	console.log(data);
	resultArray = [];
    data.results.forEach(resultObject => {

		if (category === "Films") {			
			resultArray.push({
				name: resultObject.title,
				id: resultObject.episode_id,
				opening: resultObject.opening_crawl,
			});
		}		
		if (category === "People") {			
			resultArray.push({
				name: resultObject.name,
			});
		}
		if (category === "Planets") {				
			resultArray.push({
				name: resultObject.name,
			});
		}		
		if (category === "Vehicles") {			
			resultArray.push({
				name: resultObject.name,
			});
		}
    });
    console.log(resultArray);
    displayResults();
}

let inputLetters = document.getElementById("searchInput")
	inputLetters.addEventListener('input', () => {
		searchValue = document.getElementById('searchInput').value;
		getData();
	});

function displayResults() {
    const resultContainer = document.querySelector('.result-container');
    resultContainer.innerHTML = '';

    const searchValue = document.getElementById('searchInput').value;
    const searchButton = document.getElementById('search-button')
	
    const filteredObjects = resultArray.filter(result =>
        result.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    filteredObjects.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');

        if (category === 'Films') {
            resultItem.innerHTML = `
                <p>Title: ${result.name}</p>
                <p>ID: ${result.id}</p>
                <p>Opening Crawl: ${result.opening}</p>
            `;
        } else if (category === 'People' || category === 'Planets' || category === 'Vehicles') {
            resultItem.innerHTML = `
                <p>Name: ${result.name}</p>
            `;
        }

        resultContainer.appendChild(resultItem);
    });
}

