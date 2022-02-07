import React from "react";
import BoardComponent from "./BoardComponent";
import GameInfoComponent from "./GameInfoComponent";

class GameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      status: "Next Player : X",
      gameCompleted: false
    };
  }

  render() {
    return (
      <div className="container">
        <GameInfoComponent status={this.state.status} />
        <BoardComponent
          squares={this.state.squares}
          onClick={(i) => this.handleClick(i)}
        />
      </div>
    );
  }

  handleClick(i) {
    if (this.state.gameCompleted || this.state.squares[i] != null) {
      return;
    }
    const squares = this.state.squares.slice();
    if (this.state.xIsNext) {
      squares[i] = "X";
    } else {
      squares[i] = "O";
    }
    var winner = this.calculateWinner(squares);
    if (winner != null) {
      this.state.status = "Winner - " + winner;
      this.state.gameCompleted = true;
    } else {
      this.state.xIsNext = !this.state.xIsNext;
      this.state.status = "Next player : " + (this.state.xIsNext ? "X" : "O");
    }
    this.setState({ squares: squares });
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
}

export default GameComponent;
