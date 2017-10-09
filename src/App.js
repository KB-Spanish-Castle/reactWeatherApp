import React, { Component } from 'react';
import NavBar from './Navbar.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import WeatherComponent from './Weather.js';
import Sunrise from './Sunrise.js';
import Home from './Home.js';
class App extends Component {
  constructor() {
    super();
    this.state = {
      initialized: false
    }
    this.weatherMethod = this.weatherMethod.bind(this);
  }
  weatherMethod(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3d6b633422451393e953dab4052ea0e4';
    fetch(url).then(function (response) {
      return response.json();
    }).then((weatherObj) => {
      console.log(weatherObj);
      this.weatherData = weatherObj;
      this.setState({
        initialized: true
      });
    });
  }

  componentDidMount() {
    this.weatherMethod("Bozeman");
  }

  render() {
    if (this.state.initialized) {
      return (

        <Router>
          <div>
            <NavBar />
            <Route path='/CurrentWeather' render={() => <WeatherComponent weatherData={this.weatherData} />} />
            <Route path='/Sunrise' render={() => <Sunrise weatherData={this.weatherData} />} />
            <Route exact path='/' render={() => <Home weatherData={this.weatherData} />} />
          </div>
        </Router>

      );
    } else {
      return (
        <h1> Loading... </h1>
      )
    }
  }
}
export default App;
