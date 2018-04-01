import React, { Component } from "react";
import "./Landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      action: 'standard'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    var name = event.target.name;
    console.log(name);
    this.setState({action: name});
  }

  render() {
    const action = this.state.action;

    switch(action) {
      case 'standard':
        console.log('standard');
        break;

      default:
        console.log('def');
        break;
    }

  	return(
      <div>
        <div className="Landing-Header">
          <h3>Spotify DJ</h3>
        </div>
        <div className="Landing-Body">
          <div id="toHide">
            <button name="create" className="btn" onClick={this.handleClick}>Create</button>
            <button name="join" className="btn" onClick={this.handleClick}>Join</button>
          </div>
          <div>
            {this.state.create ?
              <p>sup sup</p>
              : 
              <p>no no nno</p>
            }
          </div>
        </div>
      </div>
  	);
  }
}

export default Landing;