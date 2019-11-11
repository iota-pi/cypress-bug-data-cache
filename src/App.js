import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        data-count={this.state.count}
      >
        Hello world
      </button>
    );
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }
}

export default App;
