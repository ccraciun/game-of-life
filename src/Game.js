import React from 'react';

import Board from './Board';
import Control from './Control';

const getLiveAsInt = (board, r, c) => {
  const it = (board[r] || [])[c] || {alive: 0};

  return it.alive;
};

class Game extends React.Component {
  constructor(props) {
    super(props);

    const { height, width } = props;

    const board = Array.from(Array(height)).map(() =>
      Array.from(Array(width)).map(() => ({
        alive: false,
      })),
    );

    this.state = {
      board,
    };
  }

  toggleCell = (r, c) => {
    const { board } = this.state;

    board[r][c].alive = Boolean(board[r][c].alive ^ 1);

    this.setState({
      board,
    });
  }

  step = () => {
    const { board } = this.state;
    const { height, width } = this.props;

    const nextBoard = Array.from(Array(height)).map((_, r) =>
      Array.from(Array(width)).map((_, c) => {
        const numAliveNeighbors =
          getLiveAsInt(board, r-1,c-1) + getLiveAsInt(board, r-1,c) + getLiveAsInt(board, r-1,c+1) +
          getLiveAsInt(board, r,c-1)   +                            + getLiveAsInt(board, r,c+1) +
          getLiveAsInt(board, r+1,c-1) + getLiveAsInt(board, r+1,c) + getLiveAsInt(board, r+1,c+1);

        const alive = board[r][c].alive;

        return {
          alive: numAliveNeighbors === 3 || (alive && numAliveNeighbors === 2),
        };
      })
    );

    this.setState({
      board: nextBoard,
    });
  }

  render() {
    return (
      <div className="Game">
        <Control
          onStep={this.step}
        />
        <Board
          board={this.state.board}
          onClickCell={this.toggleCell}
        />
      </div>
    );
  }
}

export default Game;
