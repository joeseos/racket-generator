# Necromunda Racket Generator

A web tool for randomly distributing rackets among players in the Necromunda tabletop game. Simplifies campaign setup by automatically assigning rackets from the official deck while avoiding duplicates. https://racketgenerator.netlify.app/

## Features

- Randomly assign rackets to any number of players
- Customizable rackets per player
- Individual racket re-drawing with duplicate prevention
- Add new players after initial assignment
- Editable player names
- Detailed racket information with linked rackets and enhanced boons
- Share results via URL
- Export assignments to JSON
- Responsive design for mobile and desktop

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/joeseos/racket-generator.git
cd racket-generator
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Usage

1. Enter the number of players and rackets per player
2. Optionally set custom player names
3. Click "Assign Rackets" to generate random assignments
4. Use the cycle button on individual rackets to re-draw them
5. Add additional players using the "Add Player" button
6. Share results with the Share button or export to JSON

## Technologies

- React 18
- Vite 4 (build tool and dev server)
- Tailwind CSS (via CDN)
- Lucide React (icons)
- Netlify (deployment)
