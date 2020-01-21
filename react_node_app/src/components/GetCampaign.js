import React, { Component } from 'react';
import axios from 'axios';

class Getcampaign extends Component {
  constructor() {
    super();
    this.state = {
      getResponse: []
    }
  };

  async componentDidMount() {
    const odp = await axios.get('/api/get-campaign');
    console.log(odp.data)
    this.setState({ getResponse: odp.data });
  }

  render() {
    return (
      <div>
        <h1>Campaign info: </h1>
        <ul>
          {this.state.getResponse.map(e =>
            <li key={e.id}>
              <p>
                Campaign ID: <b>{e.id}</b><br />
                Start date: <span>{e.startDate}</span><br />
          End date: <span>{e.endDate}</span>
                <br />
                target impressions: {e.targetimpressions}, deliveredImpressions: {e.deliveredImpressions}
              </p>
            </li>)}
        </ul>
      </div>
    )
  }
};

export default Getcampaign