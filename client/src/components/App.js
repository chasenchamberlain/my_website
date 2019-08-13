import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios';
// import logo from '../images/logo.svg';
import Landing from '../pages/Landing'
import '../css/App.css';

class App extends Component {
  state = {
    data: 'todo'
  }
  componentDidMount = () => {
    // Make sure to change the (localhost) on the line bellow 
    // to the public DNS of your EC2 instance
    axios.get(`http://localhost:4000/sayHello`)
      .then(res => {
        const dataFromServer = res.data;
        this.setState({ data: dataFromServer });
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>Server is saying:</p>
          <p>
            {this.state.data}
          </p> */}
          <Router>
            <main>
              <Route exact path='/' render={(props) => <Landing {...props} {...this.props} />} />
            </main>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
