import React from 'react';

import Cell from './Cell';

import './Board.css';

class Board extends React.Component {
  render() {
    const {
      board,

      onClickCell,
    } = this.props;

    return (
      <div className="Board">
        {board.map((row, ridx) =>
          <div className="Row">
            {row.map((cell, cidx) =>
              <Cell
                onClick={() => onClickCell(ridx, cidx)}
                {...cell}
              />
            )}
          </div>
        )}
      </div>
    )
  }
}

export default Board;
