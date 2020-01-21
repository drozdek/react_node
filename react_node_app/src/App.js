import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddCampaign from './components/AddCampaign';
import GetCampaign from './components/GetCampaign';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: []
    }
  }

  componentDidMount() {
    // fetch("/api/get-campaign").
    //   then(res => res.json()).
    //   then(name => this.setState({ name }, () => console.log(name)))
  }

  render() {
    return (
      <div>
        <Router>
          {/* <Route path="/" exact component={GetCampaign} /> */}
          <Route path="/get-campaign" exact component={GetCampaign} />
          <Route path="/add-campaign" exact component={AddCampaign} />
        </Router>
        {/* <ul>
          {this.state.name.map(names =>
            <li key={names}>{names}</li>
          )}
        </ul> */}
      </div>
    )
  }
}
export default App;