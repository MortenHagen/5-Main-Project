document.addEventListener('DOMContentLoaded', function(){

	const username = localStorage.getItem('namePrivateSave')

	const greetUser = document.querySelector('.greetUser')
	greetUser.textContent = 'Velkommen ' + username + '. Dette er Min Side';

});