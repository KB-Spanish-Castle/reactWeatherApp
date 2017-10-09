import React, { Component } from 'react';
import moment from 'moment';

class Sunrise extends Component {
  constructor() {
    super()
    this.state = {
      initialized: false
    }
  }

  weatherMethod() {
    var url = 'https://api.giphy.com/v1/gifs/random?api_key=dRdxGpvXbJbYP9BELn1U3D0V94VleXD7&tag=&' + this.descrip + 'rating=G';
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
    this.weatherMethod("");
  }
  render() {
    if (this.state.initialized) {

      this.descrip = this.props.weatherData.weather[0].description;
      console.log(this.descrip);
      var sunrise = this.props.weatherData.sys.sunrise;
      var sunriseM = new moment(sunrise);
      let finalSunRise = sunriseM.utcOffset(6).format('hh:mm');
      return (
        <div>
          Sunrise:
        {finalSunRise}
        </div>
      );
    } else {
      return (
        <h1> Loading... </h1>

      );
    }
  }
}

export default Sunrise;
// Step 5: Make a 'sunrise report' component that renders the time of todays sunrise in the format Sunrise: 
// in large text, centered
// on the page. Using the giphy api and the weather description as keywords, grab a giphy image and set it to the
// background image for the sunrise time. Have this rendered when the user goes to appropriate url using react-router. 
