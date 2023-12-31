
document.addEventListener('DOMContentLoaded', function () {
	let score = 0;
	let gameInterval;
	let isGameRunning = false;
	const scoreDisplay = document.getElementById('score');
	const spacecraftSpeed = 20;
	const bulletSpeed = 25;
	const spacecraft = document.querySelector('.spacecraft');
	const bulletsContainer = document.querySelector('.bullets');

	const levelOneMonstersContainer = document.querySelector('.level-one-monsters');
	const levelOneMonsterSpeed = 5;
	let levelOneCollisionCounter = 0;

	const levelTwoMonstersContainer = document.querySelector('.level-two-monsters');
	const levelTwoMonsterSpeed = 5;
	let levelTwoCollisionCounter = 0;

	const levelThreeMonstersContainer = document.querySelector('.level-three-monsters');
	const levelThreeMonsterSpeed = 5;
	let levelThreeCollisionCounter = 0;

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
	updateScore(0);
	spacecraft.style.left = '50%';
	gameInterval = setInterval(function () {
		if (score >= 15) {
			 levelThree(500);
		} if (score >= 5) {
			 levelTwo(1000);
		} if () {
			 levelOne();
		}
  });
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

	function levelOne() {
		const levelOneMonster = document.createElement('div');
		levelOneMonster.className = 'level-one-monster';
		levelOneMonstersContainer.appendChild(levelOneMonster);

		const spaceImglevelOne = document.createElement('img');
		spaceImglevelOne.setAttribute('src', 'assets/games/space-impact/space-monster.jpg');
		levelOneMonster.appendChild(spaceImglevelOne);

		const levelOneMonsterPosition = Math.random() * (document.querySelector('.gamediv').offsetWidth - 50);

		levelOneMonster.style.left = levelOneMonsterPosition + 'px';

		setInterval(function () {
			 const levelOneMonsterTop = levelOneMonster.offsetTop + levelOneMonsterSpeed;

			 if (levelOneMonsterTop <= document.querySelector('.gamediv').offsetHeight) {
				levelOneMonster.style.top = levelOneMonsterTop + 'px';
			 } else {
				  levelOneMonstersContainer.removeChild(levelOneMonster);
			 }
		}, 50);
	}

	function levelTwo() {
		const levelTwoMonster = document.createElement('div');
		levelTwoMonster.className = 'level-two-monster';
		levelTwoMonstersContainer.appendChild(levelTwoMonster);

		const spaceImgLevelTwo = document.createElement('img');
		spaceImgLevelTwo.setAttribute('src', 'assets\games\space-impact\super-monster.png');
		levelTwoMonster.appendChild(spaceImgLevelTwo);

		const levelTwoMonsterPosition = Math.random() * (document.querySelector('.gamediv').offsetWidth - 50);

		levelTwoMonster.style.left = levelTwoMonsterPosition + 'px';

		setInterval(function () {
			 const levelTwoMonsterTop = levelTwoMonster.offsetTop + levelTwoMonsterSpeed;

			 if (levelTwoMonsterTop <= document.querySelector('.gamediv').offsetHeight) {
				  levelTwoMonster.style.top = levelTwoMonsterTop + 'px';
				  handleCollisions(); // Check for collisions on each space monster movement
			 } else {
				  levelTwoMonstersContainer.removeChild(levelTwoMonster);
			 }
		}, 50);
	}
  
	function levelThree() {
			const levelThreeMonster = document.createElement('div');
			levelThreeMonster.className = 'level-three-monster';
			levelThreeMonsterContainer.appendChild(levelThreeMonster);

			const levelThreeMonsterImg = document.createElement('img');
			levelThreeMonsterImg.setAttribute('src', 'assets/games/space-impact/level-three.jpg');
			levelThreeMonster.appendChild(levelThreeMonsterImg);

			const levelThreeMonsterPosition = Math.random() * (document.querySelector('.gamediv').offsetWidth - 50);

			levelThreeMonster.style.left = levelThreeMonsterPosition + 'px';

			setInterval(function () {
			const levelThreeMonsterTop = levelThreeMonster.offsetTop + levelThreeMonsterSpeed;

			if (levelThreeMonsterTop <= document.querySelector('.gamediv').offsetHeight) {
				levelThreeMonster.style.top = levelThreeMonsterTop + 'px';
				handleCollisions(); // Check for collisions on each space monster movement
			} else {
				levelThreeMonstersContainer.removeChild(levelThreeMonster);
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
			  bulletsContainer.removeChild(bullet);
			  clearInterval(bulletInterval); // Clear the interval when the bullet goes out of bounds
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

	function handleCollisions() {
		const bullets = document.querySelectorAll('.bullet');
		const levelOneMonsters = document.querySelectorAll('.level-one-monster');
		const levelTwoMonsters = document.querySelectorAll('.level-two-monster');
		const levelThreeMonsters = document.querySelectorAll('.level-three-monster')

		bullets.forEach((bullet) => {

			levelOneMonsters.forEach((levelOneMonster) => {
				if (levelOneMonsterBulletCollision(bullet, levelOneMonster)) {
					levelOneMonstersContainer.removeChild(levelOneMonster);
					updateScore(1);
				}
			})

			levelTwoMonsters.forEach((levelTwoMonster) => {
				if (levelTwoMonsterBulletCollision === 3) {
					levelTwoMonsterContainer.removeChild(levelTwoMonster);
					updateScore(10); // Increase the score by 1
					levelTwoMonsterCollisionCounter = 0;
				}
			})

			levelThreeMonsters.forEach((levelThreeMonster) => {
				if (levelThreeMonsterBulletCollision === 7) {
					levelThreeMonsterContainer.removeChild(levelThreeMonster);
					updateScore(100); // Increase the score by 1
					levelThreeMonsterCollisionCounter = 0;
				}
			})
		});
	};
	
	function levelOneMonsterBulletCollision(bullet, levelOneMonster) {
		const levelOneBulletRect = bullet.getBoundingClientRect();
		const levelOneMonsterRect = levelOneMonster.getBoundingClientRect();
  
		if (
			 levelOneBulletRect.left < levelOneMonsterRect.right &&
			 levelOneBulletRect.right > levelOneMonsterRect.left &&
			 levelOneBulletRect.top < levelOneMonsterRect.bottom &&
			 levelOneBulletRect.bottom > levelOneMonsterRect.top
		) {
			 levelOneCollisionCounter++;
			 bullet.remove();
		}
  
		return levelOneCollisionCounter;
	}
  
	function levelTwoMonsterBulletCollision(bullet, levelTwoMonster) {
		const levelTwoBulletRect = bullet.getBoundingClientRect();
		const levelTwoMonsterRect = levelTwoMonster.getBoundingClientRect();

		if (
			levelTwoBulletRect.right > levelTwoMonsterRect.left &&
			levelTwoBulletRect.top < levelTwoMonsterRect.bottom &&
			levelTwoBulletRect.left > levelTwoMonsterRect.right &&
			levelTwoBulletRect.bottom > levelTwoMonsterRect.top
		) {
			levelTwoCollisionCounter++;
			bullet.remove();
		}

		return levelTwoCollisionCounter;
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
		  levelThreeCollisionCounter++;
		  bullet.remove();
		}

		return levelThreeCollisionCounter;
	}	 
	setInterval(shootBullet, 250)
	
	function updateScore(points) {
		score += points;
		scoreDisplay.textContent = `Score: ${score}`;
	}

});