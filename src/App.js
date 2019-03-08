import React, { Component } from 'react';
import './static/css/style.css';
import one from './1.png'
import two from './2.png'
import three from './3.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrap">
          <div className="inwrap">
            <div class="yo">
              <div class="logo">
                <h1>
                  <span class="red">Hot</span><span class="two">llu</span><span class="third">ft?</span>
                </h1>
                <h1 class="tow">
                  <span class="red">triv</span><span class="two">astma</span><span class="third">go</span>
                </h1>
              </div>
            </div>
            <div class="yo2">
              <img className="reveal1" src={one} />
              <img className="reveal2" src={two} />
              <img className="reveal3" src={three} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
