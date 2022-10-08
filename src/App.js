import React, { Component } from 'react';
import Main from './components/MainComponent';
import ScrollTop from './functionalComponents/ScrollTop';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollTop>
          <div>
            <Main />
          </div>
        </ScrollTop>
      </BrowserRouter>
    );
  }
}

export default App;
