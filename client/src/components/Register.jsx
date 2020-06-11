import React, { Component } from 'react';

export default class Register extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password } = this.state;
    const { handleRegisterSubmit, history } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegisterSubmit(this.state);
        history.push('/');
        this.setState({
          username: "",
          password: ""
        })
      }}>
        <h3>Register</h3>
        <label htmlFor="username">username:
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor="password">password:
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    )
  }
}
