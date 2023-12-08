
document.addEventListener('DOMContentLoaded', function () {
	let gameInterval;
	let score = 0;
	let collisionCounter = 0;
	let superCollisionCounter = 0;
	let isGameRunning = false;
	const spacecraft = document.querySelector('.spacecraft');
	const bulletsContainer = document.querySelector('.bullets');
	const levelTwoMonstersContainer = document.querySelector('.space-monsters');
	const levelTwoMonsterSpeed = 5;
	const levelThreeMonstersContainer = document.querySelector('.space-monsters');
	const levelThreeMonsterSpeed = 5;
	const scoreDisplay = document.getElementById('score');
	const spacecraftSpeed = 20;
	const bulletSpeed = 25;

	document.querySelector('#startButton').addEventListener('click', startGame);
 
	document.addEventListener('keydown', function (e) {
		 if (e.key === " " && !isGameRunning) { // Space key and game is not running
			  startGame();
			  isGameRunning = true; // Set the game state to running
		 }
	});
 
	function startGame() {
		initializeGame();
	}
  
	function initializeGame() {
	clearInterval(gameInterval); // Clear the previous interval
	updateScore(0);
	bulletsContainer.innerHTML = '';
	levelTwoMonstersContainer.innerHTML = '';
	spacecraft.style.left = '50%'; // Reset spacecraft position
	gameInterval = setInterval(function () {
		if (score >= 15) {
			 levelThree(500);
		} else if (score >= 5) {
			 levelTwo(1000);
		} else {
			 levelOne(1500);
		}
  }, 1500);
	}

	function moveSpacecraft(speed) {
		const spacecraftPosition = spacecraft.offsetLeft;
		const newSpacecraftPosition = spacecraftPosition + speed;

		const gamedivWidth = document.querySelector('.gamediv').offsetWidth;
		const spacecraftWidth = spacecraft.offsetWidth;

		if (newSpacecraftPosition >= 0 && newSpacecraftPosition + spacecraftWidth <= gamedivWidth) {
			 spacecraft.style.left = newSpacecraftPosition + 'px';
		}
	}

	function levelTwo() {
		const levelTwoMonster = document.createElement('div');
		levelTwoMonster.className = 'space-monster';
		levelTwoMonstersContainer.appendChild(levelTwoMonster);

		const spaceImg = document.createElement('img');
		spaceImg.setAttribute('src', 'assets/games/space-impact/space-monster.jpg');
		levelTwoMonster.appendChild(spaceImg);

		const levelTwoMonsterPosition = Math.random() * (document.querySelector('.gamediv').offsetWidth - 50);

		levelTwoMonster.style.left = levelTwoMonsterPosition + 'px';

		const levelTwoMonsterInterval = setInterval(function () {
			 const levelTwoMonsterTop = levelTwoMonster.offsetTop + levelTwoMonsterSpeed;

			 if (levelTwoMonsterTop <= document.querySelector('.gamediv').offsetHeight) {
				  levelTwoMonster.style.top = levelTwoMonsterTop + 'px';
				  handleCollisions(); // Check for collisions on each space monster movement
			 } else {
				  clearInterval(levelTwoMonsterInterval);
				  levelTwoMonstersContainer.removeChild(levelTwoMonster);
			 }
		}, 50);
	}
  
	function levelThree() {
			const levelThreeMonster = document.createElement('div');
			levelThreeMonster.className = 'level-two-monster';
			levelTwoMonstersContainer.appendChild(levelThreeMonster);

			const levelThreeMonsterImg = document.createElement('img');
			levelThreeMonsterImg.setAttribute('src', 'assets/games/space-impact/level-three.jpg');
			levelThreeMonster.appendChild(levelThreeMonsterImg);

			const levelThreeMonsterPosition = Math.random() * (document.querySelector('.gamediv').offsetWidth - 50);

			levelThreeMonster.style.left = levelThreeMonsterPosition + 'px';

			const levelThreeMonsterInterval = setInterval(function () {
			const levelThreeMonsterTop = levelThreeMonster.offsetTop + levelThreeMonsterSpeed;

			if (levelThreeMonsterTop <= document.querySelector('.gamediv').offsetHeight) {
				levelThreeMonster.style.top = levelThreeMonsterTop + 'px';
				handleCollisions(); // Check for collisions on each space monster movement
			} else {
				clearInterval(levelThreeMonsterInterval);
				levelTwoMonstersContainer.removeChild(levelThreeMonster);
			}
			}, 20);
	}

	function shootBullet() {
	const bullet = document.createElement('div');
	bullet.className = 'bullet';
	bulletsContainer.appendChild(bullet);

	const spacecraftPosition = spacecraft.offsetLeft;
	const bulletPosition = spacecraftPosition;

	bullet.style.left = bulletPosition + (spacecraft.offsetWidth / 2) + 'px';
	bullet.style.top = spacecraft.offsetTop + 'px';

	const bulletInterval = setInterval(function () {
		 const bulletTop = bullet.offsetTop - bulletSpeed;

		 if (bulletTop >= 0) {
		  bullet.style.top = bulletTop + 'px';
			  handleCollisions(); // Check for collisions on each bullet movement
		 } else {
			  clearInterval(bulletInterval);
			  bulletsContainer.removeChild(bullet);
		 }
	}, 50);
	}

	window.addEventListener("keydown", function (e) {
		if (e.key === "ArrowLeft") {
			moveSpacecraft(-spacecraftSpeed); // Move left
		} else if (e.key === "ArrowRight") {
			moveSpacecraft(spacecraftSpeed); // Move right
		} 
	});

	setInterval(shootBullet, 250)

	function levelTwoMonsterBulletCollision(bullet, levelTwoMonster) {
		const spaceBulletRect = bullet.getBoundingClientRect();
		const levelTwoMonsterRect = levelTwoMonster.getBoundingClientRect();

		return (
			spaceBulletRect.left < levelTwoMonsterRect.right &&
			spaceBulletRect.right > levelTwoMonsterRect.left &&
			spaceBulletRect.top < levelTwoMonsterRect.bottom &&
			spaceBulletRect.bottom > levelTwoMonsterRect.top
		);
	}

	function supermonsterBulletCollision(bullet, superMonster) {
		const superBulletRect = bullet.getBoundingClientRect();
		const superMonsterRect = superMonster.getBoundingClientRect();

		if (
			superBulletRect.left < superMonsterRect.right &&
			superBulletRect.right > superMonsterRect.left &&
			superBulletRect.top < superMonsterRect.bottom &&
			superBulletRect.bottom > superMonsterRect.top
		) {
			collisionCounter++;
			bullet.remove();
		}

		return collisionCounter;
	}
  
	function levelThreeMonsterBulletCollision(bullet, levelThreeMonster) {
		const levelThreeBulletRect = bullet.getBoundingClientRect();
		const levelThreeMonsterRect = levelThreeMonster.getBoundingClientRect();

		if (
			levelThreeBulletRect.left < levelThreeMonsterRect.right &&
			levelThreeBulletRect.right > levelThreeMonsterRect.left &&
			levelThreeBulletRect.top < levelThreeMonsterRect.bottom &&
			levelThreeBulletRect.bottom > levelThreeMonsterRect.top
		) {
		  superCollisionCounter++;
		  bullet.remove();
		}

		return superCollisionCounter;
	}	 

	function handleCollisions() {
		const bullets = document.querySelectorAll('.bullet');
		const levelTwoMonsters = document.querySelectorAll('.space-monster');
		const superMonsters = document.querySelectorAll('.super-monster');
		const levelThreeMonsters = document.querySelectorAll('.level-two-monster')

		bullets.forEach((bullet) => {
			levelTwoMonsters.forEach((levelTwoMonster) => {
					if (levelTwoMonsterBulletCollision(bullet, levelTwoMonster)) {
						bulletsContainer.removeChild(bullet);
						levelTwoMonstersContainer.removeChild(levelTwoMonster);
						updateScore(1); // Increase the score by 1
					}
			});

			superMonsters.forEach((superMonster) => {
					if (supermonsterBulletCollision(bullet, superMonster)) {
						superMonster.collisionCount = (superMonster.collisionCount || 0) + 1;

						if (collisionCounter === 7) {
							bulletsContainer.removeChild(bullet);
							levelTwoMonstersContainer.removeChild(superMonster);
							updateScore(5); // Increase the score by 1
							collisionCounter = 0;
						}
					}
			});

			levelThreeMonsters.forEach((levelThreeMonster) => {
				if (levelThreeMonsterBulletCollision(bullet, levelThreeMonster)) {
				  levelThreeMonster.collisionCount = (levelThreeMonster.collisionCount || 0) + 1;
  
				  if (superCollisionCounter === 1) {
					 bulletsContainer.removeChild(bullet);
					 levelTwoMonstersContainer.removeChild(levelThreeMonster);
					 updateScore(2); // Increase the score by 2
					 superCollisionCounter = 0;
				  }
				}
			 });
		});
	}
	
	function updateScore(points) {
		score += points;
		scoreDisplay.textContent = `Score: ${score}`;
	}

});