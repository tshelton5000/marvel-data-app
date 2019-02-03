import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import reducer from './helpers/reducer';

import Profiles from './components/Profiles/Profiles';
import Navbar from './components/Navbar/Navbar';
import EventsBar from './components/EventsBar/EventsBar';
import Footer from './components/Footer/Footer';
import './App.css';

const store = createStore(reducer);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <div className="MainDisplay">
          <EventsBar />
          <Profiles/>
        </div>
        <Footer/>
      </Provider>
    );
  }
}

export default App;
