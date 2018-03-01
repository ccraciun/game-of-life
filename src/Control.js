import React from 'react';

class Control extends React.Component {

  run = () => {
    const { onStep } = this.props;

    clearInterval(this.interval);
    this.interval = setInterval(onStep, 1000);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  render() {
    const {
      onStep,
    } = this.props;

    return (
      <div className="Control">
        <button
          onClick={onStep}
        >
          Step
        </button>
        <button
          onClick={this.run}
        >
          Run
        </button>
        <button
          onClick={this.pause}
        >
          Pause
        </button>
      </div>
    );
  }
}

export default Control;
