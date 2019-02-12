import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      enteredItem: '',
      isAuthenticated: false,
    }

    this.handleGetRequest = this.handleGetRequest.bind(this);
    this.handlePostRequest = this.handlePostRequest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleItemInput = this.handleItemInput.bind(this);
  }

  componentDidMount() {
    this.handleGetRequest();
  }

  handleGetRequest(userId = 1) {
    fetch(`https://6myuu5upwb.execute-api.us-east-1.amazonaws.com/prod/api/list/?userId=${userId}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  handlePostRequest(userId) {
    fetch(`/api/list/${userId}`, {
      method: 'POST',
      body: JSON.stringify({ enteredItem: this.state.enteredItem }),
      headers: { 'Content-Type': 'application/json' },
    })
      .catch(error => console.log(error));
  }

  handleSubmit(e) {
    e.preventDefault();
    let userId = 1;
    this.handlePostRequest(userId);
    this.handleGetRequest(userId);
    this.setState({ enteredItem: '' });
  }

  handleItemInput(e) {
    this.setState({ enteredItem: e.target.value });
  }

  render() {
    const renderList = this.state.data.map(ele => {
      const { todo } = ele;
      return (
        <li key={ele.id}>{todo}</li>
      )
    });
    return (
      <div className="container">
        <div className="containerLeft">
          <h2>Todos</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.enteredItem} onChange={this.handleItemInput} />
            <input type="submit" />
          </form>
        </div>
        {renderList}
      </div>
    )
  }
}

export default Todo;
