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

        const philosophySubmitButton = document.querySelector('.new-philosophy-post button');
        const philosophyInputField = document.querySelector('.new-philosophy-post textarea');
        const historySubmitButton = document.querySelector('.new-history-post button');
        const historyInputField = document.querySelector('.new-history-post input');
        const dreamsSubmitButton = document.querySelector('.new-dreams-post button');
        const dreamsInputField = document.querySelector('.new-dreams-post input');
        const funSubmitButton = document.querySelector('.new-fun-post button');
        const funInputField = document.querySelector('.new-fun-post input');
        const displayContainer = document.querySelector('.display-container');

        function handleSubmit(event, inputField, storageKey, dataArray, displayType) {
            event.preventDefault();
            const inputValue = inputField.value.trim();
            if (inputValue !== '') {
                dataArray.push(inputValue);
                localStorage.setItem(storageKey, JSON.stringify(dataArray));
                inputField.value = '';
                updateDisplay(displayType);
            }
        }
        
        philosophySubmitButton.addEventListener('click', function(event) {
            handleSubmit(event, philosophyInputField, 'philosophyArray', philosophyArray, 'philosophy');
        });
        
        historySubmitButton.addEventListener('click', function(event) {
            handleSubmit(event, historyInputField, 'historyArray', historyArray, 'history');
        });
        
        dreamsSubmitButton.addEventListener('click', function(event) {
            handleSubmit(event, dreamsInputField, 'dreamsArray', dreamsArray, 'dreams');
        });

        funSubmitButton.addEventListener('click', function(event) {
            handleSubmit(event, funInputField, 'funArray', funArray, 'fun');
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

                const blogPostHeader = document.createElement('h2')
                blogPostHeader.classList.add('blog-post__header')
                blogPostHeader.textContent = item;
                blogPost.appendChild(blogPostHeader)

                const blogPostText = document.createElement('li')
                blogPostText.classList.add('blog-post__text')
                blogPostText.textContent = item;
                blogPost.appendChild(blogPostText)
            });
        }
        
// text-area logic
        philosophyInputField.addEventListener('focus', function() {
            this.style.width = '50rem';
            this.style.height = '30rem';
        });
        
        philosophyInputField.addEventListener('blur', function() {
            this.style.width = ''; 
            this.style.height = '';
        });
        
    });
