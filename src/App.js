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
    // this.componentWillMount = this.componentWillMount.bind(this)
    // this.fetchRecentCampers = this.fetchRecentCampers.bind(this)
    // this.fetchAllTimeCampers = this.fetchAllTimeCampers.bind(this)
  }

  //this function will run once before the first render of the component
  //a good place to fetch from API
  componentWillMount() {
    //make concurrent requests and set state to response
    axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()])
  .then(axios.spread(function (recentCampers, allTimeCampers) {
    // Both requests are now complete
    this.setState({ recentCampers:recentCampers, allTimeCampers:allTimeCampers })
  }))



    // axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()])
    // .then(axios.spread(function(recentCampers, allTimeCampers) {
    //   this.setState({ recentCampers:recentCampers, allTimeCampers:allTimeCampers })
    // }))
    // this.fetchRecentCampers();
    // this.fetchAllTimeCampers();
  }

  fetchRecentCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    // .then(function(recentCampers) {
    //   this.setState({ recentCampers:recentCampers })
    // })
  }

  fetchAllTimeCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    // .then(function(allTimeCampers) {
    //   this.setState({ allTimeCampers:allTimeCampers })
    // })
  }



  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
