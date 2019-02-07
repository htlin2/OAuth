import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      enteredItem: '',
    }

    this.getTodos = this.getTodos.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleItemInput = this.handleItemInput.bind(this);
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos(userId = 1) {
    fetch(`/todos/${userId}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  handleSubmit(e) {
    e.preventDefault();
    let userId = 1;
    fetch(`/todos/${userId}`, {
      method: 'POST',
      body: JSON.stringify({ enteredItem: this.state.enteredItem }),
      headers: { 'Content-Type': 'application/json' },
    })
      .catch(error => console.log(error));
  }

  handleItemInput(e) {
    this.setState({ enteredItem: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="containerLeft">
          <h2>Todos</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.enteredItem} onChange={this.handleItemInput} />
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
