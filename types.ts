// Game state types
export type Player = 'X' | 'O';
export type Square = Player | null;
export type Board = Square[];

export type GameStatus = 'playing' | 'won' | 'draw';

export interface GameState {
  board: Board;
  currentPlayer: Player;
  status: GameStatus;
  winner: Player | null;
}

export interface GameStats {
  xWins: number;
  oWins: number;
  draws: number;
  totalGames: number;
}

// Component prop types
export interface GameBoardProps {
  board: Board;
  onSquareClick: (index: number) => void;
  disabled: boolean;
}

export interface GameStatusProps {
  status: GameStatus;
  currentPlayer: Player;
  winner: Player | null;
  onNewGame: () => void;
  stats: GameStats;
}

export interface SquareProps {
  value: Square;
  onClick: () => void;
  disabled: boolean;
  index: number;
}

export interface CosmicBadgeProps {
  bucketSlug: string;
}