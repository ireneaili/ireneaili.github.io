import React, { Component } from 'react';
import '../css/squares.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="grid-container">
          <div class="square-box"><p className="square-title">IRENE</p></div>
          <div class="square-box"><p className="square-title">RESUME</p></div>
          <div class="square-box"><p className="square-title">PROJECTS</p></div>
          <div class="square-box"><p className="square-title">MORE</p></div>
        </div>
      </div>
    );
  }
}

export default App;
