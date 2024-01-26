let countryName = "";
let resultArray = [];
let stickerContainer;
let category = "";

const apiButtons = document.querySelectorAll('.api-button');

apiButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        category = e.target.textContent.trim();
        console.log(category);
		resultArray = []
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
	if (stickerContainer) {
        stickerContainer.remove();
    }
    data.results.forEach(resultObject => {

        if (category === "Films") {
            resultArray.push({
                name: resultObject.title,
                id: resultObject.episode_id,
                opening: resultObject.opening_crawl,
            });
        }
        if (category === "People" || category === "Planets" || category === "Vehicles") {
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
    getData();
});

function displayResults() {
    const resultContainer = document.querySelector('.result-container');
    resultContainer.innerHTML = '';

    const searchValue = document.getElementById('searchInput').value;

    const filteredObjects = resultArray.filter(result =>
        result.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    // All the individual Sticker information
    const newSticker = filteredObjects.map(result => ({
        stickerHeader: result.name || result.title,
        stickerText: result.id, // Assuming id is defined for all types
    }));

    const stickerContainer = document.createElement('div');
    stickerContainer.classList.add('catalog__sticker-container', 'column--12', 'column-small--12');

    // Creating the stickers
    newSticker.forEach((sticker) => {
        const mainSticker = document.createElement('div');
        mainSticker.setAttribute('data-sticker-filter', sticker.stickerAttribute);
        mainSticker.classList.add('main-sticker', 'column--4', 'offset-small--1');

        const mainStickerImg = document.createElement('div');
        mainStickerImg.classList.add('main-sticker__img');

        const mainStickerImg1 = document.createElement('div');
        mainStickerImg1.classList.add('main-sticker__img1');

        const img = document.createElement('img');
        img.setAttribute('src', sticker.stickerImg);

        mainStickerImg1.appendChild(img);
        mainStickerImg.appendChild(mainStickerImg1);

        const textContainer = document.createElement('div');
        textContainer.classList.add('main-sticker__text-container');

        const spanElement = document.createElement('span');
        spanElement.textContent = sticker.stickerHeader;
        textContainer.appendChild(spanElement);

        const pElement = document.createElement('p');
        pElement.textContent = sticker.stickerText;
        textContainer.appendChild(pElement);

        mainSticker.appendChild(mainStickerImg);
        mainSticker.appendChild(textContainer);

        stickerContainer.appendChild(mainSticker);
    });

    document.body.appendChild(stickerContainer);

}
