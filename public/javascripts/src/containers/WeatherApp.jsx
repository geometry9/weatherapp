import React from 'react';
import axios from 'axios';
import Current from '../components/Current';
import Day from '../components/Day';
import styles from './styles.css';
import moment from 'moment';

class WeatherApp extends React.Component {
  constructor(){
    super();
    this.state = { weatherData: null, lat: null, lon: null }
  }

  componentDidMount() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          axios.post(`/forecast/${pos.coords.latitude}/${pos.coords.longitude}`)
          .then((data) => {
            this.setState({
              weatherData: data.data.data,
              organized: this.organizeDataByDay(data.data.data),
              lat: pos.coords.latitude,
              long: pos.coords.longitude
            });
          }).catch((error) => console.log(error));

        },
        (error)=> { this.getDefault(); },
        { timeout: 50000}
      );
    }else{
      this.getDefault();
    }
  }

  getDefault(){
    axios.get('/forecast').then((data)=> {
      this.setState({
        weatherData: data.data.data,
        organized: this.organizeDataByDay(data.data.data)
      });
    }).catch((error) => console.log(error));
  }

  organizeDataByDay(data) {
    const organized = {};
    data.list.map((item) => {
      const day = moment(item.dt_txt).dayOfYear();
      const data = {
        time: item.dt_txt,
        rain: item.rain,
        wind: item.wind ,
        main: item.main,
        weather: item.weather[0],
      };

      if(organized[day]){
        organized[day].push(data)
      }else{
        organized[day] = [data];
      }
    });

    return organized;
  }

  renderDays(){
    const items = this.state.organized;
    const keys = Object.keys(this.state.organized);

    return (keys.map( (index, i) => {
      return (<Day key={i} numberClass={i+1} {...items[index][0]} />);
    }));
  }

  render(){
    const currentDay = this.state.organized ? Object.keys(this.state.organized)[0] : {};
    return(
      <div className={styles['weather-container']}>
        { (this.state.weatherData) ?
            (<div className={styles['weather-app']}>
              <Current
                city={this.state.weatherData.city.name}
                {...this.state.organized[currentDay]}
              />
              <div className={styles.weather}>
                {this.renderDays()}
              </div>
            </div>)
          :
            (<div className={styles.loader}></div>)
        }
      </div>

    );
  }
}

export default WeatherApp;
