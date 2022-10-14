const newPlayer = (player, mark) =>{
    return {player, mark};
}

const gameBoard = (() => {
    // Array for Board
    let board = [];
    for (let i = 0; i<9; i++){
        board.push('');
    }

    // Display each square for play
    let game = document.querySelector('.game');
    board.forEach(() => {
        cell = document.createElement('div');
        cell.className = 'cell';
        game.appendChild(cell);
    })
    // Click events to make play
    Array.from(game.children).forEach((cell, index) => {
        cell.addEventListener('click', function(e){
            if(e.target.classList.contains('cell')){
                e.target.style.backgroundColor = play.activePlayer.mark;
                e.target.pointerEvents = 'none';
                e.target.classList.replace('cell', 'played');
                board[index] = play.activePlayer.player;
                play.totalPlays--;
                play.checkWin();
                play.gamePlay();
            }else {

            }
            
        })
    })
    
    return {
        board,
        game
    };
})();

const play = (() => {
    // Player declaration
    const playerOne = newPlayer('player 1', 'lightpink');
    const playerTwo = newPlayer('player 2', 'lightblue');
    let activePlayer = playerOne;

    // Current play
    let totalPlays = 9;
    let currentPlay = document.querySelector('.play');
    currentPlay.textContent = activePlayer.player + '\'s turn';
    
    function gamePlay() {
        if (this.totalPlays === 0){
            currentPlay.textContent = 'Tie Game!'
        }else if (this.totalPlays % 2 === 1){
            this.activePlayer = playerOne;
            currentPlay.textContent = this.activePlayer.player + '\'s turn';
        }else if (this.totalPlays === 10){
            currentPlay.textContent = this.activePlayer.player + ' won!'; 
        }else if (this.totalPlays % 2 === 0){
            this.activePlayer = playerTwo;
            currentPlay.textContent = this.activePlayer.player + '\'s turn';
        }
    }
        
    function checkWin(){
        winConditions.forEach((cell, index) => {
            if (gameBoard.board[cell[0]] === this.activePlayer.player && gameBoard.board[cell[1]] === this.activePlayer.player && gameBoard.board[cell[2]] === this.activePlayer.player){
                this.totalPlays = 10;
                
            }
        })
    };
    
    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    return{
        checkWin,
        totalPlays,
        gamePlay,
        playerOne,
        playerTwo,
        activePlayer
    };
})();