document.addEventListener('DOMContentLoaded', function () {

	
// All the individual Sticker information
	const newSticker = [
		{
			stickerHeader: 'Rød jakke',
			stickerImg: 'assets/catalog-img/red-jacket-back.webp',
			stickerText: 'Her er litt tekst om produktet som selger. slogan. kort info.',
			stickerAttribute: 'red-jacket',
		},
		{
			stickerHeader: 'Blå jakke',
			stickerImg: 'assets/catalog-img/blue-jacket.webp',
			stickerText: '"Guttefarge"',
			stickerAttribute: 'blue-jacket',
		},
		{
			stickerHeader: 'Gul jakke',
			stickerImg: 'https://www.xxl.no/filespin/a171c26f735646babecb15377ba91e64?resize=750,750&quality=75&bgcolor=efefef',
			stickerText: 'Her ds. slogan. kort info.',
			stickerAttribute: 'yellow-jacket',
		},
		{
			stickerHeader: 'Orange jakke',
			stickerImg: 'assets/catalog-img/blue-jacket.webp',
			stickerText: 'Oransje er spicy da',
			stickerAttribute: 'orange-jacket',
		},
		{
			stickerHeader: 'Rosa jakke',
			stickerImg: 'assets/catalog-img/blue-jacket.webp',
			stickerText: 'Jentete ass',
			stickerAttribute: 'pink-jacket',
		},
	];


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



// All the product-page information
	const newProductPages = [
		{
			 productHeader: 'Rød Jakke',
			 stickerImg: 'assets/catalog-img/red-jacket-back.webp',
			 productTextContent: 'Her kan du skrsadgawrgW1111',
			 productAttribute: 'red-jacket',
			 detailsContent: 'Her k21462uy4435',
			 buyContent: 'Produktet koster 2500kr',
			 historyContent: 'pleide å koste 1200',
			 productPicture1:'assets/catalog-img/red-jacket-back.webp',
			 productPicture2:'assets/catalog-img/red-jacket-front.webp',
			 productPicture3:'assets/catalog-img/red-jacket-static.webp',
		},
		{
			 productHeader: 'Blå jakke',
			 stickerImg: 'assets/catalog-img/blue-jacket.webp',
			 productTextContent: 'Her kan du skrive masse tekst. owbeg2222',
			 productAttribute: 'blue-jacket',
			 detailsContent: 'Her kan du skrive masse tekst. owbeg2222',
			 buyContent: 'Produktet koster 2000kr',
			 historyContent: 'pleide å koste 1500',
			 productPicture1:'assets/catalog-img/blue-jacket.webp',
			 productPicture2:'assets/catalog-img/blue-jacket-back.webp',
			 productPicture3:'assets/catalog-img/blue-jacket-smile.webp',
		},
		{
			productHeader: 'Gul Jakke',
			stickerImg: 'https://www.xxl.no/filespin/4cbae4df5a974d75875733e80c185b9a?resize=750,750&quality=75&bgcolor=efefef',
			productTextContent: 'Her kan du skrive masse tekst. owbeg2222',
			productAttribute: 'yellow-jacket',
			detailsContent: 'Her kan du skrive masse tekst. owbeg2222',
			buyContent: 'Produktet koster 2000kr',
			historyContent: 'pleide å koste 1500',
			productPicture1:'https://www.xxl.no/filespin/4cbae4df5a974d75875733e80c185b9a?resize=750,750&quality=75&bgcolor=efefef',
			productPicture2:'https://www.xxl.no/filespin/8860a0cfa9aa45399c92ab359476bd41?resize=750,750&quality=75&bgcolor=efefef',
			productPicture3:'https://www.xxl.no/filespin/e16bdb0821eb4b11afdd73e9c4c06c75?resize=750,750&quality=75&bgcolor=efefef',
		},
		{
			productHeader: 'oransje jakke',
			stickerImg: 'assets/catalog-img/blue-jacket.webp',
			productTextContent: 'Her kan du skrive masse tekst. owbeg2222',
			productAttribute: 'orange-jacket',
			detailsContent: 'Her kan du skrive masse tekst. owbeg2222',
			buyContent: 'Produktet koster 2000kr',
			historyContent: 'pleide å koste 1500',
			productPicture1:'assets/catalog-img/orange-jacket-front.jpg',
			productPicture2:'assets/catalog-img/orange-jacket-back.jpeg',
			productPicture3:'assets/catalog-img/blue-jacket-smile.webp',
		},
		{
			productHeader: 'Rosa jakke',
			stickerImg: 'assets/catalog-img/blue-jacket.webp',
			productTextContent: 'Her kan du skrive masse tekst. owbeg2222',
			productAttribute: 'pink-jacket',
			detailsContent: 'Her kan du skrive masse tekst. owbeg2222',
			buyContent: 'Produktet koster 2000kr',
			historyContent: 'pleide å koste 1500',
			productPicture1:'assets/catalog-img/blue-jacket.webp',
			productPicture2:'assets/catalog-img/blue-jacket-back.webp',
			productPicture3:'assets/catalog-img/blue-jacket-smile.webp',
		},
	];

// Creating the productpage and it's functions/logic within.
	const mainStickers = document.querySelectorAll('.main-sticker');
	function filterStickers(event) {
			const pageToShow = event.currentTarget.dataset.stickerFilter;
		
			newProductPages.forEach(newProductPage => {
				if (pageToShow === newProductPage.productAttribute) {

			// Product-page container
					const productPage = document.createElement('div');
					productPage.classList.add('product-page');
					productPage.setAttribute('data-catalog-page', newProductPage.productAttribute);

			// Exit-button
					const exitButton = document.createElement('button');
					exitButton.classList.add('exit-button__grid');
					exitButton.textContent = 'X';
					productPage.appendChild(exitButton);

			// Logo-container
					const logoContainer = document.createElement('div');
					logoContainer.classList.add('product-page__header', 'show', 'offset--8', 'column--2', 'offset-small--5', 'column-small--2');
					const logoImg = document.createElement('img');
					logoImg.setAttribute('src', newProductPage.stickerImg);
					logoContainer.appendChild(logoImg);
					productPage.appendChild(logoContainer);

			// Slideshow-container
					const slideshowContainer = document.createElement('div');
					slideshowContainer.classList.add('product-page__slideshow', 'offset-small--1', 'offset--1', 'column--6');
			
			// Picture-container
					const pictures = document.createElement('div');
					pictures.classList.add('slideshow__pictures');
					slideshowContainer.appendChild(pictures);

			// Image 1
					const img1 = document.createElement('img');
					img1.classList.add('productPictures');
					img1.setAttribute('src', newProductPage.productPicture1);
					pictures.appendChild(img1);

			// Image 2
					const img2 = document.createElement('img');
					img2.classList.add('productPictures');
					img2.setAttribute('src', newProductPage.productPicture2);
					pictures.appendChild(img2);

			// Image 3
					const img3 = document.createElement('img');
					img3.classList.add('productPictures');
					img3.setAttribute('src', newProductPage.productPicture3);
					pictures.appendChild(img3);

			// "Previous" button in slideshow
					const prevButton = document.createElement('div');
					prevButton.classList.add('prev-button');
					slideshowContainer.appendChild(prevButton);
				// Text for Previous button
					const prevButtonImg = document.createElement('img');
					prevButtonImg.setAttribute('src', 'assets/pictures/arrow-left.svg');
					prevButton.appendChild(prevButtonImg)

			// "Next" button in slideshow
					const nextButton = document.createElement('div');
					nextButton.classList.add('next-button');
					slideshowContainer.appendChild(nextButton);
				// Text for Next button
					const nextButtonImg = document.createElement('img');
					nextButtonImg.setAttribute('src', 'assets/pictures/arrow-right.svg')
					nextButton.appendChild(nextButtonImg)

			// Adding the slideshow page	
					productPage.appendChild(slideshowContainer);
					
			// Product information container
					const infoContainer = document.createElement('div');
					infoContainer.classList.add('product-page__info-container', 'offset-small--1', 'offset--7', 'column--4');
					productPage.appendChild(infoContainer);

			// Navigation container within the product information container.
					const infoNav = document.createElement('div');
					infoNav.classList.add('product-page__nav', 'column--12');
					infoContainer.appendChild(infoNav);

			// Details-button
					const detailButton = document.createElement('div');
					detailButton.setAttribute('data-product-spec', 'details');
					detailButton.classList.add('column--4', 'column-small--4', 'product-page__nav-button');
					detailButton.textContent = 'Detaljer';
					infoNav.appendChild(detailButton);

			// Buy button
					const buyButton = document.createElement('div');
					buyButton.setAttribute('data-product-spec', 'buy');
					buyButton.classList.add('column--4', 'column-small--4', 'product-page__nav-button');
					buyButton.textContent = 'Kjøp';
					infoNav.appendChild(buyButton);

			// History-button	
					const historyButton = document.createElement('div');
					historyButton.setAttribute('data-product-spec', 'history');
					historyButton.classList.add('column--4', 'column-small--4', 'product-page__nav-button');
					historyButton.textContent = 'Historikk';
					infoNav.appendChild(historyButton);
			// Details-info
					const detailsContainer = document.createElement('div');
					detailsContainer.setAttribute('data-product-info', 'details');
					detailsContainer.classList.add('product-page__info', 'show', 'column--12');
					detailsContainer.textContent = newProductPage.detailsContent;
					infoContainer.appendChild(detailsContainer);

			// Buy-info
					const buyContainer = document.createElement('div');
					buyContainer.setAttribute('data-product-info', 'buy');
					buyContainer.classList.add('product-page__info', 'column--12');
					buyContainer.textContent = newProductPage.buyContent;
					infoContainer.appendChild(buyContainer);

			// History-info
					const historyContainer = document.createElement('div');
					historyContainer.setAttribute('data-product-info', 'history');
					historyContainer.classList.add('product-page__info', 'column--12');
					historyContainer.textContent = newProductPage.historyContent;
					infoContainer.appendChild(historyContainer);
					
			// Adding the total page to the document
					document.body.appendChild(productPage);
				}
				
			});

			
	// Details - Buy - History buttons logic, adding/removing "show" class to show/hide info.
			const productPageButtons = document.querySelectorAll('.product-page__nav-button');
			const productOptions = document.querySelectorAll('.product-page__info');

			function showInfo(event) {
				productOptions.forEach(option => {
					option.classList.remove('show');
				});
				const currentInfoButton = event.currentTarget;
				const currentInfoButtonData = currentInfoButton.dataset.productSpec;

				productOptions.forEach(option => {
					const optionInfo = option.dataset.productInfo;

					if (optionInfo === currentInfoButtonData) {
							option.classList.add('show');
					}
				});
			}

			productPageButtons.forEach((infoButton) => {
				infoButton.addEventListener('click', showInfo);
			});


	// Exit button deletes the whole product-page.
			const exitButtonsGrid = document.querySelectorAll('.exit-button__grid');

			function closeGrid() {
				const productPages = document.querySelectorAll('.product-page');

				productPages.forEach(function (productPage) {
					productPage.remove();
				});
			}
			
			exitButtonsGrid.forEach(function (exitButtonGrid) {
				exitButtonGrid.addEventListener('click', closeGrid);
			});

	// Delete product-page with escape button
			document.addEventListener('keydown', function (event) {
				if (event.key === 'Escape') {
					closeGrid();
				}
			});



	// Slideshow
			let currentSlideIndex = 0;
			const slides = document.querySelectorAll('.productPictures');
			const prevButton = document.querySelector('.prev-button');
			const nextButton = document.querySelector('.next-button');

			function showSlide(index) {
				slides.forEach((slide, i) => {
					if (i === index) {
						slide.style.display = 'block';
						let currentIndex = index +1;
					} else {
						slide.style.display = 'none';
					}
				});
			}

			function nextSlide() {
				currentSlideIndex = (currentSlideIndex + 1) % slides.length;
				showSlide(currentSlideIndex);
			}

			function prevSlide() {
				currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
				showSlide(currentSlideIndex);
			}

			showSlide(currentSlideIndex);

			prevButton.addEventListener('click', prevSlide);
			nextButton.addEventListener('click', nextSlide);


	};

// Event listener for creating the spesific productpage for each spesific sticker.
	mainStickers.forEach(function(mainSticker) {
	mainSticker.addEventListener('click', filterStickers);
	});
	


// Search-bar hide and show icon+ log whats written by enter og click on search button

	const catalogInput = document.querySelector('.catalog__input-bar input');
	const catalogImg = document.querySelector('.catalog__input-bar img');
	const inputSearchButton = document.querySelector('.catalog__input-button');

	// Hide search icon
	catalogInput.addEventListener('focus', function() {
			catalogImg.style.display = 'none';
	});
	// Show Search icon
	catalogInput.addEventListener('blur', function() {
			catalogImg.style.display = 'block';
	});
	// Log text by keydown Enter
	catalogInput.addEventListener('keydown', function(event) {
		if (event.key === 'Enter') {
			console.log(catalogInput.value);
		}
	})
	// Log text by clicking search-button
	inputSearchButton.addEventListener('click', function() {
		console.log(catalogInput.value)		
	})


	const exitButtonsFlex = document.querySelectorAll('.exit-button-flex');

	function closeDropdown(event) {
		currentExitButton = event.currentTarget;
		currentParent = currentExitButton.parentElement;
		currentParent.classList.remove('show')
		event.stopPropagation();
	}

	exitButtonsFlex.forEach(function(exitButtonFlex) {
		exitButtonFlex.addEventListener('click', closeDropdown)
	})




})