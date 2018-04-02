import React, { Component } from "react";
import "./Landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      action: 'standard'
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  handleClick(event) {
    var name = event.target.name;
    this.setState({action: name});
  }

  handleChange() {
    // to do...
  }

  handleSubmit() {
    // to do
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
                <input 
                  type="text"
                  name="event"
                  onChange={this.handleChange}
                />
                <input 
                  type="text"
                  name="host"
                  onChange={this.handleChange}                  
                />
              </form>
            </div>
          }
          {action === 'join' &&
            <div>
              <button className="Back-Btn" onClick={this.goBack}>X</button>
              <p>Join</p>
            </div>
          }
        </div>
      </div>
  	);
  }
}

export default Landing;