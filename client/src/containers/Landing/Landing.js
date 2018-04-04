import React, { Component } from "react";
import "./Landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      action: 'standard',
      data: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({data: users}));
  }

  handleClick(event) {
    var name = event.target.name;
    this.setState({action: name});
  }

  handleChange(event) {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value.trim()
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  goBack() {
    this.setState({action: 'standard'});    
  }

  render() {
    const action = this.state.action;

  	return(
      <div>
        <div className="Landing-Header">
          <h3>Spotify DJ</h3>
        </div>
        <div className="Landing-Body">
          {action === 'standard' &&
            <div>
              <button name="create" className="btn" onClick={this.handleClick}>Create</button>
              <button name="join" className="btn" onClick={this.handleClick}>Join</button>
            </div>
          }
          {action === 'create' &&
            <div>
              <button className="Back-Btn" onClick={this.goBack}>x</button>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="event">Event Name  </label>
                <input
                  id="event" 
                  type="text"
                  name="event"
                  onChange={this.handleChange}
                />
                <label htmlFor="host">Host</label>
                <input
                  id="host" 
                  type="text"
                  name="host"
                  onChange={this.handleChange}                  
                />
                <button>Next</button>
              </form>
            </div>
          }
          {action === 'join' &&
            <div>
              <button className="Back-Btn" onClick={this.goBack}>x</button>
              <p>Join</p>
              {this.state.data.map(user => {
                console.log(user);
                return (
                  <p>{user.username}</p>
                )
              })}
            </div>
          }
        </div>
      </div>
  	);
  }
}

export default Landing;