import React, { Component } from 'react';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton'
import Spinner from './Spinner'
import CamperTable from './CamperTable'
import './Leaderboard.css';

class Leaderboard extends Component {

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
    if( (!this.state.recentCampers.length === 0) && (!this.state.fetchAllTimeCampers.length === 0) ) {
      return <Spinner />
    }
    return (
      <div className="Leaderboard">

          <h1>{`Viewing Top  ${this.state.currentView}`}</h1>
          <RaisedButton onClick={() => this.changeView('recentCampers')} label="Recent" className='header-button' />
          <RaisedButton onClick={() => this.changeView('allTimeCampers')} label="All Time" className='header-button' />
          <CamperTable campers={this.state[this.state.currentView]} />
      </div>
    );
  }
}

export default Leaderboard;
