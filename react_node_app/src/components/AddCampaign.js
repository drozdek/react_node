import React, { Component } from 'react';
import axios from 'axios';

class AddCampaign extends Component {
  constructor() {
    super();
    this.state = {
    }
    this.inputID = React.createRef();
    this.startDate = React.createRef();
    this.endDate = React.createRef();
    this.targetImpressions = React.createRef();
  };

  send = (e) => {
    return fetch('/api/add-campaign', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        inputID: this.inputID.current.value,
        startDate: this.startDate.current.value,
        endDate: this.endDate.current.value,
        targetImpressions: this.targetImpressions.current.value,
      })
    });
  }
  render() {
    return (
      <div>
        <h1>AddCampaign module</h1>
        <form
          onSubmit={this.send}
          encType="application/x-www-form-urlencoded"
          className="ui form"
        >
          <input ref={this.inputID} className="field"/>
          <input ref={this.startDate} className="field"/>
          <input ref={this.endDate} className="field"/>
          <input ref={this.targetImpressions} className="field" />
          <br />
          <input type="submit" value="Submit" />

        </form>
      </div>
    )
  }
};

export default AddCampaign;