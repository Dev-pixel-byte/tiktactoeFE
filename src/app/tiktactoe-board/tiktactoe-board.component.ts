import { Component } from '@angular/core';

@Component({
  selector: 'app-tiktactoe-board',
  templateUrl: './tiktactoe-board.component.html',
  styleUrls: ['./tiktactoe-board.component.css']
})
export class TiktactoeBoardComponent {
  currentPlayer: 'X' | 'O' = 'X';
  board: string[] = Array(9).fill('');

  makeMove(index: number): void {
    if (this.board[index] === '') {
      this.board[index] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  resetBoard(): void {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
  }

  getStatusMessage(): string {
    const winner = this.calculateWinner();
    if (winner) {
      return `Player ${winner} wins!`;
    } else if (!this.board.includes('')) {
      return 'It\'s a tie!';
    } else {
      return `Current player: ${this.currentPlayer}`;
    }
  }

  calculateWinner(): string | null {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (
        this.board[a] !== '' &&
        this.board[a] === this.board[b] &&
        this.board[b] === this.board[c]
      ) {
        return this.board[a];
      }
    }

    return null;
  }
}
