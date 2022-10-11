//importing main links
import React, { Component } from 'react';
import Main from './components/MainComponent';
import ScrollTop from './functionalComponents/ScrollTop';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

//MAIN APP COMPONENT
function App() {

    return (
      <Provider store={store}>
        <BrowserRouter>
        {/* rendering scroll to top function plugin */}
          <ScrollTop>
            <div>
              <Main />
            </div>
          </ScrollTop>
        </BrowserRouter>
      </Provider>
    );
  
}

export default App;
