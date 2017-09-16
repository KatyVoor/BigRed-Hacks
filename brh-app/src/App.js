import React, { Component } from 'react';
import './main.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      top: 0,
      left: 0,
      width: 0,
      height: 0
    }

    this.setImageURL = this.setImageURL.bind(this);
  }

  makeCall(url) {
    const detectURL = 'https://eastus2.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceLandmarks=true';

    const body = {
      url: url
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '5e8e4a107812423299b6b06f0d209e9a'
      },
      body: JSON.stringify(body)
    }

    fetch(detectURL, options)
      .then(response => {
        return response.json();
      }).then(response => {
        console.log(response);
        // this.setState({
        //   top:
        // })
      })
  }

  setImageURL(event) {
    this.setState({
      imageURL: event.target.value
    })
  }

  render() {
    return (
      <div className="app">
        <div className="container-fluid app-wrapper">
          <div className="app-header-wrapper">
            <h2 className="app-header">Enter the image URL</h2>
            <div className="form-wrapper">
              <form>
                <input type="text" value={this.state.imageURL} onChange={this.setImageURL}/>
              </form>
              <button type="button" value="Submit" onClick={this.makeCall(this.state.imageURL)}></button>
          </div>
          </div>

          <div className="row">
            <div className="col-md-6 rendered-image-wrapper">
              <img src={this.state.imageURL} alt="" className="rendered-image"></img>
            </div>

            <div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
