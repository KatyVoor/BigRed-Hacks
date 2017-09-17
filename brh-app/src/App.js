import React, { Component } from 'react';
import CanvasComponent from './components/DrawLines.js';
import './main.css';
import logo from './resources/brh-app-logo.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      points: {
        rectangleTop: 0,
        rectangleLeft: 0,
        eyeLeftTopY: 0,
        eyeRightTopY: 0,
        noseTipY: 0
      }
    }

    this.setImageURL = this.setImageURL.bind(this);
    this.makeCall= this.makeCall.bind(this);
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
          console.log(response[0]);
          this.setState({
            points: {
              rectangleTop: response[0].faceRectangle.top,
              rectangleLeft: response[0].faceRectangle.left,
              eyeRightTopY: response[0].faceLandmarks.eyeRightTop.y,
              eyeLeftTopY: response[0].faceLandmarks.eyeLeftTop.y,
              noseTipY: response[0].faceLandmarks.noseTip.y
            }
          });
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
              <button type="button" value="Submit" onClick={() => this.makeCall(this.state.imageURL)} className="form-button">SUBMIT</button>
          </div>
          </div>

          <div className="row body-wrapper">
            <div className="col-md-6 logo-wrapper">
              <img src={logo} alt="logo" className="logo"></img>
            </div>
            <div className="col-md-6 rendered-image-wrapper">
              <img src={this.state.imageURL} alt="" className="rendered-image"></img>
            </div>

            {/* <div className="col-md-6 draw-lines-wrapper">
              <CanvasComponent points={this.state.points}></CanvasComponent>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
