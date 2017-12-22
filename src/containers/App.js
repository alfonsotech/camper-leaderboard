import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Leaderboard from '../components/Leaderboard'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Leaderboard />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
