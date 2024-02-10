

document.addEventListener("DOMContentLoaded", function() {

		const buttons = document.querySelectorAll('.blogg-menu button');
		const sections = document.querySelectorAll('[data-display]');
		const headerImg = document.querySelector('.header img');

		let philosophyArray = JSON.parse(localStorage.getItem('philosophyArray')) || [];
		let historyArray = JSON.parse(localStorage.getItem('historyArray')) || [];
		let dreamsArray = JSON.parse(localStorage.getItem('dreamsArray')) || [];
		let funArray = JSON.parse(localStorage.getItem('funArray')) || [];


	//Choosing the subject

		buttons.forEach(button => {
			button.addEventListener('click', showInfo);
		});

		function showInfo(event) {
			const menuToShow = event.currentTarget.dataset.menu;
			headerImg.style.height = "6rem"
			sections.forEach(section => {
				const displayAttr = section.dataset.display;
				section.style.display = displayAttr === menuToShow ? 'block' : 'none';
				updateDisplay(menuToShow)
			});
		}



	// Adding the new posts

		const philosophyTextareaField = document.querySelector('.new-philosophy-post textarea');
		const philosophySubmitButton = document.querySelector('.new-philosophy-post button');
        const philosophyInputField = document.querySelector('.new-philosophy-post input');

        const historyTextareaField = document.querySelector('.new-history-post textarea');
        const historySubmitButton = document.querySelector('.new-history-post button');
        const historyInputField = document.querySelector('.new-history-post input');

        const dreamsTextareaField = document.querySelector('.new-dreams-post textarea');
        const dreamsSubmitButton = document.querySelector('.new-dreams-post button');
        const dreamsInputField = document.querySelector('.new-dreams-post input');

        const funTextareaField = document.querySelector('.new-fun-post textarea');
        const funSubmitButton = document.querySelector('.new-fun-post button');
        const funInputField = document.querySelector('.new-fun-post input');
		
        const displayContainer = document.querySelector('.display-container');

		function handleSubmit(event, inputField, textareaField, storageKey, dataArray, displayType) {
			event.preventDefault();
			const inputValue = inputField.value.trim();
			const textareaValue = textareaField.value.trim();
			if (inputValue !== '' && textareaValue !== '') {
				dataArray.push({ input: inputValue, textarea: textareaValue });
				localStorage.setItem(storageKey, JSON.stringify(dataArray));
				inputField.value = '';
				textareaField.value = '';
				updateDisplay(displayType);
			}
		}
		
		
        
        philosophySubmitButton.addEventListener('click', function(event) {
            handleSubmit(event, philosophyInputField, philosophyTextareaField, 'philosophyArray', philosophyArray, 'philosophy');
			console.log(philosophyArray);
        });
        
        historySubmitButton.addEventListener('click', function(event) {
            handleSubmit(event, historyInputField, historyTextareaField, 'historyArray', historyArray, 'history');
        });
        
        dreamsSubmitButton.addEventListener('click', function(event) {
            handleSubmit(event, dreamsInputField, dreamsTextareaField, 'dreamsArray', dreamsArray, 'dreams');
        });

        funSubmitButton.addEventListener('click', function(event) {
            handleSubmit(event, funInputField, funTextareaField, 'funArray', funArray, 'fun');
        });
        
        function updateDisplay(sectionName) {
            if (sectionName === 'philosophy') {
                displayPosts(philosophyArray);
            } else if (sectionName === 'history') {
                displayPosts(historyArray);
            } else if (sectionName === 'dreams') {
                displayPosts(dreamsArray);
            } else if (sectionName === 'fun') {
                displayPosts(funArray);
            }
        };

// Display the blogposts
function displayPosts(array) {
    displayContainer.innerHTML = '';
    array.forEach(item => {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post', 'column--8', 'offset--2');
        displayContainer.appendChild(blogPost);

        const timestamp = new Date().toLocaleString(); // Get current timestamp

        const blogPostHeader = document.createElement('div');
        blogPostHeader.classList.add('blog-post__header');
        blogPostHeader.textContent = item.input; // Display the input value and timestamp
        blogPost.appendChild(blogPostHeader);

		const blogPostTime = document.createElement('div');
		blogPostTime.classList.add('blog-post__timestamp');
		blogPostTime.textContent = timestamp
		blogPost.appendChild(blogPostTime)

        const blogPostText = document.createElement('p');
        blogPostText.classList.add('blog-post__text');
        blogPostText.textContent = item.textarea; // Display the textarea value
        blogPost.appendChild(blogPostText);
    });
}


        
// text-area logic
        philosophyTextareaField.addEventListener('focus', function() {
            this.style.width = '50rem';
            this.style.height = '30rem';
        });
        
        philosophyTextareaField.addEventListener('blur', function() {
            this.style.width = ''; 
            this.style.height = '';
        });
        
    });
