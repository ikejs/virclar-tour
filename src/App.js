import React, { Component } from 'react';
import Intro from './Intro';
import Tour from './Tour';
import Outro from './Outro';
import logo from './logo.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      introActive: true,
      tourActive: false,
      outroActive: false
    }

  }

  render() {
    return (
      <div>
        <div className="pb-2" style={{backgroundColor: '#5180AD'}}>
          <img 
            className="w-100" 
            src={logo}
            alt="Vir Clar"
            onClick={() => {
              this.setState({ introActive: true });
              this.setState({ tourActive: false });
              this.setState({ outroActive: false });
            }}
          />
        </div>
        <Intro
          enabled={this.state.introActive}
          hideIntro={() => {
            this.setState({ introActive: false });
            this.setState({ tourActive: true });
          }} />
        <Tour enabled={this.state.tourActive}
          hideTour={() => {
            this.setState({ tourActive: false });
            this.setState({ outroActive: true });
          }}/>
        <Outro enabled={this.state.outroActive} />
      </div>
    );
  }
}

export default App;
