

document.addEventListener('DOMContentLoaded', function(){

	const username = localStorage.getItem('namePrivateSave');
	const greetUser = document.querySelector('.greetUser');
	greetUser.textContent = 'Velkommen ' + username + '. Dette er Min Side';

		const pictureInput = document.querySelector('.upload-picture__input');
		let pictureLink = pictureInput.value; // Use let to allow reassignment

		function setProfilePicture() {
			pictureLink = pictureInput.value; 
			if (pictureLink.trim() !== '') {
					localStorage.setItem('profilePicture', pictureLink);
			}
		}

		const pictureButton = document.querySelector('.upload-picture__button');
		pictureButton.addEventListener('click', setProfilePicture);

		function ProfileInformation() {
			const storedPictureLink = localStorage.getItem('profilePicture');

			if (storedPictureLink && storedPictureLink.trim() !== '') {
					const profilePicture = document.createElement('img');
					profilePicture.setAttribute('src', storedPictureLink);
					profilePicture.classList.add('profile-picture')
					const profilePictureContainer = document.querySelector('.profile-picture-container');
					profilePictureContainer.appendChild(profilePicture);
			}
		}

		ProfileInformation();
	});

