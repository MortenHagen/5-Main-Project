document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.blogg-menu button');
    const sections = document.querySelectorAll('[data-display]');
    let philosophyArray = JSON.parse(localStorage.getItem('philosophyArray')) || [];
    let historyArray = JSON.parse(localStorage.getItem('historyArray')) || [];
    let dreamsArray = JSON.parse(localStorage.getItem('dreamsArray')) || [];

    buttons.forEach(button => {
        button.addEventListener('click', showInfo);
    });

    function showInfo(event) {
        const menuToShow = event.currentTarget.dataset.menu;

        sections.forEach(section => {
            const displayAttr = section.dataset.display;
            section.style.display = displayAttr === menuToShow ? 'block' : 'none';
            updateDisplay(menuToShow)
        });
    }

    const philosophySubmitButton = document.querySelector('.new-philosophy-post button');
    const philosophyInputField = document.querySelector('.new-philosophy-post textarea');
    const historySubmitButton = document.querySelector('.new-history-post button');
    const historyInputField = document.querySelector('.new-history-post input');
    const dreamsSubmitButton = document.querySelector('.new-dreams-post button');
    const dreamsInputField = document.querySelector('.new-dreams-post input');
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
    
    function updateDisplay(sectionName) {
        if (sectionName === 'philosophy') {
            displayPosts(philosophyArray);
        } else if (sectionName === 'history') {
            displayPosts(historyArray);
        } else if (sectionName === 'dreams') {
            displayPosts(dreamsArray);
        }
    }

    function displayPosts(array) {
        displayContainer.innerHTML = ''; // Clear previous display
        array.forEach(item => {
            const div = document.createElement('div');
            
            div.textContent = item;
            displayContainer.appendChild(div);
        });
    }

    philosophyInputField.addEventListener('focus', function() {
        this.style.width = '50rem';
        this.style.height = '30rem';
    });
    
    philosophyInputField.addEventListener('blur', function() {
        this.style.width = ''; 
        this.style.height = '';
    });
    
});

