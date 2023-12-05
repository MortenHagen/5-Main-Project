function privateToLocalStorage() {
	// Get the user input
	const namePrivate = document.querySelector('#namePrivate').value;
	const emailPrivate = document.querySelector('#emailPrivate').value;
	const phoneNumberPrivatePrivate = document.querySelector('#phoneNumberPrivate').value;
	const birthdatePrivate = document.querySelector('#birthdatePrivate').value;
	const genderPrivate = document.querySelector('#genderPrivate').value;
 
	if (namePrivate.trim() !== '') {
		// Store the input in local storage
		localStorage.setItem('namePrivateSave', namePrivate);
		localStorage.setItem('emailPrivateSave', emailPrivate);
		localStorage.setItem('phoneNumberPrivatePrivateSave', phoneNumberPrivatePrivate);
		localStorage.setItem('birthdatePrivateSave', birthdatePrivate);
		localStorage.setItem('genderPrivateSave', genderPrivate);
	
	const confirmationMessage = 'User input saved to local storage: ' + namePrivate + '\nClick OK to redirect.';
	const userConfirmed = confirm(confirmationMessage);

	if (userConfirmed) {
		window.location.href = 'my-site.html';
	}
	} else {
		alert('Please enter a value before saving.');
	};
};

const submitButton = document.querySelector('.create-account__submit-button');
submitButton.addEventListener('click', privateToLocalStorage);

const checkDataStored = document.querySelector('.create-account__submit-button2');

function displatStoredData() {
	console.log(localStorage.getItem('namePrivateSave'));
}

checkDataStored.addEventListener('click', displatStoredData);