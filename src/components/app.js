import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default App;
