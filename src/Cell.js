import React from 'react';

class Cell extends React.Component {
  render() {
    const {
      alive,

      onClick,
    } = this.props

    return (
      <div
        className={`Cell ${alive ? 'alive' : 'dead'}`}
        onClick={onClick}
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: alive ? 'black' : 'grey',
        }}
      />
    );
  }
}

export default Cell;
