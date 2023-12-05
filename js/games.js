
document.addEventListener('DOMContentLoaded', function () {

	const allGames = document.querySelector('.allgames-container')
	
	
		

	const runningGameButton = document.querySelector('.running-game-button')

// Endless running-game
	runningGameButton.addEventListener('click', function() {

		allGames.classList.add('show')

		const exitButtonCreate = document.createElement('div');
		exitButtonCreate.classList.add('exit-button');
		exitButtonCreate.textContent = 'X'
		allGames.appendChild(exitButtonCreate);

		const gameContainerCreator = document.createElement('div');
		gameContainerCreator.classList.add('endless-container');
		allGames.appendChild(gameContainerCreator);

		const PlayerCreator = document.createElement('div');
		PlayerCreator.classList.add('player');
		gameContainerCreator.appendChild(PlayerCreator);

		const PlayerImgCreator = document.createElement('img');
		PlayerImgCreator.setAttribute('src', 'assets/games/endless-runner/third-3ye-01-iffah-gac-pa1-run-cycle-animation.gif');
		PlayerCreator.appendChild(PlayerImgCreator);

		const obstacleOneContainerCreator = document.createElement('div');
		obstacleOneContainerCreator.classList.add('obstacleOne');
		gameContainerCreator.appendChild(obstacleOneContainerCreator);

		const obstacleOneCreator = document.createElement('img');
		obstacleOneCreator.setAttribute('src', 'assets/games/endless-runner/penis.png');
		obstacleOneContainerCreator.appendChild(obstacleOneCreator);

		const obstacleTwoContainerCreator = document.createElement('div');
		obstacleTwoContainerCreator.classList.add('obstacleTwo');
		gameContainerCreator.appendChild(obstacleTwoContainerCreator);

		const obstacleTwoCreator = document.createElement('img');
		obstacleTwoCreator.setAttribute('src', 'assets/games/endless-runner/penis.png');
		obstacleTwoContainerCreator.appendChild(obstacleTwoCreator);

		const cherryOneContainerCreator = document.createElement('div');
		cherryOneContainerCreator.classList.add('cherryOne');
		gameContainerCreator.appendChild(cherryOneContainerCreator);

		const cherryOneCreator = document.createElement('img');
		cherryOneCreator.classList.add('cherryImg');
		cherryOneCreator.setAttribute('src', 'assets/games/endless-runner/boobs.png');
		cherryOneContainerCreator.appendChild(cherryOneCreator);

		const cherryTwoContainerCreator = document.createElement('div')
		cherryTwoContainerCreator.classList.add('cherryTwo');
		gameContainerCreator.appendChild(cherryTwoContainerCreator);

		const cherryTwoCreator = document.createElement('img');
		cherryTwoCreator.classList.add('cherryImg');
		cherryTwoCreator.setAttribute('src', 'assets/games/endless-runner/boobs.png');
		cherryTwoContainerCreator.appendChild(cherryTwoCreator);

		const scoreCreator = document.createElement('div');
		scoreCreator.classList.add('score');
		scoreCreator.textContent = 'Score: 0';
		gameContainerCreator.appendChild(scoreCreator);

		const startRunningGameCreator = document.createElement('button');
		startRunningGameCreator.classList.add('start-button');
		startRunningGameCreator.textContent = 'Start Game';
		gameContainerCreator.appendChild(startRunningGameCreator);

		const gameScriptCreator = document.createElement('script');
		gameScriptCreator.setAttribute('src', 'js/games/endless-runner.js');
		gameContainerCreator.appendChild(gameScriptCreator);
		const allGamesExit = document.querySelector('.exit-button')

		function closeGame() {
			allGames.innerHTML = '';
			allGames.classList.remove('show')
		};

		allGamesExit.addEventListener('click', closeGame)

	});


	const snakeGameButton = document.querySelector('.snake-game-button')

// Snake game
	snakeGameButton.addEventListener('click', function () {
		allGames.classList.add('show')

		const highScoreContainer = document.createElement('div');
		highScoreContainer.classList.add('highscores-container');
		allGames.appendChild(highScoreContainer);

		const highScoreList = document.createElement('ul');
		highScoreList.classList.add('highscoresList');
		highScoreContainer.appendChild(highScoreList);

		const exitButtonCreate = document.createElement('div');
		exitButtonCreate.classList.add('exit-button');
		exitButtonCreate.textContent = 'X'
		allGames.appendChild(exitButtonCreate);
		
		const snakeContainer = document.createElement('div');
		snakeContainer.classList.add('snake-container');
		allGames.appendChild(snakeContainer)

		// Create a div element with the class "game-board" and id "game-board"
		const gameBoardCreate = document.createElement('div');
		gameBoardCreate.classList.add('game-board');
		gameBoardCreate.id = 'game-board';
		snakeContainer.appendChild(gameBoardCreate);

		// Create a div element with the class "score" and id "score"
		const scoreDiv = document.createElement('div');
		scoreDiv.classList.add('score');
		scoreDiv.id = 'score';
		scoreDiv.textContent = 'Score: 0';
		snakeContainer.appendChild(scoreDiv);

		// Create a button element with the id "start-button"
		const startButtonCreate = document.createElement('button');
		startButtonCreate.classList = 'start-button';
		startButtonCreate.textContent = 'Gønna som faen!';
		snakeContainer.appendChild(startButtonCreate);

		// Include your snake.js file
		const scriptElement = document.createElement('script');
		scriptElement.src = 'js/games/snake.js';
		snakeContainer.appendChild(scriptElement);
		const allGamesExit = document.querySelector('.exit-button')

		function closeGame() {
			allGames.innerHTML = '';
			allGames.classList.remove('show')
		};
		
		allGamesExit.addEventListener('click', closeGame)

	});
});