import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container">
        <div className="containerLeft">
          <h2>Left</h2>
        </div>
        <div className="containerRight">
          <h2>Right</h2>
        </div>
      </div>
    )
  }
}

export default App;
