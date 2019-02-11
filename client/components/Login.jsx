import React from 'react';
import { Auth } from "aws-amplify";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange(e) {
    this.setState({
      [e.target.type]: e.target.value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      await Auth.signIn(this.state.email, this.state.password);
      alert("Logged in");
    } catch (error) {
      alert(error.message)
    }
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <label>
            Email: <input type="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Password: <input type="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <button disabled={!this.validateForm()} type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}


export default Login;
