# Tic-Tac-Toe Game

![Game Preview](https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=1200&h=300&fit=crop&auto=format)

A modern, interactive Tic-Tac-Toe game built with React and Next.js featuring clean UI design, intelligent game state management, and smooth gameplay experience.

## Features

- ✨ Interactive 3x3 game board with click-to-play functionality
- 🎯 Smart win detection for rows, columns, and diagonals
- 🔄 Automatic player turn switching (X and O)
- 🏆 Win and draw game state handling
- 🎮 One-click game reset functionality
- 📱 Fully responsive design for all devices
- 🎨 Modern UI with hover effects and smooth animations
- ♿ Accessible interface with proper ARIA labels

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6885b571ee2d058c7a57c105&clone_repository=6885b62bee2d058c7a57c107)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built as standalone game application

### Code Generation Prompt

> Build a tic-tac-toe game in React with clean UI and game state management

The app has been tailored to provide an engaging gaming experience with modern React patterns and responsive design.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 18** - Frontend library with hooks for state management
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Modern JavaScript** - ES6+ features and React patterns

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Modern web browser

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd tic-tac-toe-game
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Game Features

### Game Logic
- **Win Detection**: Automatically detects wins in rows, columns, and diagonals
- **Draw Detection**: Handles tie games when all squares are filled
- **Turn Management**: Alternates between X and O players
- **Reset Functionality**: Start new games with preserved game statistics

### User Interface
- **Interactive Board**: Visual feedback on hover and click
- **Status Display**: Shows current player turn and game results
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## Game Rules

1. Players take turns placing X's and O's on a 3x3 grid
2. First player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
3. If all 9 squares are filled without a winner, the game is a draw
4. Click "New Game" to reset the board and start over

## Development

### Project Structure
```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Game page
│   └── globals.css         # Global styles
├── components/
│   ├── TicTacToe.tsx       # Main game component
│   ├── GameBoard.tsx       # Game board grid
│   ├── GameStatus.tsx      # Status and controls
│   └── CosmicBadge.tsx     # Cosmic branding
├── lib/
│   └── game-logic.ts       # Game logic utilities
└── types.ts                # TypeScript definitions
```

### Customization
- Modify colors and styling in `tailwind.config.js`
- Adjust game logic in `lib/game-logic.ts`
- Customize UI components in the `components/` directory

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `bun run build`
2. Deploy the `out/` directory to Netlify

### Other Platforms
This is a static Next.js application that can be deployed to any hosting platform that supports static sites.

<!-- README_END -->