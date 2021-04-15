import React, { Component } from 'react';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class Dice extends Component {
  state = {
    side: 3,
  };

  rollDice = () => {
    setTimeout(() => {
      this.setState({ side: '-empty' });
      setTimeout(() => {
        this.setState({ side: getRandomInt(1, 6) });
      }, 1000);
    }, 1);
  };

  render() {
    return (
      <div className="Dice">
        <img
          style={{ maxWidth: '100px' }}
          src={`/img/dice${this.state.side}.png`}
          alt={this.state.side}
          onClick={this.rollDice}
        />
      </div>
    );
  }
}

export default Dice;
