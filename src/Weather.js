import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Table } from 'reactstrap';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';
import Icons from './iconWidget/IconWidget.js';
import SearchBar from './searchBar/SearchBar.js';
import NavBar from './Navbar.js';
import { CurrentWeather, SunriseReport } from './routes.js';

//  api key 4 l8tr = 3d6b633422451393e953dab4052ea0e4
//  url 4 l8tr  - http://api.openweathermap.org/data/2.5/weather?q=Bozeman&appid= 
class WeatherComponent extends React.Component {
  render() {
      return (
        <div>
          <h1>{this.props.weatherData.name}</h1>
          <TableLogic weatherData={this.props.weatherData} />
          <Icons weatherData={this.props.weatherData} />
          <SearchBar weatherMethod={this.props.weatherMethod} />
        </div>
      );
  };
}
//Is this below a child? it is but why is there no super?
class WeatherTBody extends Component {
  render() {
    return (

      <tbody>
        <tr>
          <td>
            <Temperature tempK={this.props.weatherData.main.temp} />
          </td>
          <td>
            {this.props.weatherData.main.pressure}
          </td>
          <td>
            {this.props.weatherData.main.humidity}
          </td>
          <td>
            {this.props.weatherData.weather[0].description}
          </td>
        </tr>
      </tbody>
    );
  }
}

class Temperature extends Component {
  constructor() {
    super();
  }
  render() {
    return (

      <div>{(kelvinToFahrenheit(this.props.tempK))}&deg;F</div>
    );
  }
}

class TableLogic extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>

        <thead>
          <tr>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>

        <WeatherTBody weatherData={this.props.weatherData} />

      </div>
    );
  }
}

// Exercise 1:
//  In the table, we display the temperature in kelvin. Since we aren't
//  studying physics, that's not very useful. Build and use a react component
//  that converts the temperature to farenheit. 

// tip: So above, the jsx on line 61 will look something this:
//   ...<td>
//         <Farenheit temperature={this.props.weatherData.main.temp}>

// Exercise 2:
//  We need to "lift the state" so that multiple components can access the 
//  weather data that is being fetched from the api. So the first step is
//  to encapsulate all the table logic and templating and put it into it's own 
//  component. The app should still function and look the same, but we're passing 
//  the weather data into a child component instead of having everything inside
//  one component

// If you need help, here's some tips:
// step 1: make a new component, name it something appropriate, like "WeatherTable"
// step 2: inject the return value of the api into the new component, just like you
//         did with the kelvin converter. 
// step 3: render all the table templating inside of it. Feel free to copy and paste
//         to your hearts content!
export default WeatherComponent;
