import React from 'react';

export class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', password: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    checkPassword(event){
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label><br/>

          <label htmlFor="password">Password:</label>
          <input 
                id="password" 
                type="password" 
                name="password" 
                value={this.state.password} 
                onChange={this.checkPassword.bind(this)}/><br/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }