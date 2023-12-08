
document.addEventListener('DOMContentLoaded', function () {
	let gameInterval;
	let score = 0;
	let collisionCounter = 0;
	let isGameRunning = false;
	const spacecraft = document.querySelector('.spacecraft');
	const bulletsContainer = document.querySelector('.bullets');
	const spaceMonstersContainer = document.querySelector('.space-monsters');
	const scoreDisplay = document.getElementById('score');
	const spacecraftSpeed = 20;
	const bulletSpeed = 25;
	const spaceMonsterSpeed = 5;

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
	clearInterval(gameInterval);
	updateScore(0);
	bulletsContainer.innerHTML = '';
	spaceMonstersContainer.innerHTML = '';
	spacecraft.style.left = '50%'; // Reset spacecraft position
	gameInterval = setInterval(createSpaceMonster, 1000);
	gameInterval = setInterval(createSuperMonster, 3000);
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

	function createSpaceMonster() {
		const spaceMonster = document.createElement('div');
		spaceMonster.className = 'space-monster';
		spaceMonstersContainer.appendChild(spaceMonster);
		const spaceImg = document.createElement('img');
		spaceImg.setAttribute('src', 'assets/games/space-impact/space-monster.jpg');
		spaceMonster.appendChild(spaceImg);

		const spaceMonsterPosition = Math.random() * (document.querySelector('.gamediv').offsetWidth - 50);

		spaceMonster.style.left = spaceMonsterPosition + 'px';

		const spaceMonsterInterval = setInterval(function () {
			 const spaceMonsterTop = spaceMonster.offsetTop + spaceMonsterSpeed;

			 if (spaceMonsterTop <= document.querySelector('.gamediv').offsetHeight) {
				  spaceMonster.style.top = spaceMonsterTop + 'px';
				  handleCollisions(); // Check for collisions on each space monster movement
			 } else {
				  clearInterval(spaceMonsterInterval);
				  spaceMonstersContainer.removeChild(spaceMonster);
			 }
		}, 50);
	}
	 
	function createSuperMonster() {
	  const superMonster = document.createElement('div');
	  superMonster.className = 'super-monster';
	  spaceMonstersContainer.appendChild(superMonster);
	  const superImg = document.createElement('img');
	  superImg.setAttribute('src', 'assets/games/space-impact/super-monster.png');
	  superMonster.appendChild(superImg);

	  const superMonsterPosition = Math.random() * (document.querySelector('.gamediv').offsetWidth - 50);

	  superMonster.style.left = superMonsterPosition + 'px';

	  const superMonsterInterval = setInterval(function () {
			const superMonsterTop = superMonster.offsetTop + spaceMonsterSpeed;

			if (superMonsterTop <= document.querySelector('.gamediv').offsetHeight) {
			  superMonster.style.top = superMonsterTop + 'px';
				 handleCollisions(); // Check for collisions on each space monster movement
			} else {
				 clearInterval(superMonsterInterval);
				 spaceMonstersContainer.removeChild(superMonster);
			}
	  }, 60);
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


	function spacemonsterBulletCollision(bullet, spaceMonster) {
		const bulletRect = bullet.getBoundingClientRect();
		const spaceMonsterRect = spaceMonster.getBoundingClientRect();

		return (
			bulletRect.left < spaceMonsterRect.right &&
			bulletRect.right > spaceMonsterRect.left &&
			bulletRect.top < spaceMonsterRect.bottom &&
			bulletRect.bottom > spaceMonsterRect.top
		);
	}

	function supermonsterBulletCollision(bullet, superMonster) {
		const bulletRect = bullet.getBoundingClientRect();
		const superMonsterRect = superMonster.getBoundingClientRect();

		if (
			bulletRect.left < superMonsterRect.right &&
			bulletRect.right > superMonsterRect.left &&
			bulletRect.top < superMonsterRect.bottom &&
			bulletRect.bottom > superMonsterRect.top
		) {
			collisionCounter++;
			bullet.remove();
		}

		return collisionCounter;
	}

	function handleCollisions() {
		const bullets = document.querySelectorAll('.bullet');
		const spaceMonsters = document.querySelectorAll('.space-monster');
		const superMonsters = document.querySelectorAll('.super-monster');

		bullets.forEach((bullet) => {
			spaceMonsters.forEach((spaceMonster) => {
					if (spacemonsterBulletCollision(bullet, spaceMonster)) {
						bulletsContainer.removeChild(bullet);
						spaceMonstersContainer.removeChild(spaceMonster);
						updateScore(1); // Increase the score by 1
					}
			});

			superMonsters.forEach((superMonster) => {
					if (supermonsterBulletCollision(bullet, superMonster)) {
						superMonster.collisionCount = (superMonster.collisionCount || 0) + 1;

						if (collisionCounter === 7) {
							bulletsContainer.removeChild(bullet);
							spaceMonstersContainer.removeChild(superMonster);
							updateScore(5); // Increase the score by 1
							collisionCounter = 0;
						}
					}
			});
		});
	}

	function updateScore(points) {
		score += points;
		scoreDisplay.textContent = `Score: ${score}`;
		if (score === 1) {
			const levelTwo = document.createElement('script');
			levelTwo.src = 'js/games/space-impact/level-two.js';
			document.body.appendChild(levelTwo)
		}
		else if (score === 2) {
			const levelThree = document.createElement('script');
			levelThree.src = 'js/games/space-impact/level-three.js';
			document.body.appendChild(levelThree)
		}
	}

	function levelTwo(score) {
			function createlevelTwoMonster() {
				const levelTwoMonster = document.createElement('div');
				levelTwoMonster.className = 'level-two-monster';
				spaceMonstersContainer.appendChild(levelTwoMonster);
				const levelTwoMonsterImg = document.createElement('img');
				levelTwoMonsterImg.setAttribute('src', 'assets/games/space-impact/level-three.jpg');
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
		}
	
		if (score >= 1) {
			levelTwo(score);
	  }
})
