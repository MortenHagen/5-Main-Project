function createlevelTwoMonster() {
	const levelTwoMonster = document.createElement('div');
	levelTwoMonster.className = 'super-monster';
	spaceMonstersContainer.appendChild(levelTwoMonster);
	const levelTwoMonsterImg = document.createElement('img');
	levelTwoMonsterImg.setAttribute('src', 'assets\games\space-impact\level-three.jpg');
	levelTwoMonster.appendChild(levelTwoMonsterImg);

	const levelTwoMonsterPosition = Math.random() * (document.querySelector('.gamediv').offsetWidth - 50);

	levelTwoMonster.style.left = levelTwoMonsterPosition + 'px';

	const levelTwoMonsterInterval = setInterval(function () {
		 const levelTwoMonsterTop = levelTwoMonster.offsetTop + spaceMonsterSpeed;

		 if (levelTwoMonsterTop <= document.querySelector('.gamediv').offsetHeight) {
			levelTwoMonster.style.top = levelTwoMonsterTop + 'px';
			  handleCollisions(); // Check for collisions on each space monster movement
		 } else {
			  clearInterval(levelTwoMonsterInterval);
			  spaceMonstersContainer.removeChild(levelTwoMonster);
		 }
	}, 80);
 }

 
 function levelTwoMonsterBulletCollision(bullet, levelTwoMonster) {
	const bulletRect = bullet.getBoundingClientRect();
	const levelTwoMonsterRect = levelTwoMonster.getBoundingClientRect();

	if (
		bulletRect.left < levelTwoMonsterRect.right &&
		bulletRect.right > levelTwoMonsterRect.left &&
		bulletRect.top < levelTwoMonsterRect.bottom &&
		bulletRect.bottom > levelTwoMonsterRect.top
	) {
		collisionCounter++;
		bullet.remove();
	}

	return collisionCounter;
}


function handleCollisions() {
	const bullets = document.querySelectorAll('.bullet');
	const levelTwoMonsters = document.querySelectorAll('.level-Two-monster');

	bullets.forEach((bullet) => {
		levelTwoMonsters.forEach((levelTwoMonster) => {
				if (levelTwoMonsterBulletCollision(bullet, levelTwoMonster)) {
					levelTwoMonster.collisionCount = (levelTwoMonster.collisionCount || 0) + 1;

					if (collisionCounter === 1) {
						bulletsContainer.removeChild(bullet);
						spaceMonstersContainer.removeChild(levelTwoMonster);
						updateScore(2); // Increase the score by 1
						collisionCounter = 0;
					}
				}
		});
	});
}