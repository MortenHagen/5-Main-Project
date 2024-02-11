document.addEventListener('DOMContentLoaded', function(){
    function isLoggedIn() {
      // Check if the user is logged in and alert has happened
      const username = localStorage.getItem('namePrivateSave');
      const alertHappened = localStorage.getItem('alertHappened') === 'true';
      return (username !== null && username !== undefined && alertHappened);
    }
    
    if (!isLoggedIn()) {
      // If the user is not logged in or alert hasn't happened, redirect to the login page
      return;
    }
    
    const username = localStorage.getItem('namePrivateSave');
    const greetUser = document.querySelector('.greetUser');
    greetUser.textContent = 'Welcome ' + username + '. This is My Site';
    
    const pictureInput = document.querySelector('.upload-picture__input');
    let pictureLink = pictureInput.value; // Use let to allow reassignment
    
    function setProfilePicture() {
      pictureLink = pictureInput.value; 
      if (pictureLink.trim() !== '') {
        localStorage.setItem('profilePicture', pictureLink);
        updateProfilePicture();
      }
    }
    
    const pictureButton = document.querySelector('.upload-picture__button');
    pictureButton.addEventListener('click', setProfilePicture);
    
    function updateProfilePicture() {
      const storedPictureLink = localStorage.getItem('profilePicture');
      const profilePictureContainer = document.querySelector('.profile-picture-container');
      profilePictureContainer.innerHTML = ''; // Clear previous content
    
      if (storedPictureLink && storedPictureLink.trim() !== '') {
        const profilePicture = document.createElement('img');
        profilePicture.setAttribute('src', storedPictureLink);
        profilePicture.classList.add('profile-picture');
        profilePictureContainer.appendChild(profilePicture);
      }
    }
    
    // Call updateProfilePicture initially to load the picture if set
    updateProfilePicture();
});
