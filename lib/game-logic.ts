import type { Board, Player, GameState } from '@/types';

/**
 * Check if there's a winner on the board
 */
export function checkWinner(board: Board): Player | null {
  const winningCombinations = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

/**
 * Check if the board is full (draw condition)
 */
export function isBoardFull(board: Board): boolean {
  return board.every(square => square !== null);
}

/**
 * Get the next player
 */
export function getNextPlayer(currentPlayer: Player): Player {
  return currentPlayer === 'X' ? 'O' : 'X';
}

/**
 * Create initial game state
 */
export function createInitialGameState(): GameState {
  return {
    board: Array(9).fill(null),
    currentPlayer: 'X',
    status: 'playing',
    winner: null,
  };
}

/**
 * Make a move and return new game state
 */
export function makeMove(gameState: GameState, squareIndex: number): GameState {
  // Don't allow moves if game is over or square is already filled
  if (gameState.status !== 'playing' || gameState.board[squareIndex] !== null) {
    return gameState;
  }

  // Create new board with the move
  const newBoard = [...gameState.board];
  newBoard[squareIndex] = gameState.currentPlayer;

  // Check for winner
  const winner = checkWinner(newBoard);
  
  if (winner) {
    return {
      ...gameState,
      board: newBoard,
      status: 'won',
      winner,
    };
  }

  // Check for draw
  if (isBoardFull(newBoard)) {
    return {
      ...gameState,
      board: newBoard,
      status: 'draw',
    };
  }

  // Continue game with next player
  return {
    ...gameState,
    board: newBoard,
    currentPlayer: getNextPlayer(gameState.currentPlayer),
  };
}

/**
 * Get winning squares for highlighting
 */
export function getWinningSquares(board: Board): number[] {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6], // diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return combination;
    }
  }

  return [];
}