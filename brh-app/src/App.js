import React, { Component } from 'react';
import './main.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: ""
    }

    this.setImageURL = this.setImageURL.bind(this);
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
          </div>
          </div>

          <div className="row">
            <div className="col-md-6 rendered-image-wrapper">
              <img src={this.state.imageURL} alt="img" className="rendered-image"></img>
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
