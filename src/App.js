import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recentCampers: [],
      allTimeCampers: [],
      currentView: 'recentCampers'
    }
  }

  //this function will run once before the first render of the component
  //a good place to fetch from API
  componentWillMount() {
    //make concurrent requests and set state to response
    axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()])
    .then(axios.spread( (recentCampers, allTimeCampers) => {
      // Both requests are now complete
      this.setState({
        recentCampers: recentCampers.data,
        allTimeCampers: allTimeCampers.data
      })
    }))
  }

  fetchRecentCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
  }

  fetchAllTimeCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
  }

  changeView(currentView) {
    this.setState({currentView})
  }

  render() {
    return (
      <div className="App">
        <h1>{`Viewing Top: ${this.state.currentView}`}</h1>
        <button onClick={() => this.changeView('recentCampers')}>Recent</button>
        <button onClick={() => this.changeView('allTimeCampers')}>All Time</button>
      </div>
    );
  }
}

export default App;
