
document.addEventListener('DOMContentLoaded', function () {
	let gameInterval;
	let score = 0;
	let collisionCounter = 0;
	let superCollisionCounter = 0;
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
	gameInterval = setInterval(createlevelTwo, 3000);
	gameInterval = setInterval(function () {
		if (score >= 1) {
			 levelThree();
		}
  }, 3000);
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
  
		function levelThree() {
			const levelThreeMonster = document.createElement('div');
			levelThreeMonster.className = 'level-two-monster';
			spaceMonstersContainer.appendChild(levelThreeMonster);

			const levelThreeMonsterImg = document.createElement('img');
			levelThreeMonsterImg.setAttribute('src', 'assets/games/space-impact/level-three.jpg');
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

	function createlevelTwo() {
	  const levelTwo = document.createElement('div');
	  levelTwo.className = 'super-monster';
	  spaceMonstersContainer.appendChild(levelTwo);
	  const superImg = document.createElement('img');
	  superImg.setAttribute('src', 'assets/games/space-impact/super-monster.png');
	  levelTwo.appendChild(superImg);

	  const levelTwoPosition = Math.random() * (document.querySelector('.gamediv').offsetWidth - 50);

	  levelTwo.style.left = levelTwoPosition + 'px';

	  const levelTwoInterval = setInterval(function () {
			const levelTwoTop = levelTwo.offsetTop + spaceMonsterSpeed;

			if (levelTwoTop <= document.querySelector('.gamediv').offsetHeight) {
			  levelTwo.style.top = levelTwoTop + 'px';
				 handleCollisions(); // Check for collisions on each space monster movement
			} else {
				 clearInterval(levelTwoInterval);
				 spaceMonstersContainer.removeChild(levelTwo);
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
		const spaceBulletRect = bullet.getBoundingClientRect();
		const spaceMonsterRect = spaceMonster.getBoundingClientRect();

		return (
			spaceBulletRect.left < spaceMonsterRect.right &&
			spaceBulletRect.right > spaceMonsterRect.left &&
			spaceBulletRect.top < spaceMonsterRect.bottom &&
			spaceBulletRect.bottom > spaceMonsterRect.top
		);
	}

	function levelTwoBulletCollision(bullet, levelTwo) {
		const superBulletRect = bullet.getBoundingClientRect();
		const levelTwoRect = levelTwo.getBoundingClientRect();

		if (
			superBulletRect.left < levelTwoRect.right &&
			superBulletRect.right > levelTwoRect.left &&
			superBulletRect.top < levelTwoRect.bottom &&
			superBulletRect.bottom > levelTwoRect.top
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
		const spaceMonsters = document.querySelectorAll('.space-monster');
		const levelTwos = document.querySelectorAll('.super-monster');
		const levelThreeMonsters = document.querySelectorAll('.level-two-monster')

		bullets.forEach((bullet) => {
			spaceMonsters.forEach((spaceMonster) => {
					if (spacemonsterBulletCollision(bullet, spaceMonster)) {
						bulletsContainer.removeChild(bullet);
						spaceMonstersContainer.removeChild(spaceMonster);
						updateScore(1); // Increase the score by 1
					}
			});

			levelTwos.forEach((levelTwo) => {
					if (levelTwoBulletCollision(bullet, levelTwo)) {
						levelTwo.collisionCount = (levelTwo.collisionCount || 0) + 1;

						if (collisionCounter === 7) {
							bulletsContainer.removeChild(bullet);
							spaceMonstersContainer.removeChild(levelTwo);
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
					 spaceMonstersContainer.removeChild(levelThreeMonster);
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