function createlevelThreeMonster() {
	const levelThreeMonster = document.createElement('div');
	levelThreeMonster.className = 'super-monster';
	spaceMonstersContainer.appendChild(levelThreeMonster);
	const levelThreeMonsterImg = document.createElement('img');
	levelThreeMonsterImg.setAttribute('src', 'assets\games\space-impact\level-three.jpg');
	levelThreeMonster.appendChild(levelThreeMonsterImg);

	const levelThreeMonsterPosition = Math.random() * (document.querySelector('.gamediv').offsetWidth - 50);

	levelThreeMonster.style.left = levelThreeMonsterPosition + 'px';

	const levelThreeMonsterInterval = setInterval(function () {
		 const levelThreeMonsterTop = levelThreeMonster.offsetTop + spaceMonsterSpeed;

		 if (levelThreeMonsterTop <= document.querySelector('.gamediv').offsetHeight) {
			levelThreeMonster.style.top = levelThreeMonsterTop + 'px';
			  handleCollisions(); // Check for collisions on each space monster movement
		 } else {
			  clearInterval(levelThreeMonsterInterval);
			  spaceMonstersContainer.removeChild(levelThreeMonster);
		 }
	}, 80);
 }

 
 function levelThreeMonsterBulletCollision(bullet, levelThreeMonster) {
	const bulletRect = bullet.getBoundingClientRect();
	const levelThreeMonsterRect = levelThreeMonster.getBoundingClientRect();

	if (
		bulletRect.left < levelThreeMonsterRect.right &&
		bulletRect.right > levelThreeMonsterRect.left &&
		bulletRect.top < levelThreeMonsterRect.bottom &&
		bulletRect.bottom > levelThreeMonsterRect.top
	) {
		collisionCounter++;
		bullet.remove();
	}

	return collisionCounter;
}


function handleCollisions() {
	const bullets = document.querySelectorAll('.bullet');
	const levelThreeMonsters = document.querySelectorAll('.level-Two-monster');

	bullets.forEach((bullet) => {
		levelThreeMonsters.forEach((levelThreeMonster) => {
				if (levelThreeMonsterBulletCollision(bullet, levelThreeMonster)) {
					levelThreeMonster.collisionCount = (levelThreeMonster.collisionCount || 0) + 1;

					if (collisionCounter === 1) {
						bulletsContainer.removeChild(bullet);
						spaceMonstersContainer.removeChild(levelThreeMonster);
						updateScore(2); // Increase the score by 1
						collisionCounter = 0;
					}
				}
		});
	});
}