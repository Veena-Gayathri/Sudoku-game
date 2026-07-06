# Sudoku

A Sudoku game with two ways to play: a terminal version in Python, and a browser version hosted on GitHub Pages.

## Play in the browser

https://veena-gayathri.github.io/Sudoku-game/

No install needed — just open the link. Pick a difficulty, click or tap a cell, and enter numbers with your keyboard or the on-screen number pad.

## Play in the terminal

Requires Python 3 and NumPy.

```bash
cd python
pip install numpy
python sudoku.py
```

You'll be asked to choose a difficulty (Easy / Medium / Hard), then a puzzle is generated and you can start filling it in — enter a row, column, and number, or press `10` to reveal the solution and exit.

## Project structure

sudoku-project/
├── python/
│   └── sudoku.py     # terminal version
├── docs/
│   └── index.html    # browser version (served via GitHub Pages)
├── .gitignore
└── README.md

The two versions don't share code — the browser game is a standalone JavaScript reimplementation of the same generation and solving logic, since Python doesn't run natively in a browser.

## How it works

Both versions use the same core approach:
- A full solved board is built with randomized backtracking.
- Cells are removed one at a time to create the puzzle, checking after each removal that the puzzle still has exactly one solution.
- Difficulty controls how many cells get removed: Easy (35), Medium (41), Hard (47).
