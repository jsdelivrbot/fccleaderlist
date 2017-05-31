import React, { Component } from 'react';
import axios from 'axios';
import list from './list'

export default class App extends Component {
constructor(props){
  super(props);
  this.state={
recentCampers: [],
allTimeCampers: [],
currentView: 'recentCampers'
  };
}

componentWillMount(){
  //make request and set states to response
  axios.all([this.fetchRecentCampers(),this.fetchAllTimeCampers()])
  .then(axios.spread((recentCampers,allTimeCampers) => {
    this.setState({
      recentCampers: recentCampers.data,
      allTimeCampers: allTimeCampers.data
    });
  }));
}

fetchRecentCampers(){
  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
}

fetchAllTimeCampers(){
  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
}

changeView(currentView){
  this.setState({currentView});
}

  render() {
    return (
      <div>
<h2>Viewing top {this.state.currentView}</h2>
<button onClick={() => this.changeView('recentCampers')} className="btn btn-primary">Recent</button>
<button onClick={() => this.changeView('allTimeCampers')} className="btn btn-primary">All time</button>
<list campers={this.state[this.state.currentView]}/>
      </div>
    );
  }
}
