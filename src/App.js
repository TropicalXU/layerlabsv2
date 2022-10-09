//importing main links
import React, { Component } from 'react';
import Main from './components/MainComponent';
import ScrollTop from './functionalComponents/ScrollTop';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

//MAIN APP COMPONENT
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* rendering scroll to top function plugin */}
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
